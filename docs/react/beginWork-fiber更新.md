# beginWork - fiber的更新

在上一章中，`beginWork`阶段对每一个不同的标签都创建或复用了对应的`fiber`，接下来就是对`fiber`进行一些更加精细的处理。

## updateClassComponent

```javascript
prepareToReadContext(workInProgress, renderLanes);
```

第一步是判断`context`是否有更新，如果有的话那么标记`didReceiveUpdate`为`true`。接着获取`instance`:

```javascript
const instance = workInProgress.stateNode;
if (instance === null) {
  constructClassInstance(workInProgress, Component, nextProps);
  mountClassInstance(workInProgress, Component, nextProps, renderLanes);
}
```

`instance`为`class`组件的实例，存储在`fiber.stateNode`上。如果`instance`不存在，说明还没有被实例化。

### constructClassInstance方法

首先第一步是判断是否有`contextType`属性且为对象形式。如果存在说明使用了`context`，此时会进行`readContext`，将读取得到的`context`形成链表形式，存放到`fiber.dependencies.firstContext`上：

```javascript
const contextType = ctor.contextType;
if (typeof contextType === 'object' && contextType !== null) {
  context = readContext((contextType: any));
}
```

随后对`class`进行实例化，并获取`class`组件的`state`，存放到`fiber.memoizedState`属性上：

```javascript
let instance = new ctor(props, context);

const state = (workInProgress.memoizedState =
  instance.state !== null && instance.state !== undefined
    ? instance.state
    : null);
```

最后执行`adoptClassInstance`方法，建立`fiber`和`instance`的联系。并且为`instance`添加`updater`，即`setState、forceUpdate`等方法。

```javascript
instance.updater = classComponentUpdater;
// class fiber 的 stateNode 指向的是 class 实例
workInProgress.stateNode = instance;
// 将 fiber 存储到实例的_reactInternals 属性上
setInstance(instance, workInProgress);
```

### mountClassInstance方法

首先会读取`context`值，存放到`instance.context`上：

```javascript
const contextType = ctor.contextType;
if (typeof contextType === 'object' && contextType !== null) {
  // 因此在 class 组件里可以通过 this.context 访问 context
  instance.context = readContext(contextType);
}
```

随后是生命周期的执行，首先是静态方法`getDerivedStateFromProps`的执行：

```javascript
let partialState = getDerivedStateFromProps(nextProps, prevState);
const memoizedState =
  partialState === null || partialState === undefined
    ? prevState
  : Object.assign({}, prevState, partialState);
workInProgress.memoizedState = memoizedState;
```

该方法返回的`state`会和`class`组件原有的`state`合并，并且会覆盖原有的`state`。

接下来的判断就是为了兼容`componentWillMount`，但是已经不推荐使用了。

```javascript
if (
  typeof ctor.getDerivedStateFromProps !== 'function' &&
  typeof instance.getSnapshotBeforeUpdate !== 'function' &&
  (typeof instance.UNSAFE_componentWillMount === 'function' ||
    typeof instance.componentWillMount === 'function')
) {}
```

最后如果有`componentDidMount`，那么会将`fiber`标记为`Update`，这个标记只是为了后续触发该生命周期，并不是有什么更新操作：

```javascript
if (typeof instance.componentDidMount === 'function') {
  let fiberFlags: Flags = Update;
  workInProgress.flags |= fiberFlags;
}
```

### resumeMountClassInstance方法

当`instance`存在`current`不存在时，可以复用`instance`。与`mountClassInstance`不同的是它会首先判断是否有`componentWillReceiveProps`方法（已不推荐使用），如果存在则会调用。

其次是执行`update`队列，更新`state`:

```javascript
const oldState = workInProgress.memoizedState;
let newState = (instance.state = oldState);
processUpdateQueue(workInProgress, newProps, instance, renderLanes);
newState = workInProgress.memoizedState;
```

如果前后没有更新过，那么只会在`componentDidMount`存在时标记为`Update`。

```javascript
if (
  oldProps === newProps &&
  oldState === newState &&
  !hasContextChanged() &&
  !checkHasForceUpdateAfterProcessing()
) {
  if (typeof instance.componentDidMount === 'function') {
    let fiberFlags: Flags = Update;
    if (enableSuspenseLayoutEffectSemantics) {
      fiberFlags |= LayoutStatic;
    }
    workInProgress.flags |= fiberFlags;
  }
  return false
}
```

否则，会调用`getDerivedStateFromProps`方法。调用完成后再次判断是否有更新，并在`componentDidMount`存在时标记为`Update`。

```javascript
const shouldUpdate =
  // hasForUpdate
  checkHasForceUpdateAfterProcessing() ||
  // 对 shouldComponentUpdate 和 isPureReactComponent 进行判断
  checkShouldComponentUpdate(
    workInProgress,
    ctor,
    oldProps,
    newProps,
    oldState,
    newState,
    nextContext,
  );
```

### updateClassInstance方法

`updateClassInstance`与`resumeMountClassInstance`大同小异，区别在于使用`componentDidUpdate`时将`fiber`标记为`Update`。

### finishClassComponent方法

