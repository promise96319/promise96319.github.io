# Lanes 模型

## 初衷

`React`在提升用户交互体验时，较为重要的一点是优先响应用户交互触发的更新任务，其余不那么重要的任务要做出让步，我们把用户交互触发的任务称为**高优先级任务**，不那么重要的任务称为**低优先级任务**。

`React`的`Concurrent`模式下，不同优先级任务的存在会导致一种现象：高优先级的任务可以打断低优先级任务的执行。另外，倘若低优先级任务一直被高优先级任务打断，那么低优先级任务就会过期(应该在某个时间执行但是被打断了)，会被强制执行。这就是涉及到两个问题：**高优先级任务插队**和**饥饿问题**。

`React`通过引`Lanes`模型来解决优先级相关的问题，`Lanes`模型相对于传统的`Expiration Times`模型主要有两大优势：

1. `Lanes`将任务优先级的概念（“A任务优先级是否高于任务B？”）与任务批处理（“A任务是否属于这组任务？”）分离开来。（增加了”批“的概念）。
2. `Lanes`可以用单个32位二进制数据表示许多不同的任务线程。

详细的`Lanes`模型提出过程可以查看[Initial Lanes implementation](https://github.com/facebook/react/pull/18796)这篇文章。

## Lanes

`react-reconciler/src/ReactFiberLanes.new.js`文件中，定义了31位`Lane`。

```javascript
export const TotalLanes = 31;

// 没有 lane
export const NoLanes: Lanes = /*                        */ 0b0000000000000000000000000000000;
export const NoLane: Lane = /*                          */ 0b0000000000000000000000000000000;

// 同步 lane，比如 click 事件
export const SyncLane: Lane = /*                        */ 0b0000000000000000000000000000001;

// 用户连续输入 lane，比如 drag 事件
export const InputContinuousHydrationLane: Lane = /*    */ 0b0000000000000000000000000000010;
export const InputContinuousLane: Lanes = /*            */ 0b0000000000000000000000000000100;

// 默认 lane，比如 setTimeout 后设置
export const DefaultHydrationLane: Lane = /*            */ 0b0000000000000000000000000001000;
export const DefaultLane: Lanes = /*                    */ 0b0000000000000000000000000010000;

// useTransition、useDeferredValue 时
const TransitionHydrationLane: Lane = /*                */ 0b0000000000000000000000000100000;
const TransitionLanes: Lanes = /*                       */ 0b0000000001111111111111111000000;
const TransitionLane1: Lane = /*                        */ 0b0000000000000000000000001000000;
const TransitionLane2: Lane = /*                        */ 0b0000000000000000000000010000000;
const TransitionLane3: Lane = /*                        */ 0b0000000000000000000000100000000;
const TransitionLane4: Lane = /*                        */ 0b0000000000000000000001000000000;
const TransitionLane5: Lane = /*                        */ 0b0000000000000000000010000000000;
const TransitionLane6: Lane = /*                        */ 0b0000000000000000000100000000000;
const TransitionLane7: Lane = /*                        */ 0b0000000000000000001000000000000;
const TransitionLane8: Lane = /*                        */ 0b0000000000000000010000000000000;
const TransitionLane9: Lane = /*                        */ 0b0000000000000000100000000000000;
const TransitionLane10: Lane = /*                       */ 0b0000000000000001000000000000000;
const TransitionLane11: Lane = /*                       */ 0b0000000000000010000000000000000;
const TransitionLane12: Lane = /*                       */ 0b0000000000000100000000000000000;
const TransitionLane13: Lane = /*                       */ 0b0000000000001000000000000000000;
const TransitionLane14: Lane = /*                       */ 0b0000000000010000000000000000000;
const TransitionLane15: Lane = /*                       */ 0b0000000000100000000000000000000;
const TransitionLane16: Lane = /*                       */ 0b0000000001000000000000000000000;

// 出错后重试 lane
const RetryLanes: Lanes = /*                            */ 0b0000111110000000000000000000000;
const RetryLane1: Lane = /*                             */ 0b0000000010000000000000000000000;
const RetryLane2: Lane = /*                             */ 0b0000000100000000000000000000000;
const RetryLane3: Lane = /*                             */ 0b0000001000000000000000000000000;
const RetryLane4: Lane = /*                             */ 0b0000010000000000000000000000000;
const RetryLane5: Lane = /*                             */ 0b0000100000000000000000000000000;

export const SomeRetryLane: Lane = RetryLane1;

export const SelectiveHydrationLane: Lane = /*          */ 0b0001000000000000000000000000000;

// 非空闲 lane
const NonIdleLanes = /*                                 */ 0b0001111111111111111111111111111;


export const IdleHydrationLane: Lane = /*               */ 0b0010000000000000000000000000000;
// 空闲 lane
export const IdleLane: Lanes = /*                       */ 0b0100000000000000000000000000000;
// 离屏 lane
export const OffscreenLane: Lane = /*                   */ 0b1000000000000000000000000000000;
```

## 优先级

不同的`lane`对应不同的优先级，在`react-reconciler/src/ReactFiberWorkLoop.new.js`文件中，找到`requestUpdateLane`:

```javascript
export function requestUpdateLane(fiber: Fiber): Lane {
  const mode = fiber.mode;
  if ((mode & ConcurrentMode) === NoMode) {
    return (SyncLane: Lane);
  }

  // 如果使用了 useTransition 等 hook，那么这里会设置 isTransition 为 true
  const isTransition = requestCurrentTransition() !== NoTransition;
  if (isTransition) {
    // 返回当前的 transition lane
    return currentEventTransitionLane;
  }

  const updateLane: Lane = (getCurrentUpdatePriority(): any);
  if (updateLane !== NoLane) {
    return updateLane;
  }

  // 这里是获取当前事件的优先级，通过 window.event.type 可以识别当前事件。
  const eventLane: Lane = (getCurrentEventPriority(): any);
  return eventLane;
}
```

每次执行一次更新的时候，都会去获取对应的`lane`，默认情况下，会调用`getCurrentEventPriority`方法，在`react-dom/src/client/ReactDOMHostConfig.js`文件中：

```javascript
export function getCurrentEventPriority(): * {
  const currentEvent = window.event;
  if (currentEvent === undefined) {
    return DefaultEventPriority;
  }
  return getEventPriority(currentEvent.type);
}
```

当`window.event`不存在时，返回的是默认的事件优先级，也就是对应的`DefaultLane`。否则执行`getEventPriority`。找到`react-dom/src/events/ReactDOMEventListener.js`文件：

```javascript
export function getEventPriority(domEventName: DOMEventName): * {
  switch (domEventName) {
    // Used by SimpleEventPlugin:
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    // Used by polyfills:
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    // Only enableCreateEventHandleAPI:
    case 'beforeblur':
    case 'afterblur':
    // Not used by React but could be by user code:
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      // 均为同步优先级
      return DiscreteEventPriority;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    // Not used by React but could be by user code:
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      // 均为连续事件优先级
      return ContinuousEventPriority;
    case 'message': {
      // 获取 scheduler callback 的优先级
      const schedulerPriority = getCurrentSchedulerPriorityLevel();
      switch (schedulerPriority) {
        case ImmediateSchedulerPriority:
          return DiscreteEventPriority;
        case UserBlockingSchedulerPriority:
          return ContinuousEventPriority;
        case NormalSchedulerPriority:
        case LowSchedulerPriority:
          // TODO: Handle LowSchedulerPriority, somehow. Maybe the same lane as hydration.
          return DefaultEventPriority;
        case IdleSchedulerPriority:
          return IdleEventPriority;
        default:
          return DefaultEventPriority;
      }
    }
    default:
      return DefaultEventPriority;
  }
}
```

可见不同的事件类型对应不同`lane`，也就是对应不同的优先级。

## Lanes运算

`Lanes`之间都是通过二进制运算的，如：

```javascript
// 合并两条 lanes
export function mergeLanes(a: Lanes | Lane, b: Lanes | Lane): Lanes {
  return a | b;
}

// 移除 lanes
export function removeLanes(set: Lanes, subset: Lanes | Lane): Lanes {
  return set & ~subset;
}
```

其中比较难理解一点的就是获取最高优先级的函数：

```javascript
export function getHighestPriorityLane(lanes: Lanes): Lane {
  return lanes & -lanes;
}
```

`lanes & -lanes`可以简单理解为：获取二进制数中最后一个为`1`的位的值，如`11100100`中最后一个`1`是`100`，因此计算出来的值就是`4`。
