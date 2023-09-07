# commitWork 阶段

`beginWork`和`completeWork`阶段都正常结束后，此时所有的`fiber`和真实节点创建完成，进入到`commit`阶段：

```javascript
const finishedWork: Fiber = (root.current.alternate: any);
root.finishedWork = finishedWork;
root.finishedLanes = lanes;
finishConcurrentRender(root, exitStatus, lanes);
```

当结果为`RootCompleted`时，`finishConcurrentRender`函数会调用`commitRoot(root)`方法：

```javascript
function commitRoot(root) {
  const previousUpdateLanePriority = getCurrentUpdatePriority();
  const prevTransition = ReactCurrentBatchConfig.transition;
  try {
    ReactCurrentBatchConfig.transition = 0;
    // 优先级为同步，不可被打断
    setCurrentUpdatePriority(DiscreteEventPriority);
    commitRootImpl(root, previousUpdateLanePriority);
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;
    setCurrentUpdatePriority(previousUpdateLanePriority);
  }

  return null;
}
```

`commit`执行时，会将当前优先级置为`DiscreteEventPriority`，也就是同步优先级，为同步执行，不可被打断。

## flushPassiveEffects

`commit`第一步会执行`flushPassiveEffects`方法：

```javascript
do {
  flushPassiveEffects();
} while (rootWithPendingPassiveEffects !== null);
```

那么什么时候`rootWithPendingPassiveEffects !== null`成立呢？在`commitRootImpl`方法后半段会进行赋值：

```javascript
if (rootDoesHavePassiveEffects) {
  rootDoesHavePassiveEffects = false;
  rootWithPendingPassiveEffects = root;
  pendingPassiveEffectsLanes = lanes;
}
```

如果`rootDoesHavePassiveEffects`成立，那么会将`root`赋值给`rootWithPendingPassiveEffects`。那么下一轮`commit`时，`rootWithPendingPassiveEffects !== null` 就会成立了。还是在这个函数中，再看看`rootDoesHavePassiveEffects`变量：

```javascript
if (
  (finishedWork.subtreeFlags & PassiveMask) !== NoFlags ||
  (finishedWork.flags & PassiveMask) !== NoFlags
) {
  if (!rootDoesHavePassiveEffects) {
    rootDoesHavePassiveEffects = true;
    scheduleCallback(NormalSchedulerPriority, () => {
      flushPassiveEffects();
      return null;
    });
  }
}
```

如果`flags/subtreeFlags`中存在`PassiveMask`，即`Passive|ChildDeletion`，那么`rootDoesHavePassiveEffects`为`true`。也就是说如果使用了`useEffect`或者是节点有删除的情况，那么就会执行`flushPassiveEffects`方法：

```javascript
export function flushPassiveEffects(): boolean {
  // 如果 rootWithPendingPassiveEffects 存在，说明使用了 useEffect 或者有子节点被删除
  if (rootWithPendingPassiveEffects !== null) {
    const renderPriority = lanesToEventPriority(pendingPassiveEffectsLanes);
    const priority = lowerEventPriority(DefaultEventPriority, renderPriority);
    const prevTransition = ReactCurrentBatchConfig.transition;
    const previousPriority = getCurrentUpdatePriority();
    try {
      // transition 置为 0
      ReactCurrentBatchConfig.transition = 0;
      // 设置 update 优先级，获取 lane 的时候会用得到
      setCurrentUpdatePriority(priority);
      return flushPassiveEffectsImpl();
    } finally {
      setCurrentUpdatePriority(previousPriority);
      ReactCurrentBatchConfig.transition = prevTransition;
    }
  }
  return false;
}
```

设置更新的优先级后，会执行两个方法：一个是卸载方法，一个是挂载方法。

```javascript
// 从下到 sibling 到 return 这种深度遍历的方式，一次执行 effect 的 destroy 方法
commitPassiveUnmountEffects(root.current);
// 遍历 root.current 的 updateQueue，执行上面的 effect 的 create 方法
commitPassiveMountEffects(root, root.current);
```

## commitPassiveUnmountEffects

### commitPassiveUnmountEffects_begin

