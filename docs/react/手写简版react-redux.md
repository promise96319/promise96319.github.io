# 手写简版react-redux

## 简单使用

```javascript
function Child(props) {
  return <div>child</div>
}

// 1. 通过 connect 将属性添加到子组件上
const WrappedChild = connect(
  // mapToStateProps
  // mapToDispatchProps
)(Child)

// 2. 通过 Provider 将属性传递给后代
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WrappedChild></WrappedChild>
      </Provider>
    </div>
  );
}
```

## 实现思路

1. 借用`redux`来共享数据，此处命名为`store`。
2. 使用`React.createContext`来创建`Context`，使用`Context.Provider`给后代提供`store`，`Context.Consumer`接收`store`。
3. 接收完`store`，根据`mapStateToProps/mapDispatchToProps`进行处理，将处理后的属性添加到子组件上。

## Provider

```javascript
import { createContext } from "react"

const Context = createContext()

export const Provider = ({ store, children }) => {
  return <Context.Provider value={store}>
    {children}
  </Context.Provider>
}
```

## connect

```javascript
export const connect = (
  mapStateToProps,
  mapDispatchToProps
) => Comp => () => {

  // 接收 store
  const store = useContext(Context)
  // 给子组件添加处理后的属性
  const [actualChildProps, setActualChildProps] = useState({})

  useEffect(() => {
    const update = () => {
      const initMapStateToProps = (store) => {
        const state = store.getState()
        // mapStateToProps 为函数形式
        if (mapStateToProps) {
          return mapStateToProps(state)
        }
        return { ...state }
      }
      const initMapDispatchToProps = (store) => {
        if (!store) return
        const { dispatch } = store
        // mapDispatchToProps 为对象形式
        if (mapDispatchToProps && typeof mapDispatchToProps === 'object') {
          return bindActionCreators(mapDispatchToProps, dispatch)
        }
        // mapDispatchToProps 为函数形式
        if (typeof mapDispatchToProps === 'function') {
          return mapDispatchToProps(dispatch)
        }
        // 默认
        return {
          dispatch
        }
      }
      // 处理后的 state,dispatch 传给子组件
      setActualChildProps({
        ...initMapStateToProps(store),
        ...initMapDispatchToProps(store)
      })
    }
    // 监听更新
    const unSubscribe = store.subscribe(() => {
      update()
    })
    update()
    return unSubscribe
  }, [store])

  return <Context.Consumer>
    {() => {
      return <Comp {...actualChildProps}></Comp>
    }}
  </Context.Consumer >

}
```

## bindActionCreators

转换`mapDispatchToProps`为对象的情况：

```javascript
// 原始
{
	add: (id) => { type: 'add', payload: id }
}
  
// 转换后
{
	add: (id) => dispatch({ type: 'add', payload: id })
}
```

具体实现代码：

```javascript
const bindActionCreators = (actionCreators, dispatch) => {
  const boundActionCreators = {}
  Object.entries(actionCreators).forEach(([key, actionCreator]) => {
    boundActionCreators[key] = (...args) => dispatch(actionCreator(...args))
  })
  return boundActionCreators
}
```

## 参考

- [github](https://github.com/reduxjs/react-redux/blob/master/src/connect/connect.ts)