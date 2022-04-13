# Space / Row 布局间隙问题

- 方案一：`flex-gap` 兼容性有问题
- 方案二：`padding + margin` 方式

```typescript
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const SizeMap: Record<string, number> = {
  none: 0,
  mini: 4,
  small: 8,
  medium: 16,
  large: 24
};

export type SpaceAlignType = 'top' | 'middle' | 'bottom';
export type SpaceJustifyType = 'start' | 'center' | 'end' | 'around' | 'between';
export type SpaceDirectionType = 'horizontal' | 'vertical';
export type SpaceSizeType = keyof typeof SizeMap | number;

export interface SpaceProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 对齐方式
   * @type 'top' | 'middle' | 'bottom'
   */
  align?: SpaceAlignType;
  /**
   * @description 排列方式
   * @type 'start' | 'center' | 'end' | 'around' | 'between'
   */
  justify?: SpaceJustifyType;
  /**
   * @description 方向
   * @type 'horizontal' | 'vertical'
   */
  direction?: SpaceDirectionType;
  /**
   * @description 间距大小
   * @type SpaceSizeType | [SpaceSizeType, SpaceSizeType]
   */
  size?: SpaceSizeType | SpaceSizeType[];
  /**
   * @description 是否换行
   */
  wrap?: boolean;
}

export class Space extends React.Component<SpaceProps> {
  static propTypes = {
    className: PropTypes.string,
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),
    justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(Object.keys(SizeMap)),
      PropTypes.arrayOf(PropTypes.oneOf(Object.keys(SizeMap)))
    ]),
    wrap: PropTypes.bool
  };

  static defaultProps = {
    align: 'middle',
    justify: 'start',
    size: 'small',
    wrap: false,
    direction: 'horizontal'
  };

  private styleName = 'qtc-space';

  // size => [horizontalGap, verticalGap]
  getGutters() {
    const { size } = this.props;
    const gutters = Array.isArray(size) ? size : [size, 0];
    return gutters.map((gap: number) => {
      return SizeMap[gap] || gap || 0;
    });
  }

  getSizeStyle() {
    const [gutterH, gutterV] = this.getGutters();
    const horizontalGutter = gutterH > 0 ? gutterH / 2 : undefined;
    const verticalGutter = gutterV > 0 ? gutterV / 2 : undefined;
    const containerStyle: React.CSSProperties = {};
    const itemStyle: React.CSSProperties = {};

    // 内层 item padding 为间隙，外层容器 margin 为负，抵消外层多余 padding
    if (horizontalGutter) {
      containerStyle.marginLeft = -horizontalGutter;
      containerStyle.marginRight = -horizontalGutter;
      itemStyle.paddingLeft = horizontalGutter;
      itemStyle.paddingRight = horizontalGutter;
    }

    if (verticalGutter) {
      containerStyle.marginTop = -verticalGutter;
      containerStyle.marginBottom = -verticalGutter;
      itemStyle.paddingTop = verticalGutter;
      itemStyle.paddingBottom = verticalGutter;
    }

    return { containerStyle, itemStyle };
  }

  render() {
    const { styleName, props } = this;
    const { className, align, justify, direction, wrap, children } = props;
    const { containerStyle, itemStyle } = this.getSizeStyle();
    const rootClass = classNames(styleName, className, {
      [`${styleName}-${align}`]: align,
      [`${styleName}-${justify}`]: justify,
      [`${styleName}-${direction}`]: direction,
      [`${styleName}-wrap`]: direction === 'horizontal' && wrap
    });
    return (
      <div className={rootClass} style={containerStyle}>
        {children &&
          React.Children.map(children, (child: React.ReactElement) => (
            <div className={`${styleName}-item`} style={itemStyle}>
              {child}
            </div>
          ))}
      </div>
    );
  }
}
```

