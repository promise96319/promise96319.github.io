# hooks 实现

在`beginWork`阶段，为了获取函数式组件的`children`，在`updateFunctionComponent`函数中会调用`renderWithHooks`方法：

```javascript
nextChildren = renderWithHooks(
	current,
  workInProgress,
  Component,
  nextProps,
  context,
  renderLanes,
);
```

`renderWithHooks`方法在`ReactFiberHooks.new.js`文件中定义，它的关键代码为：

```javascript
ReactCurrentDispatcher.current =
  current === null || current.memoizedState === null
  ? HooksDispatcherOnMount
	: HooksDispatcherOnUpdate;
let children = Component(props, secondArg);
ReactCurrentDispatcher.current = ContextOnlyDispatcher;
```

首先会根据`current.memoizedState`来判断当前是`mount`阶段还是`update`阶段，从而决定使用`HooksDispatcherOnMount`还是`HooksDispatcherOnUpdate`。然后执行`Component`，在执行的过程中，如果我们只用了`hook`，那么就会执行相应的`hook`。最后将`ReactCurrentDispatcher.current`置空。下面看一下`hooks`的实现。

## useState

`useState`在`React`包中定义，其他的`hooks`也同样在这里定义：

```javascript
export function useState<S>(
  initialState: (() => S) | S,
): [S, Dispatch<BasicStateAction<S>>] {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
```

第一步是`resolveDispatcher`获取当前的`dispatcher`。在函数执行前已经通过`mount/update`将当前的`diaptcher`存放到全局了，所以这里可以获取到。

### mount 阶段

如果是`mount`阶段，`useState`对应的是`mountState`方法：

```javascript
const HooksDispatcherOnMount: Dispatcher = {
  useState: mountState,
}


function mountState<S>(
  initialState: (() => S) | S,
): [S, Dispatch<BasicStateAction<S>>] {
  // 创建一个 hook，挂载到 fiber上，并返回
  const hook = mountWorkInProgressHook();
  if (typeof initialState === 'function') {
    initialState = initialState();
  }
  hook.memoizedState = hook.baseState = initialState;
  // 初始化 queue
  const queue = (hook.queue = {
    pending: null,
    interleaved: null,
    lanes: NoLanes,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: (initialState: any),
  });
  const dispatch: Dispatch<
    BasicStateAction<S>,
    > = (queue.dispatch = (dispatchAction.bind(
      null,
      currentlyRenderingFiber,
      queue,
    ): any));
  return [hook.memoizedState, dispatch];
}
```

#### mountWorkInProgressHook方法

第一步执行的是`mountWorkInProgressHook`，该函数首先会创建一个`hook`，用于存放对应`hook`的状态：

```javascript
  const hook: Hook = {
    // 记录该 hook 的 state
    memoizedState: null,
    // base state
    baseState: null,
    // base queue
    baseQueue: null,
    // 更新queue
    queue: null,
    // 指向下一个 hook
    next: null,
  };
```

随后将`hook`形成链表结构，并将该链表存放到`fiber.memoizedState`当中：

```javascript
  if (workInProgressHook === null) {
    // currentlyRenderingFiber 表示的是当前正在执行的的 函数 fiber。
    currentlyRenderingFiber.memoizedState = workInProgressHook = hook;
  } else {
    // 遇到的 hooks 形成链表形式。
    workInProgressHook = workInProgressHook.next = hook;
  }
```

这样后续就可以通过链表来访问每一个使用到的`hook`的状态了。

#### dispatchAction

在拿到`hook`后会初始化`memoizedState`，并将相应的`memoizedState`和`dispatch`函数返回。当调用`dispatch`函数时，实际出发的是`dispatchAction`函数，首先会创建一个`update`:

```javascript
const eventTime = requestEventTime();
const lane = requestUpdateLane(fiber);

const update: Update<S, A> = {
  lane,
  action,
  // update.eagerReducer = lastRenderedReducer;
  eagerReducer: null,
  // update.eagerState = lastRenderedReducer(currentState, action);
  eagerState: null,
  next: (null: any),
};
```

如果当前正在处理这个`fiber`，此时出发了`dispatch`，那么会执行如下分支：

```javascript
if (
  fiber === currentlyRenderingFiber ||
  (alternate !== null && alternate === currentlyRenderingFiber)
) {
  // 注意这个参数用于防止循环渲染
  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
  const pending = queue.pending;
  // 将 update 形成链表形式
  if (pending === null) {
    update.next = update;
  } else {
    update.next = pending.next;
    pending.next = update;
  }
  queue.pending = update;
}
```