`commitPassiveUnmountEffects`实际调用的是`commitPassiveUnmountEffects_begin`方法，该方法首先会向下遍历，对于有`ChildDeletion`标记的都会遍历`fiber.deletions`（记录了需要删除的老`fiber`）执行真实节点的删除：

```javascript
if ((nextEffect.flags & ChildDeletion) !== NoFlags) {
  const deletions = fiber.deletions;
  if (deletions !== null) {
    for (let i = 0;i < deletions.length;i++) {
      const fiberToDelete = deletions[i];
      nextEffect = fiberToDelete;
      // 进行具体 delete
      commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
        fiberToDelete,
        fiber,
      );
    }
  }
}
```

### commitPassiveUnmountEffectsInsideOfDeletedTree_begin

`commitPassiveUnmountEffectsInsideOfDeletedTree_begin`方法同样会向下遍历，对于遍历到的`function`组件，执行卸载方法：

```javascript
commitPassiveUnmountInsideDeletedTreeOnFiber(fiber, nearestMountedAncestor);

function commitPassiveUnmountInsideDeletedTreeOnFiber(
  current: Fiber,
  nearestMountedAncestor: Fiber | null,
): void {
  switch (current.tag) {
    case FunctionComponent:
    case ForwardRef:
    case SimpleMemoComponent: {
   // 执行卸载方法
      commitHookEffectListUnmount(
        HookPassive,
        current,
        nearestMountedAncestor,
      );
      break;
    }
  }
}
```

### commitHookEffectListUnmount

`commitHookEffectListUnmount`方法会循环执行`fiber`上的`effects`(如果使用了`useEffect/useLayoutEffect`等，会创建`effect`，并形成链表挂载到`fiber.updateQueue.effects.lastEffect`上)：

```javascript
const firstEffect = lastEffect.next;
// 找到第一个 effect
let effect = firstEffect;
do {
  // 如果 tag 包含 flags
  if ((effect.tag & flags) === flags) {
    const destroy = effect.destroy;
    effect.destroy = undefined;
    if (destroy !== undefined) {
      safelyCallDestroy(finishedWork, nearestMountedAncestor, destroy);
    }
  }
  effect = effect.next;
} while (effect !== firstEffect);
```

由于这里的`tag`为`HookPassive`，因此只有`useEffect`里的`destroy`方法才会被执行，而`useLayoutEffect`里的`destroy`不会被执行。

### commitPassiveUnmountEffectsInsideOfDeletedTree_complete

在执行了`destroy`方法后，会删除`fiber`引用并且删除对应真实节点的引用：

```javascript
function detachFiberAfterEffects(fiber: Fiber) {
  fiber.child = null;
  fiber.deletions = null;
  fiber.sibling = null;
  
  // ...

  if (fiber.tag === HostComponent) {
    const hostInstance: Instance = fiber.stateNode;
    if (hostInstance !== null) {
      detachDeletedInstance(hostInstance);
    }
  }
  fiber.stateNode = null;

 // ...
}
```

如果是普通便签，且`fiber.stateNode`存在，那么需要调用`detachDeletedInstance`方法删除`node`节点上的一些引用：

```javascript
export function detachDeletedInstance(node: Instance): void {
  delete (node: any)[internalInstanceKey];
  delete (node: any)[internalPropsKey];
  delete (node: any)[internalEventHandlersKey];
  delete (node: any)[internalEventHandlerListenersKey];
  delete (node: any)[internalEventHandlesSetKey];
}
```

回到`commitPassiveUnmountEffects_begin`方法，在执行了老`fiber`子节点的删除后，还需要将老`fiber`与子节点，未删除子节点与已删除子节点之间的引用删除：

```javascript
const previousFiber = fiber.alternate;
if (previousFiber !== null) {
  let detachedChild = previousFiber.child;
  if (detachedChild !== null) {
    previousFiber.child = null;
    do {
      const detachedSibling = detachedChild.sibling;
      // 挨个将 sibling 指向置空
      detachedChild.sibling = null;
      detachedChild = detachedSibling;
    } while (detachedChild !== null);
  }
}
```

### commitPassiveUnmountEffects_complete

向下查找直到找到不是`PassiveMask`的节点，此时执行`commitPassiveUnmountEffects_complete`方法：

