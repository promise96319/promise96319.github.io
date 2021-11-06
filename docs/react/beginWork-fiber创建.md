# beginWork - fiber的创建

## 开始

更新过程中，调度任务最终执行的小任务是`performUnitOfWork`：

```javascript
function performUnitOfWork(unitOfWork: Fiber): void {
  const current = unitOfWork.alternate;

  let next;
  // 为 children 创建 fiber
  // 调用 reconcileChildren，建立了当前 unitOfWork 及其 children 的fiber联系
  // 并且将 fiber 的 flags 进行了标记，用于替换、移除等操作
  next = beginWork(current, unitOfWork, subtreeRenderLanes);

  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  if (next === null) {
    // 如果没有 next child，那么开始 complete.
    // 创建真实节点
    completeUnitOfWork(unitOfWork);
  } else {
    // 如果存在 next,说明还有 child,继续向下递归 beginWork
    workInProgress = next;
  }
}
```

总共分为两步，一是`beginWork`，二是`completeWork`。`beginWork`主要是向下”递“的过程，根据节点创建或复用`fiber`。`completeWork`是向上”归“的过程，由下至上根据`fiber`创建或复用真实节点。

## beginWork

`beginWork`主要分为两部分组成，一部分为`reconcilerChildren`，主要的作用是为当前的`fiber`节点的子节点创建`fiber`，并且建立`fiber`之间的联系。第二部分是为不同类型的`fiber`节点更新不同的属性。`beginWork`的定义是在`react-reconciler/src/ReactFiberBeginWork.new.js`文件中。

## updateHostRoot

`HostRoot`的`fiber`在最开始就已经创建了，也就是之前提到的`RootFiber`。这里先从`updateHostRoot`方法开始：

```javascript
const nextProps = workInProgress.pendingProps;
const prevState = workInProgress.memoizedState;
const prevChildren = prevState.element;
cloneUpdateQueue(current, workInProgress);
processUpdateQueue(workInProgress, nextProps, null, renderLanes);
const nextState = workInProgress.memoizedState;
if (nextChildren === prevChildren) {
  // children 没有变化，提前终止当前child对比，
  // 如果有孙子节点变化，那么直接找到对应孙子节点进行处理
  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
}
```

首先执行`processUpdateQueue`方法，在`UpdateQueue`章节中已经提到，该方法主要是执行`updateQueue`返回一个新的`state`。如果前后的`state`一致，那么可以跳过后续的`reconcile`阶段。如果不一致，就需要执行`reconcileChildren`方法为子节点分别创建`fiber`了。

```javascript
reconcileChildren(current, workInProgress, nextChildren, renderLanes);
```

## reconcileChildren

`reconcileChildren`分为两种情况：

```javascript
export function reconcileChildren(
  current: Fiber | null, // 老的 fiber
  workInProgress: Fiber, // 当前工作的 fiber，新fiber
  nextChildren: any, // 新 fiber pendingProps 上的 children
  renderLanes: Lanes,
) {
  if (current === null) {
    workInProgress.child = mountChildFibers(
      workInProgress,
      null,
      nextChildren,
      renderLanes,
    );
  } else {
    workInProgress.child = reconcileChildFibers(
      workInProgress,
      current.child,
      nextChildren,
      renderLanes,
    );
  }
}
```

一种是`current`存在，一种是`current`不存在，他们唯一的区别就是第二个参数不一致。找到`ReactChildFiber.new.js`文件：

```javascript
export const reconcileChildFibers = ChildReconciler(true);
export const mountChildFibers = ChildReconciler(false);
```

它们的区别就是第一个参数不同，实际上与`current`存不存在是具有一定关系的。这个参数尤为关键，它会影响到后续的`fiber.flags`的值。

## reconcileChildFibers

我们先来看一下`reconcileChildFibers`方法，当`newChild`为`string/number`时比较简单，就是一个`text`节点。我们主要讨论为`object`的情况，其中`newChild.$$typeof`主要分为三种情况：

### REACT_PORTAL_TYPE

此节点是由`React.createPortal`方法创建:

```javascript
export function createPortal(
  children: ReactNodeList,
  containerInfo: any,
  implementation: any,
  key: ?string = null,
): ReactPortal {
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : '' + key,
    children,
    containerInfo,
    implementation,
  };
}
```