此时会将`update`形成循环链表，存放到`queue.pending`当中，并将`didScheduleRenderPhaseUpdateDuringThisPass`标记为`true`，这个标记在`renderWithHooks`中有用到：

```javascript
  if (didScheduleRenderPhaseUpdateDuringThisPass) {
    let numberOfReRenders: number = 0;
    do {
      didScheduleRenderPhaseUpdateDuringThisPass = false;
      invariant(
        numberOfReRenders < RE_RENDER_LIMIT,
        'Too many re-renders. React limits the number of renders to prevent ' +
        'an infinite loop.',
      );

      numberOfReRenders += 1;

      currentHook = null;
      workInProgressHook = null;
      workInProgress.updateQueue = null;


      ReactCurrentDispatcher.current = __DEV__
        ? HooksDispatcherOnRerenderInDEV
        : HooksDispatcherOnRerender;

      children = Component(props, secondArg);
    } while (didScheduleRenderPhaseUpdateDuringThisPass);
  }
```

如果为`true`的话，在函数组件执行完成后，会将`dispatcher`改为`HooksDispatcherOnRerender`并再次执行`Component`函数。并且这个重新渲染的次数不能大于最大次数`RE_RENDER_LIMIT`。

如果触发时的`fiber`与当前`fiber`不相等时，同样会建立循环链表的`update`存放到`queue.pending`当中，不同的是，此时会进行`schedule`：

```javascript
const root = scheduleUpdateOnFiber(fiber, lane, eventTime);
```

### rerender 阶段

在`mount`阶段我们提到了`didScheduleRenderPhaseUpdateDuringThisPass`字段为`true`时，会立即触发`rerender`，此时使用的是`HooksDispatcherOnRerender`，因此`useState`对应于`rerenderState`也是`rerenderReducer`函数

#### updateWorkInProgressHook

`updateWorkInProgressHook`与`mountWorkInProgressHook`对应，它是用于取存放在`fiber.memoizedState`上的`hook`。

```javascript
let nextCurrentHook: null | Hook;
if (currentHook === null) {
  const current = currentlyRenderingFiber.alternate;
  if (current !== null) {
    nextCurrentHook = current.memoizedState;
  } else {
    nextCurrentHook = null;
  }
} else {
  nextCurrentHook = currentHook.next;
}

// 这个对应的 fiber 是 workInProgress
let nextWorkInProgressHook: null | Hook;
if (workInProgressHook === null) {
  nextWorkInProgressHook = currentlyRenderingFiber.memoizedState;
} else {
  nextWorkInProgressHook = workInProgressHook.next;
}
```

`nextCurrentHook`和`currentHook`对应于老`fiber`上的`hooks`，而`nextWorkInProgressHook`和`workInProgressHook`对应于新`fiber`上的`hooks`。当新`fiber`上的`hook`存在时，直接使用即可：

```javascript
if (nextWorkInProgressHook !== null) {
  // 如果 新fiber上存在该 hook， 可以直接使用
  workInProgressHook = nextWorkInProgressHook;
  nextWorkInProgressHook = workInProgressHook.next;

  currentHook = nextCurrentHook;
}
```

否则会复用老`fiber`上的`hook`：

```javascript
currentHook = nextCurrentHook;

// 如果新的 hook 为 null 时，需要将 current hook 作为 base,
// 进行创建新的 hook
const newHook: Hook = {
  memoizedState: currentHook.memoizedState,

  baseState: currentHook.baseState,
  baseQueue: currentHook.baseQueue,
  queue: currentHook.queue,

  next: null,
};

if (workInProgressHook === null) {
  currentlyRenderingFiber.memoizedState = workInProgressHook = newHook;
} else {
  workInProgressHook = workInProgressHook.next = newHook;
}
```

#### 更新state

在拿到对应的`hook`后，就会依次执行所有的`update`，更新当前的`state`:

```javascript
// 循环执行
do {
  const action = update.action;
  newState = reducer(newState, action);
  update = update.next;
} while (update !== firstRenderPhaseUpdate);

// 更新 state
hook.memoizedState = newState;
if (hook.baseQueue === null) {
  hook.baseState = newState;
}
queue.lastRenderedState = newState;
```

### update 阶段

`update`阶段调用的是`updateReducer`，与`rerender`不同的是，该阶段循环执行`update`的时候会判断`updateLane`是否在`renderLanes`中:

```javascript
if (!isSubsetOfLanes(renderLanes, updateLane)) {}
```

这个阶段的更新于`UpdateQueue`章节中`class`组件的`processUpdate`方法内的更新类似，这里不再赘述。

## useReducer