```javascript
if ((fiber.flags & Passive) !== NoFlags) {
  // 循环执行 unmount 下的 destroy 方法
  commitPassiveUnmountOnFiber(fiber);
}
```

该方法会向上查找，是否有`flags`包含`Passive`的`fiber`。如果有，同样会调用`commitPassiveUnmountOnFiber`执行`effect`的`destroy`方法。这样整棵树中有`ChildDeletion`和`Passive`标记的`fiber`中的卸载方法就全都执行了。

## commitPassiveMountEffects

### commitPassiveMountEffects_begin

`commitPassiveMountEffects_begin`方法作用是向下查找，找到一个非`PassiveMask`标记的节点：

```javascript
if ((fiber.subtreeFlags & PassiveMask) !== NoFlags && firstChild !== null) {
  ensureCorrectReturnPointer(firstChild, fiber);
  nextEffect = firstChild;
}
```

### commitPassiveMountEffects_complete

`commitPassiveMountEffects_complete`方法会从下往上查找有`Passive`标记的节点，并执行其`commitPassiveMountOnFiber`方法：

```javascript
if ((fiber.flags & Passive) !== NoFlags) {
  commitPassiveMountOnFiber(root, fiber);
}
```

### commitPassiveMountOnFiber

对于函数式组件都会执行`commitHookEffectListMount`方法，此时`hook`的`tag`为`HookPassive | HookHasEffect`：

```javascript
function commitPassiveMountOnFiber(
  finishedRoot: FiberRoot,
   finishedWork: Fiber,
): void {
  switch (finishedWork.tag) {
    case FunctionComponent:
    case ForwardRef:
    case SimpleMemoComponent: {
      commitHookEffectListMount(HookPassive | HookHasEffect, finishedWork);
      break;
    }
  }
}
```

### commitHookEffectListMount

`commitHookEffectListMount`则是循环调用`effects`里的`create`方法并生成`destroy`：

```javascript
const firstEffect = lastEffect.next;
// 找到第一个 effect
let effect = firstEffect;
do {
  if ((effect.tag & tag) === tag) {
    // 调用 create 方法
    const create = effect.create;
    effect.destroy = create();
    effect = effect.next;
  }
} while (effect !== firstEffect);
```

## 变量重置

一些列全局的变量重置：

```javascript
const finishedWork = root.finishedWork;
const lanes = root.finishedLanes;

root.finishedWork = null;
root.finishedLanes = NoLanes;

// 任务重置
root.callbackNode = null;
root.callbackPriority = NoLane;

// 移除 lane
let remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes);
markRootFinished(root, remainingLanes);

if (root === workInProgressRoot) {
 // 重置
  workInProgressRoot = null;
  workInProgress = null;
  workInProgressRootRenderLanes = NoLanes;
}
```

重置完成后判断是否具有`PassiveMask`（最开始的`flushPassiveEffects`与这里的判断有关）。如果之前`rootDoesHavePassiveEffects`为`false`，表示`effect`还未被记录，此时需要调用一次`flushPassiveEffects`方法。

```javascript
if (
  (finishedWork.subtreeFlags & PassiveMask) !== NoFlags ||
  (finishedWork.flags & PassiveMask) !== NoFlags
) {
  if (!rootDoesHavePassiveEffects) {
    rootDoesHavePassiveEffects = true;
    scheduleCallback(NormalSchedulerPriority, () => {
      flushPassiveEffects();
      return null;
    });
  }
}
```

执行`flushPassiveEffects`时，会先遍历执行`destroy`，由于第一次创建没有`destroy`，所以不会执行。然后会遍历执行`create`，并且生成`destroy`。

## beforeMutation 阶段

### commitBeforeMutationEffects

```javascript
const subtreeHasEffects =
  (finishedWork.subtreeFlags &
    (BeforeMutationMask | MutationMask | LayoutMask | PassiveMask)) !==
  NoFlags;
const rootHasEffect =
  (finishedWork.flags &
    (BeforeMutationMask | MutationMask | LayoutMask | PassiveMask)) !==
  NoFlags;
```

