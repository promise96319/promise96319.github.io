# Drawer 嵌套偏移

1. 通过 `Context` 将父 `Drawer` 的偏移传递给子 `Drawer`。
```typescript
type ParrentDrawer = Drawer | null;
const DrawerContext = React.createContext<ParrentDrawer>(null);

// class component
renderProvider = (value: Drawer) => {
  const { visible } = this.props;
  this.parentDrawer = value;

  return (
    <DrawerContext.Provider value={this}>
      <RcDrawer open={visible}>
        {this.renderBody()}
      </RcDrawer>
    </DrawerContext.Provider>
  );
};

render() {
  return <DrawerContext.Consumer>{this.renderProvider}</DrawerContext.Consumer>;
}
```

2. 子 `Drawer` 在显示时，触发父 `Drawer` 偏移，如`pushDistance`。
```typescript
componentDidMount() {
  if (this.parentDrawer && this.props.visible) {
    this.parentDrawer.updateWidth(true, this.state.displayWidth);
  }
}

componentDidUpdate() {
  // 只有 visible 上一个状态是 false, 当前状态也是 false，那么不需要更新。
  // 处理父 Drawer 下有多个子 Drawer 的情况，只有在子 Drawer 发生改变时才会递归向上更新。
  const shouldUpdate = this.state.visible || this.state.prevVisible;
  if (this.parentDrawer && shouldUpdate) {
    this.parentDrawer.updateWidth(!!this.props.visible, this.state.displayWidth);
  }
}

componentWillUnmount() {
  if (this.parentDrawer) {
    this.parentDrawer.updateWidth(false, this.state.displayWidth);
  }
}
```
3. 父 `Drawer` 开始偏移
``` typescript
updateWidth = (isPush: boolean, childDisplayWidth: number) => {
  const { pushDistance = 0 } = this.props;
  // 当前抽屉应该显示的宽度
  const realWidth = this.resolveDrawerWidth();
  let shouldDisplayWidth = realWidth;
  if (isPush) {
    // 如果是推开状态需要计算宽度
    shouldDisplayWidth = Math.max(realWidth, childDisplayWidth + pushDistance);
  }

  this.setState({ isPush, displayWidth: shouldDisplayWidth });
};

// 更新 transform
getDrawerStyle = () => {
  const width = this.resolveDrawerWidth();
  const { isPush, displayWidth } = this.state;
  return isPush ? { transform: `translateX(-${displayWidth - width}px)` } : {};
};
```