`useReducer`的流程就与`useState`一致，不同的是传入的`reducer`是用户定义的`reducer`，并且`dispatch`的时候会携带`action`。在`useState`中，`reducer`是`state => state`，`dispatch`的时候无需`action`。

## useEffect

### mount阶段

`mount`阶段`useEffect`调用的是`mountEffect`：

```javascript
return mountEffectImpl(
  PassiveEffect | PassiveStaticEffect,
  HookPassive,
  create,
  deps,
)
function mountEffectImpl(fiberFlags, hookFlags, create, deps): void {
  const hook = mountWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  currentlyRenderingFiber.flags |= fiberFlags;
  hook.memoizedState = pushEffect(
    HookHasEffect | hookFlags,
    create,
    undefined,
    nextDeps,
  );
}
```

`mountWorkInProgressHook`在`useState`中已经讲过，其主要作用是创建一个`hook`，并将该`hook`与其他`hook`形成链表存放到`fiber.memoized`属性上。

`currentlyRenderingFiber.flags |= fiberFlags`这里表示如果使用了`useEffect`这个`hook`，那么`fiber.flags`上会增加`Passive`和`PassiveStatic`这两个标识符。

接下来是`pushEffect`方法，首先会创建一个`effect`：

```javascript
const effect: Effect = {
  // 表示 hook 的 tag
  tag,
  // 创建时的回调函数
  create,
  // 销毁时的回调函数
  destroy,
  // hook 的依赖
  deps,
  // 指向下一个 effect
  next: (null: any),
};
```

该`effect`的`tag`为`HasEffect | Passive`，随后将这个`effect`与其他的`effect`形成链表结构存放到`fiber.updateQueue`中：

```javascript
let componentUpdateQueue: null | FunctionComponentUpdateQueue = (currentlyRenderingFiber.updateQueue: any);
// 如果不存在 updateQueue，进行初始化
if (componentUpdateQueue === null) {
  // 建立循环链表
  componentUpdateQueue = createFunctionComponentUpdateQueue();
  currentlyRenderingFiber.updateQueue = (componentUpdateQueue: any);
  componentUpdateQueue.lastEffect = effect.next = effect;
} else {
  // 如果存在updateQueue，将effect添加到链表中
  const lastEffect = componentUpdateQueue.lastEffect;
  if (lastEffect === null) {
    componentUpdateQueue.lastEffect = effect.next = effect;
  } else {
    // 添加到链表的前面
    const firstEffect = lastEffect.next;
    lastEffect.next = effect;
    effect.next = firstEffect;
    componentUpdateQueue.lastEffect = effect;
  }
}
```

这里`fiber.updateQueue.lastEffect`指向的就是新添加的`effect`。

### rerender和update阶段

`rerender`和`update`阶段都是调用的`updateEffect`方法，也是调用的`updateEffectImpl`方法。首先会获取相应的`hook`:

```javascript
const hook = updateWorkInProgressHook()
```

随后会判断依赖`deps`有没有发生变化。如果没有发生变化，那么`pushEffect`的时候，`effect.tags`不包含`HasEffect`。反之，则会包含。

```javascript
hook.memoizedState = pushEffect(hookFlags, create, destroy, nextDeps);
```

## useLayoutEffect

### mount 阶段

`useLayoutEffect`的`mount`阶段与`useEffect`几乎一致，主要的区别有两点：
- `fiber`的`flags`为`Update | LayoutStatic`。
- `effect`的`tag`为`HasEffect | Layout`。

### rerender和update阶段

与`useEffect`一致，主要的区别在于：
- `fiber`的`flags`为`UpdateEffect`。
- `effect`的`tag`为`HasEffect | Layout`。

## useMemo

### mount 阶段

```javascript
function mountMemo<T>(
  nextCreate: () => T,
  deps: Array<mixed> | void | null,
): T {
  const hook = mountWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const nextValue = nextCreate();
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}
```

首先获取`hook`，然后执行`nextCreate`并将结果返回。

### rerender和update阶段

`updateMemo`方法主要用于判断前后的`deps`是否一致。如果一致，则跳过函数执行，将先前的值返回，从而达到缓存的目的。

```javascript
if (areHookInputsEqual(nextDeps, prevDeps)) {
  return prevState[0];
}
```

## useCallback

### mount 阶段

```javascript
function mountCallback<T>(callback: T, deps: Array<mixed> | void | null): T {
  const hook = mountWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  hook.memoizedState = [callback, nextDeps];
  return callback;
}
```

`memoizedState`存储的是`callback`和`deps`。

### rerender和update阶段