如果`subtreeHasEffects`或`rootHasEffect`存在，说明有更新。首先会进入`beforeMutation`阶段，调用`commitBeforeMutationEffects`方法：

```javascript
export function commitBeforeMutationEffects(
  root: FiberRoot,
  firstChild: Fiber,
) {
  // ...
  commitBeforeMutationEffects_begin();
  // ...
}
```

其核心是调用`commitBeforeMutationEffects_begin`方法。

### commitBeforeMutationEffects_begin

与`flushPassiveEffects`中类似，这里以`_begin`结尾的函数都是向下遍历，直到找到一个不符合`BeforeMutationMask`的节点。

```javascript
export const BeforeMutationMask = Update | Snapshot
```

一种是标记了`Update`的节点，一种是标记`SnapShot`的节点，如在`class`组件中定义了`getSnapshotBeforeUpdate`函数，那么在`beginWork`阶段就会将`fiber`标记为`SnapShot`。

### commitBeforeMutationEffects_complete

以`_complete`结尾的函数都是从下往上遍历，然后执行某个函数。这里执行的函数为`commitBeforeMutationEffectsOnFiber`。

### commitBeforeMutationEffectsOnFiber

```javascript
if ((flags & Snapshot) !== NoFlags) {
  switch (finishedWork.tag) {
    case ClassComponent: {
      if (current !== null) {
        const prevProps = current.memoizedProps;
        const prevState = current.memoizedState;
        const instance = finishedWork.stateNode;
        const snapshot = instance.getSnapshotBeforeUpdate(
          finishedWork.elementType === finishedWork.type
          ? prevProps
          : resolveDefaultProps(finishedWork.type, prevProps),
          prevState,
        );
        instance.__reactInternalSnapshotBeforeUpdate = snapshot;
      }
      break;
    }
    case HostRoot: {
      if (supportsMutation) {
        const root = finishedWork.stateNode;
        clearContainer(root.containerInfo);
      }
      break;
    }
  }
}
```

如果`SnapShot`标记主要有两种情况：一种是`HostRoot`，在`completeWork`阶段会将其标记：

```javascript
if (current === null || current.child === null) {
  workInProgress.flags |= Snapshot;
}
```

如果`current或current.child`不存在，在`commit`阶段会将`root.containerInfo`真实节点的内容置空。

另一种情况是`class`组件定义了`getSnapshotBeforeUpdate`，此时会直接调用该函数，传入的值为先前的`props`和`state`。

## mutation 阶段

### commitMutationEffects

`commitMutationEffects`执行的是`commitMutationEffects_begin`方法：

```javascript
const deletions = fiber.deletions;
if (deletions !== null) {
  for (let i = 0;i < deletions.length;i++) {
    const childToDelete = deletions[i];
    commitDeletion(root, childToDelete, fiber);
  }
}
```

首先是循环遍历，向下执`commitDeletion`方法，等同于执行了`unmountHostComponents`方法。

### unmountHostComponents

`unmountHostComponents`方法作用是删除`fiber`对应的真实节点。首先是找到这个`fiber`的父真实节点：

```javascript
if (!currentParentIsValid) {
  let parent = node.return;
  findParent: while (true) {
    const parentStateNode = parent.stateNode;
    switch (parent.tag) {
      case HostComponent:
        currentParent = parentStateNode;
        currentParentIsContainer = false;
        break findParent;
      case HostRoot:
        currentParent = parentStateNode.containerInfo;
        currentParentIsContainer = true;
        break findParent;
      case HostPortal:
        currentParent = parentStateNode.containerInfo;
        currentParentIsContainer = true;
        break findParent;
    }
    parent = parent.return;
  }
  currentParentIsValid = true;
}
```

只有`HostComponent、HostRoot、HostPortal`才会渲染成真实节点，其他的标签都是`React`内部定义，不会渲染出来。

然后判断当前节点的类型，如果是`HostComponent`或`HostText`类型：

