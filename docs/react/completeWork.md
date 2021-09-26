# completeWork 阶段

`performUnitOfWork`的第二步就是`completeWork`阶段，每次都会执行`completeUnitOfWork`方法：

```javascript
function performUnitOfWork(unitOfWork: Fiber): void {
	// ...
  if (next === null) {
    // 如果没有 next child，那么开始 complete.
    // 创建可真实节点
    completeUnitOfWork(unitOfWork);
  } else {
    // 如果存在 next,说明还有 child,继续向下递归 beginWork
    workInProgress = next;
  }
}
```

## bubbleProperties

对于所有的`fiber`都会进行`bubbleProperties`处理。该函数的作用是遍历`workInProgress`的第一层子节点，将所有`child.lanes`和`child.childLanes`合并到当前的`childLanes`上。将所有`child.subtreeFlags`和`child.flags`合并到当前`subtreeFlags`上。

## HostComponent

相较于其他节点，`HostComponent`节点比较特殊。

```javascript
// 将当前 fiber 移出
popHostContext(workInProgress);
// 获取的是当前的 RootHostContainer
const rootContainerInstance = getRootHostContainer();
```

首先会移除当前的`HostContext`，其次是获取`container`节点。为什么能获取到真实节点呢？这是因为在`beginWork`中对于`HostRoot`和`HostPortal`节点都会将真实节点`container`全局存储到`rootInstanceStackCursor.current`，而在`completeWork`阶段将其移出。在访问子节点时就能正确获取到它所在的容器了。

### 真实节点可复用时

接下来就是渲染真实节点的过程：

```javascript
if (current !== null && workInProgress.stateNode != null) {
	// 如果真实节点存在，那么进行更新
	updateHostComponent(
		current,
		workInProgress,
		type,
		newProps,
		rootContainerInstance,
	);

	if (current.ref !== workInProgress.ref) {
		markRef(workInProgress);
	}
}
```

如果老`fiber`存在且`stateNode`存在，说明已经复用了`fiber`且具备真实节点。这个时候只需要更新属性即可：

```javascript
 updateHostComponent = function (//...) {
  	// ...
   
 		// 类似结构：['name', '张三', 'id', 333, 'style', { color: 'red' }]
    const updatePayload = prepareUpdate(
      instance,
      type,
      oldProps,
      newProps,
      rootContainerInstance,
      currentHostContext,
    );
    workInProgress.updateQueue = (updatePayload: any);
		// 标记为 Update
    if (updatePayload) {
      markUpdate(workInProgress);
    }
  };
```

这个更新的过程正如`UpdateQueue`章节中提到的，主要是通过`prepareUpdate`方法对比节点的新旧`props`，最后将改变了的属性记录成数组形式。其中偶数`index`为键，奇数`index`为值。结构类似如下：

```javascript
['name', '张三', 'id', 333, 'style', { color: 'red' }]
```

### 真实节点不可复用时

第二种情况是`current`不存在或者是`stateNode`不存在，那么真实节点就无法复用了，需要重新创建：

```javascript
const instance = createInstance(
  type,
  newProps,
  rootContainerInstance,
  currentHostContext,
  workInProgress,
);
export function createInstance(
  type: string,
  props: Props,
  rootContainerInstance: Container,
  hostContext: HostContext,
  internalInstanceHandle: Object,
): Instance {

  // 创建了 element
  const domElement: Instance = createElement(
    type,
    props,
    rootContainerInstance,
    parentNamespace,
  );
  // 建立关系 node . '__reactFiber$' + randomKey = fiber
  precacheFiberNode(internalInstanceHandle, domElement);
  // 建立关系 node . '__reactProps$' + randomKey = props
  updateFiberProps(domElement, props);
  return domElement;
}
```

`createInstance`方法会创建一个真实节点，并且建立真实节点与`fiber`和`props`的关系。随后添加所有子节点：

```javascript
appendAllChildren(instance, workInProgress, false, false);
// 如果是普通节点的话，会将 stateNode 存起来
// 与 fiber 建立了联系，真实节点存放在 stateNode 上
workInProgress.stateNode = instance
```

`appendAllChildren`方法会将能渲染的子节点全部添加到当前创建的节点`instance`上，这样一次向上进行`completeWork`时，就会形成一棵具有真实节点的树。