`finishClassComponent`方法最主要的工作是执行`render`方法，然后`reconcileChildren`。

```javascript
const instance = workInProgress.stateNode;
nextChildren = instance.render();
reconcileChildren(current, workInProgress, nextChildren, renderLanes);
```

## updateContextProvider

在`React`包中定义了`createContext`方法，该方法返回一个`context`：

```javascript
export function createContext<T>(defaultValue: T): ReactContext<T> {
  const context: ReactContext<T> = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: (null: any),
    Consumer: (null: any),
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context,
  };

  return context;
}
```

因此`jsx`在解析`Provider`的时候，得到的`type`为：

```javascript
{
  $$typeof: REACT_PROVIDER_TYPE,
   _context: context,
}
```

更新时，会获取`Provider`上定义的`value`属性，并进行对比：

```javascript
if (is(oldValue, newValue)) {
  if (
   oldProps.children === newProps.children &&
   !hasLegacyContextChanged()
  ) {
   return bailoutOnAlreadyFinishedWork(
    current,
        workInProgress,
        renderLanes,
      );
    }
} else {
 // context 改变了，寻找 consumer 、 classComponent 并标记 更新
  propagateContextChange(workInProgress, context, renderLanes);
}
```

如果前后的`value`值未发生变化，那么跳过该节点的协调，否则调用`propagateContextChange`方法，该方法会以当前节点为根节点向下进行深度遍历。如果节点`fiber`上的`dependencies`存在，说明使用了`context`。遍历`dependencies`看是否有使用`Provider`变动对应的`context`。

```javascript
 if (dependency.context === context) {}
```

如果当前的`fiber.tag === ClassComponent`，由于`context`变化，所以会创建一个`update`，添加到`fiber.updateQueue.shared.pending`当中去。除此之外，还会进行`lane`的合并，这样子节点就能进行相应的更新了。

```javascript
fiber.lanes = mergeLanes(fiber.lanes, renderLanes);
list.lanes = mergeLanes(list.lanes, renderLanes);
```

如果查找到节点为`Provider`，且它们的`type`相同（意味着是同一`Provider`），那么就会跳过，不做任何处理。

```javascript
else if (fiber.tag === ContextProvider) {
 // 遇到下一个 Provider 停止向下递归
 nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
} 
```

## updateContextConsumer

如果遇到的是`Consumer`标签，首先会执行`prepareToReadContext`方法，但是此时是不存在`dependencies`，因此没有：

```javascript
const firstContext = dependencies.firstContext;
if (firstContext !== null) {
  if (includesSomeLane(dependencies.lanes, renderLanes)) {
    markWorkInProgressReceivedUpdate();
  }
  dependencies.firstContext = null;
}
```

判断`dependencies.firstContext`是否存在且`lane`与`renderLanes`有交集，有的话说明还有待更新的内容，此时将`didReceiveUpdate`设为`true`，`firstContext`置为空。

紧接着`readContext`，这里的`type`就是`createContext`创建的`context`：

```javascript
let context: ReactContext<any> = workInProgress.type;
const newValue = readContext(context);
```

`readContext`的过程就是将`context`添加到`dependencies`当中并形成链表结构：

```javascript
const contextItem = {
 context: ((context: any): ReactContext<mixed>),
 memoizedValue: value,
 next: null,
}
   
lastContextDependency = contextItem;
currentlyRenderingFiber.dependencies = {
 lanes: NoLanes,
 firstContext: contextItem,
};
```

随后将从`context`中读取到的`value`进行渲染，达到`value`传递的目的：

```javascript
newChildren = render(newValue);
```

最终得到可以使用`value`的`children`。

## updateFunctionComponent

对于`function`组件，第一步也是处理`context`：

```javascript
prepareToReadContext(workInProgress, renderLanes);
```

第二步是调用`renderWithHooks`方法，其主要目的是执行函数，在执行的过程中处理`hooks`。

```javascript
// 赋值 hooks dispatcher。
ReactCurrentDispatcher.current =
  current === null || current.memoizedState === null
    ? HooksDispatcherOnMount
    : HooksDispatcherOnUpdate;
let children = Component(props, secondArg);
```

这里的第一个参数`props`好理解，第二个参数`secondArg`在`forwardRef`的时候为`ref`。另外关于`hooks`相关的内容后续章节会单独讲解。

## updateForwardRef

`forwardRef`方法在`React`包中定义：

```javascript
export function forwardRef<Props, ElementType: React$ElementType>(
  render: (props: Props, ref: React$Ref<ElementType>) => React$Node,
) {
  // 相当于通过 render 创建了一个节点
  const elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render,
  };
  return elementType;
}
```

在`beginWork`的时候先获取到`render`，然后其他操作同函数式组件，会进行`renderWithHooks`。

```javascript
const render = Component.render;
const ref = workInProgress.ref;
nextChildren = renderWithHooks(
  current,
  workInProgress,
  render,
  nextProps,
  ref,
  renderLanes,
)
```

唯一不同的是这个位置传入了`ref`值，在调用`render`的时候，第二个参数存在并且为传入的`ref`。

```javascript
let children = Component(props, secondArg);
```