此时`jsx`解析出来的`type`就是返回的`type`。而这个`type`里的`$$typeof`是`REACT_PORTAL_TYPE`。

### REACT_LAZY_TYPE

此时调用的`React.lazy`方法创建的节点:

```javascript
export function lazy<T>(
  ctor: () => Thenable<{default: T, ...}>,
): LazyComponent<T, Payload<T>> {
  const payload: Payload<T> = {
    _status: -1,
    _result: ctor,
  };

  const lazyType: LazyComponent<T, Payload<T>> = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer,
  };
  return lazyType;
}
```

### REACT_ELEMENT_TYPE

当`$$typeof`为`REACT_ELEMENT_TYPE`的时候，会调用`reconcileSingleElement`方法。

```javascript
return placeSingleChild(
  reconcileSingleElement(
    returnFiber,
    currentFirstChild,
    newChild,
    lanes,
	),
);
       
```

在`reconcileSingleElement`方法里会校验`key`和`type`是否一致，如果一致则使用`useFiber`方法进行复用`fiber`。`useFiber`方法会调用`createWorkInProgress`方法：

```javascript
let workInProgress = current.alternate;
if (workInProgress === null) {
  // ...
  // 真实节点也被复用了
  workInProgress.stateNode = current.stateNode;

  // 每次创建的时候会建立相应的关系
  workInProgress.alternate = current;
  current.alternate = workInProgress;
}
```

如果`current.alternate`不存在，那么会以`current`为基准，创建新的`fiber`，**并且新的fiber和current之间通过alternate属性建立联系。除此之外，新的fiber还会复用current的stateNode，实际上是复用了fiber对应的真实节点。**

如果`key`或者`type`不一致时，会调用`createFiberFromElement`方法根据`jsx`解析出来的`ReactElement`创建新的`fiber`，该方法又会调用`createFiberFromTypeAndProps`方法来创建`fiber`，在`ReactFiber.new.js`文件中找到`createFiberFromTypeAndProps`方法：

```javascript
if (typeof type === 'function') {
  if (shouldConstruct(type)) {
    fiberTag = ClassComponent;
  }
}
```

### type === function

如果`type`为`function`，可能是`class`组件也可能是函数组件。

```javascript
function shouldConstruct(Component: Function) {
  const prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}
```
如果`shouldConstruct(type)`为`true`，说明`isReactComponent`存在。但是`isReactComponent`在哪里定义的呢？我们在写类组件的时候通常会写`extends Component`，在`ReactBaseClass.new.js`文件中找到`Component`的定义：

```javascript
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
```

可以看出`class`组件的`isReactComponent`是存在的，也就是当`shouldConstruct(type)`存在时，表示他为`class`组件。

### type === string

当`type`为`string`的时候，说明是普通标签，统一标记为`HostComponent`

```javascript
else if (typeof type === 'string') {
	fiberTag = HostComponent;
} 
```

### 其他 type

其他的都是`React`定义的一些`type`，比如`REACT_FRAGMENT_TYPE`、`REACT_SUSPENSE_TYPE`等。需要注意的是`type`为`object`的时候，`REACT_PROVIDER_TYPE`、`REACT_CONTEXT_TYPE`等`fiber`是在这个位置创建的。

```javascript
if (typeof type === 'object' && type !== null) {
	switch (type.$$typeof) {
		case REACT_PROVIDER_TYPE:
			fiberTag = ContextProvider;
			break getTag;
		case REACT_CONTEXT_TYPE:
			fiberTag = ContextConsumer;
      break getTag;
    case REACT_FORWARD_REF_TYPE:
      fiberTag = ForwardRef;
			break getTag;
		case REACT_MEMO_TYPE:
			fiberTag = MemoComponent;
			break getTag;
		case REACT_LAZY_TYPE:
			fiberTag = LazyComponent;
			resolvedType = null;
			break getTag;
	}
}
```

### 创建 fiber

标记完`fiberTag`，最后开始创建`fiber`：

```javascript
const fiber = createFiber(fiberTag, pendingProps, key, mode);
fiber.elementType = type;
fiber.type = resolvedType;
```

