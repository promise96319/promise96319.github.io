# 虚拟滚动

## 需求
需要实现非固定行高的虚拟滚动。

## 思路
### 实际渲染内容计算
首次渲染时，由于不知道每一行的高度，此时可以通过给定一个最小高度 `minItemHeight` 来计算需要渲染的内容。因为根据最小高度计算出来的结果最终渲染出来的内容高度肯定是大于视口高度的。如：
``` ts
// 应该渲染的数目
const count = viewportHeight / minItemHeight

// 实际渲染的高度永远是大于视口高度的
count * 每行的实际高度 > viewportHeight
```

实际的计算结果如下：
``` ts
calculateChildrenRange: () => {
  start: number; // 起始索引
  end: number; // 结束索引
  offset: number; // 内容偏移量
  scrollHeight: number; // 整体滚动高度
} = () => {
  const { data } = this.props;
  const { scrollTop } = this.state;

  if (!this.isVirtual) {
    return {
      start: 0,
      end: data.length - 1,
      offset: 0,
      scrollHeight: 0
    };
  }

  let startIndex;
  let endIndex;
  let startOffset;
  let itemTop = 0;
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    // 如果没有实际高度，就采用最小高度
    const height = this.getHeight(item);
    const itemBottomOffset = itemTop + height;

    // 计算第一个需要显示的内容
    if (itemBottomOffset >= scrollTop && startIndex === undefined) {
      startIndex = i;
      startOffset = itemTop;
    }

    // 计算最后一个需要显示的内容
    if (itemBottomOffset > scrollTop + this.props.height && endIndex === undefined) {
      endIndex = i;
    }

    itemTop = itemBottomOffset;
  }

  endIndex = Math.min((endIndex || data.length - 1) + 1, data.length);

  return {
    start: startIndex || 0,
    end: endIndex,
    offset: startOffset || 0,
    scrollHeight: itemTop
  };
};
```


### 偏移量计算
由于行高未知，那么渲染后的向上偏移距离也就未知。此时可以通过记录每一行的实际高度来计算偏移量。每次内容区域渲染完成时，获取实际的高度并记录下来，这样偏移量就能通过记录的实际高度来计算了：
``` ts
// 收集的高度
private itemHeights: Map<string | number, number> = new Map();

// 实际渲染
renderList = (start: number, end: number) => {
  const { data, renderItem = () => null } = this.props;

  return data.slice(start, end + 1).map((item, index) => {
    const originIndex = start + index;
    const node = renderItem(item, originIndex) as React.ReactElement;
    const key = this.getKey(item);
    return React.cloneElement(node, {
      key,
      // 收集 ref 并更新实际行高
      ref: (ele: React.ReactNode) => this.collectRef(item, ele)
    });
  });
};
```
## 问题

### 滚动时出现闪动问题


[CSS overflow-anchor属性与滚动锚定](https://www.zhangxinxu.com/wordpress/2020/08/css-overflow-anchor/)


### 滚动到某一行


### 配合 tree 时的收起展开功能