```javascript
if (node.tag === HostComponent || node.tag === HostText) {
  // 1. 递归触发卸载事件。(useLayoutEffect/componentWillUnmount)
  commitNestedUnmounts(finishedRoot, node, nearestMountedAncestor);
  // 2. 触发完事件，就需要移除真实节点
  if (currentParentIsContainer) {
    removeChildFromContainer(
      ((currentParent: any): Container),
      (node.stateNode: Instance | TextInstance),
    );
  } else {
    // 移除真实节点
    removeChild(
      ((currentParent: any): Instance),
      (node.stateNode: Instance | TextInstance),
    );
  }
}
```

首先是调用`commitNestedUnmounts`方法，这个方法会遍历该节点下的所有`fiber`，然后调用`commitUnmount`方法。（**注意：向下遍历遇到HostPortal时不会调用commitUnmount**）。

### commitUnmount

对于函数式组件，会循环执行带有`Layout`的`tag`的`effect`。

```javascript
do {
  const { destroy, tag } = effect;
  if (destroy !== undefined) {
    // 执行 layout 的 destroy，也就是 useLayoutEffect
    if ((tag & HookLayout) !== NoHookEffect) {
      safelyCallDestroy(current, nearestMountedAncestor, destroy);
    }
  }
  effect = effect.next;
} while (effect !== firstEffect);
```

对于`class`组件，一是移除`ref`，二是调用`componentWillUnmount`方法：

```javascript
safelyDetachRef(current, nearestMountedAncestor);
const instance = current.stateNode;
if (typeof instance.componentWillUnmount === 'function') {
  safelyCallComponentWillUnmount(
    current,
    nearestMountedAncestor,
    instance,
  );
}
```

对于`HostPortal`，则是调用`unmountHostComponents`处理它的子节点。

### commitMutationEffects_complete

等删除节点操作完成后，回到`commitMutationEffects_begin`方法，会开始执行`commitMutationEffects_complete`方法。该方法会向上查找，并且调用`commitMutationEffectsOnFiber`方法。

### commitMutationEffectsOnFiber

对于不同的`flags`，`mutation`阶段会做不同的处理：

#### ContentReset

表示需要按文本内容处理，并将内容置空：

```javascript
commitResetTextContent(finishedWork);
```

#### Visibility

`suspense`相关处理，`suspense`章节再做讲解。

#### Placement

表示插入节点。第一步需要找到该节点的父`fiber`节，注意，这里的父`fiber`必须是能够渲染成真实`DOM`的`fiber`。

```javascript
const parentFiber = getHostParentFiber(finishedWork);

function getHostParentFiber(fiber: Fiber): Fiber {
  let parent = fiber.return;
  while (parent !== null) {
    if (isHostParent(parent)) {
      return parent;
    }
    parent = parent.return;
  }
}

function isHostParent(fiber: Fiber): boolean {
  return (
    fiber.tag === HostComponent ||
    fiber.tag === HostRoot ||
    fiber.tag === HostPortal
  );
}
```

第二步通过父`fiber`获取真实节点：

```javascript
const parentStateNode = parentFiber.stateNode;
// 找到真实父节点
switch (parentFiber.tag) {
  case HostComponent:
    parent = parentStateNode;
    isContainer = false;
    break;
  case HostRoot:
    // 注意这里是添加到根节点上去了。
    parent = parentStateNode.containerInfo;
    isContainer = true;
    break;
  case HostPortal:
    // 注意这里是添加到根节点上去了。
    parent = parentStateNode.containerInfo;
    isContainer = true;
    break;
}
```

第三步获取兄弟结点：

```javascript
const before = getHostSibling(finishedWork);

function getHostSibling(fiber: Fiber): ?Instance {
  siblings: while (true) {
    // 如果 sibling 不存在
    while (node.sibling === null) {
      // 如果 return 不存在 获取 父亲是可以渲染成真实节点的 fiber
      // 那么说明 sibling 确实是不存在的
      if (node.return === null || isHostParent(node.return)) {
        return null;
      }
      node = node.return;
    }
    // sibling 存在时
    node.sibling.return = node.return;
    node = node.sibling;
    // 向下查找，查找合适的主节点
    while (
      node.tag !== HostComponent &&
      node.tag !== HostText &&
      node.tag !== DehydratedFragment
    ) {
      // 如果是标记为Placement的，那么是不可用的。
      if (node.flags & Placement) {
        continue siblings;
      }
      if (node.child === null || node.tag === HostPortal) {
        continue siblings;
      } else {
        // 查找孩子节点（因为react中fiber与实际的真实并不是完全对应的，如有的会形成一层包装）
        node.child.return = node;
        node = node.child;
      }
    }

    // 如果找到的节点是不需要插入的节点，则返回该节点。
    if (!(node.flags & Placement)) {
      // Found it!
      return node.stateNode;
    }
  }
}
```