这里的`fiberTag`是`React`中对应的一套标签`Tag`。`elementType`是`jsx`解析出来的`type`，而`fiber.type`则是处理过后的`type`，因此`elementType`和`type`会存在不一致的情况。

## diff 算法

回到`reconcileChildFibers`方法，除了对象形式的`newChild`外，还可能存在数组形式的`newChild`，会进入`isArray`分支：

```javascript
if (isArray(newChild)) {
	// diff 算法
	return reconcileChildrenArray(
		returnFiber,
		currentFirstChild,
		newChild,
		lanes,
	);
}
```

这个分支的主要作用就是对比`newChild`(也就是`jsx`接下出来的`ReactElement`)和已有的老`fiber`结构，进行复用`fiber`和真实节点，并且对`fiber`标记删除、替换等操作。这个对比的过程就是`diff`算法。

### 对比开始部分

以一个简单的例子开始：假如老节点`A，B，C，D，E`对应5个老`fiber`，现在新节点解析出来的是`A，B，D，E，F`5个`ReactElement`（在未处理成`fiber`之前）。最开始时我们需要依次从头到尾进行对比(主要是对比`key`和`type`两个属性)，发现`A，B`是可以复用的，但是`C`和`D`不一致，不能复用，此时退出当前对比部分。`React`这部分对比的代码如下：

```javascript
// oldFiber 是老 fiber 的第一个 child，可以通过 sibling 进行遍历。
let oldFiber = currentFirstChild;
// lastPlacedIndex 表示最后一个老fiber被复用的位置
let lastPlacedIndex = 0;
// 表示新 ReactElement 的位置
let newIdx = 0;
// 表示下一个老fiber
let nextOldFiber = null;

// Diff 算法，标记子节点中需要的操作，记录在 flags 中
// 这个位置相当于只对比了前面的一部分，
// 如果出现 key 和 type 不一致的情况，那么会跳出对比。
for (;oldFiber !== null && newIdx < newChildren.length;newIdx++) {
  if (oldFiber.index > newIdx) {
    // 这里相当于 一直找到 old fiber index 与 newIdx 相等的节点
    // 否则的话，oldFiber 不向后遍历。
    nextOldFiber = oldFiber;
    oldFiber = null;
  } else {
    // 遍历下一个 fiber 
    nextOldFiber = oldFiber.sibling;
  }
  
  // 这里的 newChildren 是 jsx 解析出来的 children，为 ReactElement节点
  // 根据节点创建或者更新 fiber
  const newFiber = updateSlot(
    returnFiber,
    oldFiber, // 老 fiber
    newChildren[newIdx], // 新 element
    lanes,
  );

  // key 或 type 不相同时，不可复用。
  // 此时 newFiber 为 null，对比就会终止。
  // 这就意味着找到了第一个无法复用的节点
  if (newFiber === null) {
    if (oldFiber === null) {
      oldFiber = nextOldFiber;
    }
    break;
  }
  
  // 首次创建的时候无需记录，但是更新的时候需要记录
  if (shouldTrackSideEffects) {
    if (oldFiber && newFiber.alternate === null) {
      // 将老的fiber标记为删除
      deleteChild(returnFiber, oldFiber);
    }
  }
  
  // 取 current.index 和 lastPlacedIndex 最大值
  lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);

  // 建立 新fiber 之间的联系
  if (previousNewFiber === null) {
    resultingFirstChild = newFiber;
  } else {
    previousNewFiber.sibling = newFiber;
  }
  previousNewFiber = newFiber;
  oldFiber = nextOldFiber;
}
```

遍历跳出之后，会判断老`fiber`或者是新`ReactElement`遍历完成没。如果新`ReactElement`遍历完成，那么所有剩余的老`fiber`都应该标记为删除：

```javascript
if (newIdx === newChildren.length) {
  // 标记删除，记录到 父 fiber 的 deletions 属性中
  deleteRemainingChildren(returnFiber, oldFiber);
  return resultingFirstChild;
}
```

如果老`fiber`遍历完成，那么所有剩余新的`ReactElement`都是新插入的节点，创建`newFiber`