## updateHostComponent

`updateHostComponent`方法比较简单，主要代码为：

```javascript
const isDirectTextChild = shouldSetTextContent(type, nextProps);
// ...
reconcileChildren(current, workInProgress, nextChildren, renderLanes);
```

通过`shouldSetTextContent`判断节点是否可以按照文本节点处理，相当于做了一个小优化。

## updateFragment

`updateFragment`也比较简单，相当于只包装了一层空壳，不对这层壳做处理，直接处理其子元素：

```javascript
const nextChildren = workInProgress.pendingProps;
reconcileChildren(current, workInProgress, nextChildren, renderLanes);
```

## updateMemoComponent

`memo`方法在`React`包中定义：

```javascript
export function memo<Props>(
  type: React$ElementType,
  compare?: (oldProps: Props, newProps: Props) => boolean,
) {
  const elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type,
    compare: compare === undefined ? null : compare,
  };
  return elementType;
}
```

如果`current`不存在，说明不可复用，此时需要为被`memo`的组件创建`fiber`：

```javascript
const child = createFiberFromTypeAndProps(
 Component.type,
 null,
 nextProps,
 workInProgress,
 workInProgress.mode,
 renderLanes,
);
```

如果`current`存在，那么`current.child`就是被`memo`包裹的组件的`fiber`。接着判断组件有没有被更新：

```javascript
const hasScheduledUpdateOrContext = checkScheduledUpdateOrContext(
  current,
  renderLanes,
);
```

如果被更新了，那么会通过`createWorkInProgress`创建（或复用）之前的`fiber`。否则通过传入的`compare`函数比较是否需要更新：

```javascript
if (!hasScheduledUpdateOrContext) {
  const prevProps = currentChild.memoizedProps;
  let compare = Component.compare;
  compare = compare !== null ? compare : shallowEqual;
  if (compare(prevProps, nextProps) && current.ref === workInProgress.ref) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
  }
}
```

## updatePortalComponent

`createPortal`方法在`React-Dom`包中定义：

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

在创建`fiber`时，它的`stateNode`属性是一个有`containerInfo`属性的对象：

```javascript
export function createFiberFromPortal(
  portal: ReactPortal,
  mode: TypeOfMode,
  lanes: Lanes,
): Fiber {
  const pendingProps = portal.children !== null ? portal.children : [];
  const fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
  fiber.lanes = lanes;
  fiber.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null, // Used by persistent updates
    implementation: portal.implementation,
  };
  return fiber;
}
```

在`beginWork`更新时，会将`containerInfo`存放起来：

```javascript
pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
```

在它的子节点被添加时，可以找到这个`containerInfo`节点。这样就可以达到`fiber`在`rootFiber`内，但是添加的真实节点在其他节点的目的。

## mountLazyComponent

`lazy`的定义在`React`包中，主要由两个函数构成：

```javascript
function lazyInitializer<T>(payload: Payload<T>): T {
  if (payload._status === Uninitialized) {
    const ctor = payload._result;
    const thenable = ctor();
    thenable.then(
      moduleObject => {
        if (payload._status === Pending || payload._status === Uninitialized) {
          const resolved: ResolvedPayload<T> = (payload: any);
          resolved._status = Resolved;
          resolved._result = moduleObject;
        }
      },
      error => {
        if (payload._status === Pending || payload._status === Uninitialized) {
          const rejected: RejectedPayload = (payload: any);
          rejected._status = Rejected;
          rejected._result = error;
        }
      },
    );
    if (payload._status === Uninitialized) {
      const pending: PendingPayload = (payload: any);
      pending._status = Pending;
      pending._result = thenable;
    }
  }
  if (payload._status === Resolved) {
    // 如果 promise 完成了，那么会将加载的模块返回
    const moduleObject = payload._result;
    return moduleObject.default;
  } else {
    // 第一次加载时，报错
    throw payload._result;
  }
}

export function lazy<T>(
  ctor: () => Thenable<{default: T, ...}>,
): LazyComponent<T, Payload<T>> {
  const payload: Payload<T> = {
    _status: -1,
    _result: ctor,
  };

 // 返回的 type
  const lazyType: LazyComponent<T, Payload<T>> = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer,
  };

  return lazyType;
}
```

在`beginWork`的时候，会正式执行该`promise`:

```javascript
const lazyComponent: LazyComponentType<any, any> = elementType;
const payload = lazyComponent._payload;
const init = lazyComponent._init;
let Component = init(payload);
```

第一次执行时，由于`promise`没有`resolve`，因此会报错，此时会被外围的`catch`捕捉，该过程后续会在`Suspense`章节中详细讲解。

如果能正常加载该组件，那么会根据组件的类型去调用对应的函数：

```javascript
workInProgress.type = Component;
// 获取 tag
const resolvedTag = (workInProgress.tag = resolveLazyComponentTag(Component));
const resolvedProps = resolveDefaultProps(Component, props);
let child;
switch (resolvedTag) {
  case FunctionComponent: { // ... }
  case ClassComponent: { // ... }
  case ForwardRef: { // ... }
  case MemoComponent: { // ... }
}
```