**需要注意的是，能渲染的真实节点的结构跟fiber结构并不会完全对应，可能会存在一些层次的包装，所以需要进行比较复杂的查找。**

第四步则是正式的插入节点了：

```javascript
if (isContainer) {
  insertOrAppendPlacementNodeIntoContainer(finishedWork, before, parent);
} else {
  insertOrAppendPlacementNode(finishedWork, before, parent);
}
```

#### Update

当标记为`Update`时，执行`commitWork`。

**当为函数组件时**

```javascript
commitHookEffectListUnmount(
  HookLayout | HookHasEffect,
  finishedWork,
  finishedWork.return,
);
```

触发`useLayoutEffect`的`destroy`方法。

**当为普通真实节点时**

```javascript
const updatePayload: null | UpdatePayload = (finishedWork.updateQueue: any);
// 如果有属性被更新了
finishedWork.updateQueue = null;
// 更新真实节点的属性
commitUpdate(
  instance,
  updatePayload,
  type,
  oldProps,
  newProps,
  finishedWork,
);
```

如果属性有更新，那么会调用`commitUpdate`（`DOM`属性处理的方法）更新真实`DOM`上的属性，如`style，href`等等。

## layout 阶段

### commitLayoutEffects

`commitLayoutEffects`调用`commitLayoutEffects_begin`方法，还是一样，找到第一个不是`LayoutMask`的子节点，然后向上执行`commitLayoutEffectOnFiber`方法。

### commitLayoutEffectOnFiber

#### 函数组件

为函数组件时，执行`commitHookEffectListMount`方法，也就是`useLayoutEffect`的`create`方法。

```javascript
commitHookEffectListMount(HookLayout | HookHasEffect, finishedWork);
```

#### class 组件

如果`flags`存在`Update`，说明定义了生命周期函数。当`current`为`null`的时候，说明是挂载阶段，调用`componentDidMount`方法：

```javascript
instance.componentDidMount();
```

否则说明是更新阶段，调用`componentDidUpdate`方法：

```javascript
instance.componentDidUpdate(
  prevProps,
  prevState,
  instance.__reactInternalSnapshotBeforeUpdate,
);
```

最后，`state`更新完成之后，执行`update`上的回调函数：

```javascript
if (updateQueue !== null) {
  commitUpdateQueue(finishedWork, updateQueue, instance);
}

export function commitUpdateQueue<State>(
  finishedWork: Fiber,
  finishedQueue: UpdateQueue<State>,
  instance: any,
): void {
  const effects = finishedQueue.effects;
  finishedQueue.effects = null;
  if (effects !== null) {
    // 依次执行已经update了的回调函数
    for (let i = 0;i < effects.length;i++) {
      const effect = effects[i];
      const callback = effect.callback;
      if (callback !== null) {
        effect.callback = null;
        callCallback(callback, instance);
      }
    }
  }
}
```

## 最后

在更新完成之后，更改`root.current`指向，相当于交换了`current`和`workInProgress`：

```javascript
root.current = finishedWork;
```

然后再次进行调度：

```javascript
ensureRootIsScheduled(root, now());
```

如果还有未完成的更新，即优先级不够的更新，那么这里会被继续调度进行更新。

如果当前更新中包含`useEffect`，并且`lanes`中含有同步`lane`，那么需要立即执行`flushPassiveEffect`：

```javascript
if (
  includesSomeLane(pendingPassiveEffectsLanes, SyncLane) &&
  root.tag !== LegacyRoot
) {
  flushPassiveEffects();
}
```

相比于`schedule`执行`flushPassiveEffects`，这里执行更靠前。

最后还会执行`flushSyncCallbacks`：

```javascript
flushSyncCallbacks();
```

该函数用于将立即执行`layout`里新添加的任务。