```javascript
if (oldFiber === null) {
  for (;newIdx < newChildren.length;newIdx++) {
    const newFiber = createChild(returnFiber, newChildren[newIdx], lanes);
    if (newFiber === null) {
      continue;
    }
    lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
    if (previousNewFiber === null) {
      resultingFirstChild = newFiber;
    } else {
      previousNewFiber.sibling = newFiber;
    }
    previousNewFiber = newFiber;
  }
  return resultingFirstChild;
}
```

显然例子中还剩余`C，D，E`和`D，E，F`没有进行对比。

### 对比剩余部分

如果老`fiber`和新`ReactElement`都有剩余，那么寻找可复用的`fiber`。对比代码如下：

```javascript
// 后续的是因为 key 和 type 不一致导致没有遍历完的数组。
// 此时开始复用的算法。
// 首先将老节点转换为 map 形式：{ key|index : fiber }
const existingChildren = mapRemainingChildren(returnFiber, oldFiber);

for (;newIdx < newChildren.length;newIdx++) {
  // 找到相应的可复用的 fiber
  const newFiber = updateFromMap(
    existingChildren,
    returnFiber,
    newIdx,
    newChildren[newIdx],
    lanes,
  );
  // 如果找到了对应的 fiber
  if (newFiber !== null) {
    if (shouldTrackSideEffects) {
      if (newFiber.alternate !== null) {
        // 如果已经复用了，在老节点中删除对应的 fiber
        existingChildren.delete(
          newFiber.key === null ? newIdx : newFiber.key,
        );
      }
    }
    // 能复用时，更新最后一个复用的 老fiber 的 index
    lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
    if (previousNewFiber === null) {
      resultingFirstChild = newFiber;
    } else {
      previousNewFiber.sibling = newFiber;
    }
    previousNewFiber = newFiber;
  }
}

if (shouldTrackSideEffects) {
  // 将所有没有被复用的老fiber标记为删除
  existingChildren.forEach(child => deleteChild(returnFiber, child));
}
```

这里最重要的一点是`placeChild`方法：

```javascript
// 用于 diff 算法，标记最后匹配的 old fiber 的位置
function placeChild(
  newFiber: Fiber,
  lastPlacedIndex: number,
  newIndex: number,
): number {
  newFiber.index = newIndex;
  // 当父亲的 current 不存在时，此时为 mount，shouldTrackSideEffects 为 false，不用做处理。
  // 当父亲的 current 存在时，shouldTrackSideEffects 为 true。
  // 例如，当遇到第一个需要重新创建的节点时，它对应的 parent 的 current 存在，标记为更新。
  // 当遍历到子节点时，由于子节点对应的 parent 的 current 不存在，此时不标记更新。
  // 这样做的好处是，只有父亲被标记为更新，而其后代均不作标记。
  // 在 completeWork 的时候子节点直接全添加到父亲上。
  // 在 commit 的时候只需要将父亲添加到 根节点上即可。
  if (!shouldTrackSideEffects) {
    return lastPlacedIndex;
  }
  // 如果复用了 老fiber
  const current = newFiber.alternate;
  if (current !== null) {
    const oldIndex = current.index;
    // 如果老的 index < lastPlacedIndex，说明这些老的节点无法复用。
    if (oldIndex < lastPlacedIndex) {
      // 不可复用，需要替换
      newFiber.flags |= Placement;
      return lastPlacedIndex;
    } else {
      // This item can stay in place.
      // 否则说明这个老节点可以复用，返回老节点 index
      return oldIndex;
    }
  } else {
    // 如果 老 fiber不存在，那么需要替换
    // 注意这里被标记了，commit的时候会进行处理
    newFiber.flags |= Placement;
    return lastPlacedIndex;
  }
}
```

该方法用于标记`fiber`是否为`Placement`。并且会更新`lastPlacedIndex`，该变量记录了最后一个被复用的老`fiber`的位置，因此这个老`fiber`前面的`fiber`就不应该被后续的`ReactElement`复用，从而达到移动的目的。比如`C，D，E`和`D，E，F`中`D`复用时，`lastPlacedIndex`为3，`E`复用时，`lastPlacedIndex`为4，`F`无法复用，此时创建新`fiber`，而老`fiber`中`C`没有被复用，那么会标记为删除。假设新的节点为 `D，E，C`，那么`C`会被复用吗？答案是不能，因为`lastPlacedIndex`为4，而老节点中`C`的位置为2，小于4，只能标记为删除，而不能复用。