对比`deps`看是否发生变化，如果没变，则将原`callback`返回。

```javascript
if (areHookInputsEqual(nextDeps, prevDeps)) {
  return prevState[0];
}
```

## useContext

### mount、rerender和update阶段

`useContext`三个阶段都是执行的`readContext`方法，首先会获取到`context`的`value`值，也就是用户定义的`context`的值。

```javascript
const value = isPrimaryRenderer
  ? context._currentValue
  : context._currentValue2;
```

随后判断`lastFullyObservedContext === context`，如果为`true`，说明该`context`已经被处理了，无需重复处理，跳过即可。

```javascript
if (lastFullyObservedContext === context) {
  // Nothing to do. We already observe everything in this context.
}
```

否则的话，会创建一个`contextItem`，形成链表并存放到`fiber.dependences.firstContext`上：

```javascript
const contextItem = {
  context: ((context: any): ReactContext<mixed>),
  memoizedValue: value,
  next: null,
};

if (lastContextDependency === null) {
  lastContextDependency = contextItem;
  currentlyRenderingFiber.dependencies = {
    lanes: NoLanes,
    firstContext: contextItem,
  };
} else {
  lastContextDependency = lastContextDependency.next = contextItem;
}
```

这里的处理与`class`组件的`context`处理类似。

## useRef

### mount 阶段

```javascript
function mountRef<T>(initialValue: T): {| current: T |} {
  const hook = mountWorkInProgressHook();
  const ref = { current: initialValue };
  hook.memoizedState = ref;
  return ref;
}
```

`mountRef`方法创建了一个`{ current: xxx }`对象并将其返回。

### rerender和update阶段

```javascript
function updateRef<T>(initialValue: T): {| current: T |} {
  const hook = updateWorkInProgressHook();
  return hook.memoizedState;
}
```

`updateRef`也非常的简单，将`hook.memoizedState`中存储的`{ current: xxx }`对象返回。

## useTransition

### mount 阶段

`useTransition`的实现是基于`useState`的：

```javascript
function mountTransition(): [boolean, (() => void) => void] {
  const [isPending, setPending] = mountState(false);
  const start = startTransition.bind(null, setPending);
  const hook = mountWorkInProgressHook();
  hook.memoizedState = start;
  return [isPending, start];
}
```

首先会通过`useState`定义`isPending和setPending`方法，然后定义一个`start`方法并将其返回：

```javascript
function startTransition(setPending, callback) {
  const previousPriority = getCurrentUpdatePriority();
  setCurrentUpdatePriority(
    higherEventPriority(previousPriority, ContinuousEventPriority),
  );

  // 添加一个 update，优先级为当前 update 优先级
  setPending(true);
  // 此时进行 schedule 的时候，requestUpdateLane 为原始的 lane
  // 比如在 click 的时候就会是同步 lane
  const prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = 1;
  try {
    // 添加一个 update，requestUpdateLane的结果为 transition lane
    setPending(false);
		// 执行 startTransition 的回调
    callback();
  } finally {
    setCurrentUpdatePriority(previousPriority);
    ReactCurrentBatchConfig.transition = prevTransition;
  }
}
```

首先会设置更新优先级，这样在`setPending`的时候，会进行`requestUpdateLane`，可以拿到对应的`lane`。随后将`ReactCurrentBatchConfig.transition`置为`1`，在`requestUpdateLane`会返回`transition lane`。因此内部`setPending(false)`第一个`transition lane`的更新。同样`callback`内部定义的更新也将会是一个`transition lane`的更新。这样在`transition`更新的时候，`setPending(false)`会执行。

### rerender和update阶段

```javascript
function updateTransition(): [boolean, (() => void) => void] {
  const [isPending] = updateState(false);
  const hook = updateWorkInProgressHook();
  const start = hook.memoizedState;
  return [isPending, start];
}
```

`update`阶段比较简单，拿到`isPending`和`start`方法返回即可。

## useDeferredValue

### mount、rerender和update阶段

`useDeferredValue`的实现是基于`useState`和`useEffect`的：

```javascript
function mountDeferredValue<T>(value: T): T {
  const [prevValue, setValue] = mountState(value);
  mountEffect(() => {
    const prevTransition = ReactCurrentBatchConfig.transition;
    ReactCurrentBatchConfig.transition = 1;
    try {
      setValue(value);
    } finally {
      ReactCurrentBatchConfig.transition = prevTransition;
    }
  }, [value]);
  return prevValue;
}
```

在`useEffect`内部设置`value`时，会将`ReactCurrentBatchConfig.transition`置为`1`，因此更新对应的`lane`是`transition lane`。