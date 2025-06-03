# 组件 API 规范

## 类型

### 类型名称

| 名称 | 含义 | 取值 | 使用场景 | 备注 |
|------|------|------|----------|------|
| type | 类型 | success / error / warning / info<br>default / primary / danger / secondary / ... | 组件外观和行为上有显著的不同时，应考虑采用 type 进行分类 | 注意失败应采用 error 而非 danger<br>type 的取值理论上 "能够" 当做组件的前缀，如 PrimaryButton |
| mode（废弃） | 模式 | - | - | 该属性已废弃，应采用更加具体的属性来代替表示 |
| size | 尺寸 | mini / small / medium / large（默认 medium）<br>number（无 string 类型）<br>以上类型的数组形式，表示为 x、y 轴的大小 | 用于表示组件整体的大小，可以是指宽度、字号、行高等等<br>用于表示元素之间的间隔大小 | - |
| direction | 方向 | horizontal / vertical | 强调元素的具体排列方向，比如 Group 组件的方向 | direction 更加聚焦于具体元素的排列方向上，比如有几个 item，这几个 item 是纵向排列的 |
| layout | 边距 | horizontal / vertical / inline-horizontal / ... | 强调组件的整体结构和组织方式，比如 Description / Form 的纵向布局 | layout 组件的整体布局或排列方式。通常包括组件内部子元素的排列方式、间距、尺寸等。比如 Form、Description，强调的是纵向的排列方式，而非完全的线性纵向排列 |
| placement | 弹出面板相对于触发器的位置 | top / bottom / left / right<br>topLeft / topRight / bottomLeft / bottomRight<br>leftTop / leftBottom / rightTop / rightBottom | 针对于弹出层相当于触发器的位置定位 | - |
| position | 位置 | left / top / right / bottom | 元素的定位 | - |

### 什么时候应该考虑拆分成单独组件而非使用 type?

主要考虑功能的重叠程度和可重用性：

- 如果功能上重叠程度较大，只是样式或少数行为上有所不同，采用类型区分更好。比如 Select 组件 list/group/tree，在功能上都是选中功能，逻辑几乎一致。
- 如果每种类型的组件都是特定用于某个场景，且很少有内容进行复用，那么拆分成独立的组件可能更有效。比如 Input 和 InputTextarea 和 InputPassword，一个用于单行，一个用于多，一个用于密码，内部逻辑都用于特定场景，放在一起不大合适。

## 节点

### 规则

#### 名称

名称主要分为两种：

- 当不需要传递参数时，使用普通节点渲染，如：header、footer 等
- 当需要传递参数时，使用函数进行渲染，名称统一用 renderXxx 命名，如 renderHeader: (props) => React.ReactNode

注意：

- 如果渲染的节点分为多种类型时，可采用对象表示，如 icons: { fileIcon, errorIcon, xxxx }，视具体情况而定，如 Steps 组件中自定义各种状态下的 icon
- 如果是定制组件内部某元素中的节点，应带有相关节点前缀，如 renderPanelHeader

#### 取值

节点取值需要对 React.ReactNode 或 React.ReactElement 类型加以区分，不能笼统的定义为 React.ReactNode 类型。

比如组件内部使用 React.cloneElement() 传递 props 时，外部传递 React.ReactNode 类型就不合适。因为 null / string 等无法传递 props。

当节点为 React.ReactNode 类型时，如果取值为 null，需要将其当做节点渲染，替换掉原有节点。如果取值为 undefined 表示不自定义渲染元素，可保留原有的元素。

比如 header，如果组件内部已经渲染了一个 header，外部传入的 header 为 null 时，会将内部 header 覆盖为 null。但是如果外部传递为 undefined 时，原有的内部元素仍保持渲染。

### 节点名称

| 名称 | 含义 | 使用场景 | 备注 |
|------|------|----------|------|
| header | 头部 | - | - |
| body | 主体 | body 用来指组件的主要部分，暗示有一定的结构性或组织性 | body 更多地被用在那些有明确区分头部（header）、主体（body）和尾部（footer）的组件中。（但当强调的是渲染的内容时，应该使用 content 来表示）<br>很少会用到，绝大多数情况使用 content |
| footer | 脚部 | - | - |
| title | 标题 | - | - |
| subTitle | 副标题 | - | - |
| description | 描述 | 通常用来指定对某事物的简短解释或说明。它倾向于是文本性质的，并且通常是为了提供额外的信息或解释主题 | 通常不包括复杂的布局或多种元素类型。它更多用于文字说明，如产品描述、指令说明或简介 |
| content | 内容 | content 含义较 body 更为广泛和通用。它可以包含任何类型的内容，包括文本、图像、视频、链接或其他自定义组件 | content 通常没有特定的结构或形式限制。它强调的是内容的多样性和灵活性。<br>通常组件里都是使用 content 而不会采用 body 来作为属性，只有像 table 中 components: {header, body} 这种明确强调区域结构的形式才会采用 |
| label | 标签文本 | 通常与表单元素相关联，用于标识输入 | 表示选项含义的文本，如原生 option 标签的 label 属性。比如 Select 中的 options 的文案应该由 label 表示 |
| text | 文本 | 用于传递普通文本或描述性文本，而不是特定于元素的标题或标签 | 如 data 这种没有特定结构的数据 |
| placeholder | 占位内容 | - | - |
| error | 错误信息 | - | - |
| extra | 额外内容 | 用于展示辅助信息、说明、警告或其他非关键数据。这块内容通常不是组件主要操作或主要信息的一部分，而是为了外部扩展附加的一块内容 | 如 Form.Item 下方的附加信息说明。<br>如果这块内容有明确的意义和作用，应当采用更加具体的描述来表示。比如明确表示这块内容是用作描述文本的，应该采用 description 而不应该采用 extra |
| empty | 空白内容 | 用于组件内部数据为空且外部无法控制空状态的情况下，应提供 empty 自定义空状态节点 | 如 Table 、Select 下拉面板为空。<br>对于外部可以控制的空状态，组件不应该提供 empty，比如 List 组件 |
| loader | 加载器 | - | - |
| prefix | 前缀 | 用于添加前置和后置的内容 | - |
| suffix | 后缀 | - | - |
| addonBefore | 前置 | 专门用于表单项的前置和后置内容，在输入框外部显示 | - |
| addonAfter | 后置 | - | - |
| divider | 分割线 | - | - |
| separator | 分隔符 | - | - |
| loadMore | 加载更多 | - | - |
| mask | 蒙层 | 用于遮盖蒙层下面的内容，强调的是对下层内容可见性的控制，通常带有一定的透明度 | - |
| cover | 覆盖物 | 为形容词时，强调的是元素如何完全填充或覆盖其父容器，特别实在处理背景图像时<br>为名词时，通常指一个覆盖在其他元素上的图层或对象，强调的是覆盖或隐藏下面的内容，或为了美观而添加在上层的元素 | 组件里一般都是采用 mask，很少会有 cover 作为覆盖物的场景。所以 cover 应该只做是否填充或覆盖父容器的意思，而不作覆盖物的示意 |
| trigger | 触发器 | 这里统一指触发器 | trigger 只做节点的意思。<br>Tooltip 的 [hover, click] 触发方式，应通过 triggerActions: [] 来命名，而非 trigger。<br>Form.Item 的子元素的值改变方法，应该通过 changeEventName 来命名，而非 trigger |
| indicator | 指示器 | Indicator 通常表示一种用来指示或显示某种状态、情况或信息的物体、符号、或标志 | 经常用于表示各种状态指示器或标志，以帮助用户理解系统的状态或进展 |
| colon（废弃） | 冒号 | - | 已废弃，组件外部自行添加冒号内容 |
| icon | 图标 | 主图标都采用 icon 命名<br>其他图标应带有前缀，如 suffixIcon | - |
| image (废弃) | 图片 | - | 已废弃 |
| renderXxx | 具体名称同上 | - | - |

### 问题

目前 trigger 有三种用途，应加以区分：

1. ReactNode 类型：用于渲染触发节点，如 Dropdown 的 renderTrigger
2. [hover, click, contextMenu] 类型：用于指定触发的方式，如 tooltip 的 trigger，统一更改为 triggerActions: []
3. string 类型：用于指定子元素的触发方法，如 Form.item 的 trigger，统一更改为 changeEventName: 'onChange/onSelect/xxx'

## 数据

### 数据名称

| 名称 | 含义 | 取值 | 使用场景 | 备注 |
|------|------|------|----------|------|
| value | 组件唯一值 | - | 当需要表示组件的唯一值时，统一采用 value 表示。该 value 值能够表示该组件的用途 | value 永远为单数形式<br>除 value 外，其他属性应根据实际情况采用复数形式，如 selectedValues: [] |
| defaultValue | 默认值 | - | 与 value 值对应，用于非受控状态 | - |
| initialValue | 初始值 | - | 与 value 值对应，用于设置初始值 | 初始值的含义是：在内部值没有被其他行为改变时，外部传入的 initialValue 改变仍会更新渲染的内容。当内部行为导致 value 改变时，外部的 initialValue 不会再导致内部值发生改变。<br>区别于 defaultValue，defaultValue 默认传递一次后无论 defaultValue 如何改变，渲染的内容不会改变。详见：<https://zhuanlan.zhihu.com/p/68709211><br>目前只在 Form 里使用了，但是定义有误，后续会对 Form 表单进行修改 |
| data | 数据 | T[] | 无标准的数据格式，推荐使用数据格式：{ key, text, children }[] | - |
| rowKey | 数据的 key，默认为 'key' | React.Key \| (item) => React.Key | 与 data 属性对应<br>为 data 每一行的 key 值 | - |
| options | 可选项 | T[] | 主要用于可选项 | 标准的数据格式应为：{ label, value, children }[]<br>label 用于标识选择项，value 为唯一值 |
| fieldNames | 外部数据到内部数据的映射关系 | { label: string, value: string, children: string } | 与 options 对应<br>当传入的是非标准的数据格式时，可以通过该属性来对数据进行标准化 | 先保留 |
| optionFiltered | 选项过滤 | (inputValue: string, option: Option) => boolean | - | - |
| format | 数据的格式 | string | 通常用于时间日期的格式化，如 YYYY-MM-DD | - |
| formatter | 数据格式化函数 | 如 () => string | 返回格式化后的数据 | 注意：format 表示的是数据的格式，而 formatter 表示的是格式化后的数据。两者的值是不同的含义 |

### 问题

#### 使用 options 还是 data?

- options 用于表示可选项，其数据是可被选择的。而 data 只是单纯地表示原始数据，一般用于展示数据的组件。
- 需要注意的是 options 标准数据结构是 label / value，label 用于表示可选项。而 data 的数据结构是不固定的。

#### 使用 rowKey 还是 dataKey?

使用 rowKey 更合适一些，rowKey 表示的每一行数据的 key。而 dataKey 字面意思指的是 data 的 key，但是 data 是数组，并没有 key。

#### 是使用 selectedKeys 还是 selectedValues ?（table 数据没有 value ，但是 tree 里存在 value）

- selectedValues 侧重于表示选择了哪些具体的值或对象，主要在需要实际选定的项目值或对象的时候使用。
- selectedKeys 侧重于选中的标识符，主要用于管理选项的选择状态。因此像 tree / table 等情况下使用 keys 更好。

#### 基于上一个问题，为什么 Select 不用 keys 而使用 value ?

对于一个组件来讲，能通过唯一值能表示该组件的用途时，应该由 value 来表示该值（部分特殊组件除外，如 checked），因此像 Select/TreeSelect 这些组件的选中值都使用 value 表示。

但是像 Table/Tree 组件，向外暴露多个值的时候，value 无法准确描述该组件的用途，因此需要通过其他值来表示，如 selectedKeys/expandedKeys

## 样式

### 样式名称

| 名称 | 含义 | 取值 | 使用场景 | 备注 |
|------|------|------|----------|------|
| className | 类名 | - | 所有组件都应该提供 | - |
| style | 样式 | - | 通常情况下，不需要提供 style，应采用 className 进行样式覆盖 | 在嵌套比较复杂或覆盖难度较大的情况下，可以为内部子组件提供 xxxStyle 属性。<br>如果实在需要在组件上提供某 style 的话，应当考虑是否可以通过为组件提供一个单独的属性来解决。<br>应尽量避免 style 的使用 |
| width/height/minHeight/maxHeight | 宽度 | number<br>百分比 | 当外部明确需要使用到这些属性，并且使用频率较高时，才应该单独设为属性。否则应该使用 className 进行样式覆盖 | - |
| autoWidth/autoHeight | 是否根据内容的宽高来自适应宽高 | boolean | - | 其他表示"自由、自动"的也以 "auto" 开头命名，如 autoFocus/autoComplete/... |
| fill | 填充内容 | 取值一般为填充内容，如颜色 | 用于内容的填充 | fill 有两层含义，一层是填充，主要指代填充物，如 svg 的 fill 用于表示填充颜色。另一层含义是指元素扩展以充满空间。<br>为了语义更加清晰，这里 fill 只取填充的含义，而充满空间采用 fullSize 属性定义。<br>Tag 组件的 fill 应该改为 preset。<br>Loader 组件的 fill 应该改为 fullSize |
| color | 颜色 | - | 用于设置文本颜色<br>用于设置组件的主色，如 tag 的颜色 | - |
| bordered | 是否带有边框 | - | - | - |
| fullSize | 元素的大小是否充满父元素 | boolean | 用于表示一个元素的宽高是否撑满父元素的宽高 | - |
| block（废弃） | 表现形式是否为块级元素 | - | 使元素表现得像块级元素<br>宽度占满 100%<br>display: inline-block / block | block 侧重于将元素转换为块元素<br><br>用作属性时，可以用 fullWidth 代替：<br>Button 组件<br>Segment 组件（antd）<br>用作类型<br>Input、InputTextarea，应该移除，只保留全边框类型<br>RadioGroup 组件 type 应该改为 default \| button |
| fullWidth / fullHeight | 是否占满宽度、高度 | boolean | - | - |
| wrap | 布局或文本是否换行 | boolean | 当用在布局组件时，表示布局层面的换行，即元素排列是否换行。如 Group 组件。<br>当用在文本相关组件时，表示的是文本是否换行。如 Description 组件 | 当 wrap 在组件中无法直接区分是布局换行，还是文本换行时，需要采用更具体的名称加以区分 |
| textWrap | 文本是否换行 | boolean | 当 wrap 不足以说明是文本换行时（因为它也可以代表是布局换行），此时应该使用 textWrap 来表示文本换行 | 只有在 wrap 无法表达是文本换行方式的时候才会使用 |
| lineWrap | 每一行文本是否换行 | boolean | lineWrap 通常指的是每一行内部的换行行为，而textWrap 指的是整个文本的换行行为 | lineWrap 通常用在文本编辑器或者代码编辑器当中。<br>如 Code 组件 |
| align | 对齐方式 | 布局：top \| center \| bottom<br>文本对齐：left \| center \| right | 当用在布局组件时，表示垂直布局的对齐方式。如 Group 组件。<br>当用在文本相关组件时，表示水平文本的对齐方式。如 Description 的 labelAlign 属性 | 如果 align 无法区分是布局还是文本时，应采用具体的名称加以区分 |
| textAlign | 水平文本的对齐方式 | - | - | 只有在 align 无法表达是文本对齐方式的时候才会使用 |
| ellipsis（单独考虑） | 文本省略 | boolean \| number | - | singleLine 只表示了单行显示，但没表示是省略还是截断，所以采取 ellipsis + singleLine 更合适一些？ |
| zIndex | 层级 | 组件内部节点层级通常以 1/2/3/.. 来设置。<br>组件本身层级：<br>$qtc-zindex-mask: 1000 !default;<br>$qtc-zindex-dialog: 1010 !default; // drawer, loader<br>$qtc-zindex-modal: 1020 !default; // modal<br>$qtc-zindex-popover: 1030 !default; //popover<br>$qtc-zindex-tooltip: 1040 !default; // tooltip, dropdown<br>$qtc-zindex-notification: 1050 !default; // notification<br>$qtc-zindex-message: 1050 !default; // message | 弹窗类组件应都提供 zIndex 属性 | - |

### 问题

#### 何时使用 style？何时将 css 抽出来作为具体的属性，如 width / height？

通常来讲可以通过 className 来对组件进行样式覆盖，所以大部分情况下不需要提供 style。但是存在几种比较特殊的情况：

1. 内部组件不容易通过 className 进行覆盖。比如一些 panel 等节点，可能挂在 body 上，或者是嵌套层级较深，用 className 覆盖比较麻烦。
   - 这种情况可以提供一些具体的 style，比如 panelStyle。

2. 外部会对该组件动态设置一些样式，比如外部希望动态设置 width 宽度、indent 缩进等，此时 className 不大适用。
   - 这种情况应该考虑将对应的样式提取出来当做一个组件属性供外部使用。比如设置 width / indent 属性。

3. style 应专注于样式的设置，而非将里面的属性当做 api，从 style 里取值来做计算。比如当 width / height 作为组件里比较关键的部分时，应当单独拆出来作为 api 属性，否则在 style 里仅做样式设置的作用。

## 状态

### 规则

#### 名称

- 名称均使用形容词来表示。
- 如果表示的是组件内部某个元素的状态，应以 element + status 表示，如 iconDisabled： boolean。
- 如果需要动态计算内部元素的状态，同样以 element + status 形式表示，如 iconDisabled: (node) => boolean。

注意：

- 形容词的结尾不是都以 ed 结尾，需要根据实际的英文含义来定。如 "是否激活" 使用 active 而非 actived。
- 形容词不需要加 is 等前缀开头。

#### 取值

状态的取值均为 true \| false，默认值为 undefined。可根据组件的实际需要更改默认值，建议非必要情况下均为 false。

### 状态名称

| 名称 | 含义 | 使用场景 | 备注 |
|------|------|----------|------|
| selected | 是否选中 | 表明元素已被选取的内容，强调用户的选择 | 比如 selectedKeys 强调的是被选择的 keys<br>选中的内容一般会用于后续的操作，如选中了 keys，会根据这些 keys 进行删除更新等 |
| disabled | 是否禁用 | - | - |
| checked | 是否被勾选 | 主要针对于 checkbox / radio 的勾选 | - |
| indeterminate | 是否部分选中 | 针对于 checkbox 勾选 | - |
| active | 是否激活 | 表明元素正处于使用中或是当前操作的一部分，强调当前的交互或焦点 | 比如 activeKeys 强调的是这些 Key 被激活了，通常会伴随一些激活后的其他显示 |
| hover | 是否有鼠标悬浮 | - | - |
| visible | 是否可见 | 弹出层均以 visible 属性控制是否可见 | - |
| readonly | 是否只读 | - | - |
| loading | 是否正在加载 | - | - |
| editing | 是否正在编辑 | - | - |
| collapsed | 是否收起 | - | - |
| expanded | 是否展开 | - | - |

### 问题

#### 何时使用 active，何时使用 selected？

- selected 主要强调某一个元素自身被选中，如下拉选项中某项被选择。
- active 不仅用于表示用户的选择，还可以用于表示元素正在被操作或处于聚焦状态。
  - 比如 Tabs 、Collapse，当某一项被激活时，相应的内容也会做相应的操作。
  - 比如 Cascader 组件，它被选中的 key 应叫做 selectedKeys，但是级联组件一层一层展开的路径应该叫做 activePaths。两者侧重点不同。

## 功能

### 规则

#### 名称

组件的某种能力以 propName + able 的形式进行命名，如 expandable、selectable。部分特殊单词除外，如 collapsible。

allow + propName 的形式与 propName + able 的形式意思非常相近，侧重点稍有不同，目前统一使用 propName + able 的形式。比如 allowClear 改为 clearable。

#### 取值

- 取值为 true \| false，默认为 undefined。
- 取值 boolean \| object （待定）
  - 当某一个功能需要传递参数时，此时该属性可以用对象的形式传递参数，用于收敛参数。比如 selectable: boolean \| { selectedKeys: [], ... }

### 功能名称

| 名称 | 含义 |
|------|------|
| editable | 可编辑 |
| selectable | 可选择 |
| expandable | 可展开 |
| collapsible | 可收起 |
| hoverable | 鼠标移过时可浮起 |
| draggable | 可拖拽 |
| sortable | 可排序 |
| resizable | 可拉伸 |
| closable | 可关闭 |
| copyable | 可复制 |
| clearable | 可清除 |
| filterable | 可搜索过滤 |
| scrollable | 可滚动 |

### 问题

#### 使用 clearable 还是 allowClear 还是 showClear ?

- clearable 更侧重于描述组件的一种能力或特性，它传达的是"此组件具备清除能力"。为了在形式上的统一，推荐都采用这种方式进行命名
- allowClear 更具有指令性质，暗示着这是一个权限或允许的设置，传达的是"此组件允许清除操作"。这种命名方式更强调了功能的允许或禁止，给人一种开关的感觉。
- showXxx 只是单纯的控制某个节点的显示与隐藏，在这里用不是很合适。这里一是需要强调清除的能力，二是清除按钮也并非常显状态。

## 事件

### 规则

#### 名称

事件回调均以 before/on/after + 节点 + 事件名 的形式命名，如 onClick / onHeaderClick。

注意：

- 如果触发的事件是组件内部某个独立子元素触发，为避免歧义，应加上该节点名称，如 onOverlayClick。
- 建议采用 before/after 的形式来定义事件，而不是使用过去时，如 onClosed，应为 afterClose。

#### 取值

需要注意何时将事件对象 e 传递给外部：

对于原生事件：

- 在没有做其他处理的情况下，应将事件对象作为第一个参数传递给外部。如 onClick(e) / onScroll(e) 等。
- 在内部做了处理的情况下，不需要再将事件对象传递给外部。比如 onDrop(startIndex, endIndex) 已经是处理完后的内容了，原则上已经是不需要关心事件对象。

对于非原生事件：

- 这类事件，一般都有明确的目的，比如对数据进行处理，此时不需要将事件对象传递给外部。如 onChange / onSelect 等。
- 有些事件可能为了语义化，相当于是对原生事件进行了重命名，比如 onClear、onClose，此时应该将事件对象传给外部。

总结：

- 如果事件回调有处理数据等相关内容，并传出的话，不需要传递事件对象给外部。
- 否则的话，通常会将事件对象作为第一个参数传出。

### 事件名称

| 名称 | 含义 | 使用场景 | 备注 |
|------|------|----------|------|
| onChange | 当值产生变化时触发，回调第一个参数应与 value 值对应 | 通常来讲，所有表单相关的组件应都有 onChange 事件，用来表示表单组件的值的变化 | onChange 只有在值发生变化时才触发，值不发生变化时不会触发 |
| onSelect | 当选中某值时触发，回调第一个参数应与 value 值对应 | - | 区别与onChange，即使值不发生变化，也会触发该函数回调 |
| onDeselect | 当取消选中时触发 | - | - |
| onClear | 当内容被清空时触发 | - | - |
| onClose | 当弹窗关闭时触发 | - | - |
| onCancel | 取消事件回调 | - | - |
| onConfirm | 确认事件回调 | 确认操作回调 | onOk/onSave 统一使用 onConfirm 代替 |
| onExpand/onCollapse | 展开/收起的回调 | - | - |
| onPressEnter | 回车键的回调 | - | - |

### 问题

#### 何时使用 onChange，何时使用 onSelect？

- onChange 表示数据发生改变的时候产生的回调，这里的数据应该是有效值，而非中间值，与 value 对应。
- onSelect 表述数据某一项被选中时产生的回调，即使选中的值没有发生变化也会触发回调。
- 通常来讲 onChange / onSelect 抛出的值均为该组件的最终取值。
  - 如 DatePicker，onChange/onSelect 不关心中间的变化过程，而只在乎用户确认的值。但是其内部组件比如 DatePickerPanel，其 onChange/onSelect 应只关心 panel 自身组件应当抛出的值，而不应该在意外部 DatePicker 的 change / select 与否。

#### onOk / onConfirm / onSave ?

- onSave 指保存操作，属于比较主观的操纵，通常组件内部不应该存在这类具体含义的操作，应使用 onOk/onConfirm 代替。
- onOk / onConfirm 从含义上来讲比较接近，统一规范使用其中一种即可，组件库里推荐采用 onConfirm。

## 实例方法

### 规则

名称可以通过 get/is/has 来进行命名，如 getValue()、setValue()、isFocused()

### 外部实例方法参考名称

| 名称 | 含义 |
|------|------|
| blur() | 失焦 |
| focus() | 聚焦 |
| validate() | 校验 |
| reset() | 重置 |
| scrollTo() | 滚动 |
| getXxx() | 获取 xxx |
| setXxx() | 设置 xxx |
| isXxx(): boolean | 判断 xxx 是否成立 |
| hasXxx(): boolean | 判断 xxx 是否存在 |

### 注意

- 当函数是作为组件属性 API 时，不需要加 is 前缀，比如 dateDisabled: (date) => boolean。
- 当做属性时，通常也不会加 get 前缀，比如 rowKey: () => React.Key，而不是 getRowKey。

## 静态方法

### 静态方法规则

静态方法只用于弹窗场景，主要用于简化 visible 控制的操作。

### 静态方法名称

| 名称 | 含义 |
|------|------|
| config() | 设置全局配置 |
| open() | 打开 |
| update() | 更新(自己控制) |
| close() | 关闭 |
| destroy() | 销毁 |
| destroyAll() | 销毁所有 |
| success() | 成功提示 |
| error() | 错误提示 |
| warning() | 警告提示 |
| info() | 信息提示 |
| confirm() | 确认 |

### 问题

1. Modal.confirm / Drawer.open 返回的值最好是实例而非 close 方法，这样可以通过实例做一些其他的操作，如 update / destroy

2. 需要区分静态方法的挂载方式，有的是小写有的是大写，比如：
   - message.success/warning/...
   - Drawer.open/close/...
   实际上 Notification 和 Message 并不是两个 React 组件，与 Drawer/Modal 有区别。

## 通用名称

| 名称 | 含义 | 取值 | 备注 |
|------|------|------|------|
| children | 子节点 | - | 表示展示区域内容<br>表示选项，如 Select.Option |
| name | 唯一标识符 | - | - |
| multiple | 是否开启多选 | boolean | - |
| virtual | 是否开启虚拟滚动 | boolean | - |
| controls | 是否支持用控制器切换数字 | boolean | 特殊 |
| status | 状态 | finished \| waiting \| processing<br>success \| error \| warning | done 不仅代表完成了，还暗示达到了既定的标准或质量 |
| count | 数字 | - | - |
| offset | 偏移量 | [x, y]: [string, string] | - |
| animate | 是否有动画 | - | - |
| animation | 动画名称 | - | - |
| column | 列数 | - | - |
| span | 所占的列数 | - | - |

## 通用规则

### 属性命名

1. 表示是否显示某节点时，使用 showXxx 命名，如 showHeader、showSearch。
   - 区别于 allowXxx。比如 showClear 强调的是节点的显示与隐藏，而 allowClear 是指允许该组件有清除功能，而不是单纯的显示清除图标。

2. 表示某行为"自由、自动"的时候，使用 autoXxx 命名，如 autoFocus、autoComplete、autoClear、autoSize。

3. 表示面板的挂载节点时，统一命名为 getPopupContainer: (node: HtmlElement) => HtmlElement。
   - 现在是使用 container / getPopupContainer 两者，t-design 里用的是 attach 来命名的。

4. 表示在某个时间点触发某行为时均以 行为 + before/on/after + 节点 + 事件名 形式命名，如 destroyOnClose、floatOnFocus。

5. 表示遍历数组，对每一项进行的处理时，采用 每一项的名称 + 状态 的形式进行命名。
   - 比如，过滤数据时，组件内部会遍历每一项，然后将过滤的判断条件当做 props 由外部传入，此时应该采用 optionFiltered 命名。以下是一些命名的对比：
     - filterOption：强调的是过滤 option 的操作，但是并没有清晰地指出这个属性是干嘛的。而且 filter 操作一般是针对数组进行过滤的。
     - optionFilter：强调的是 option 的过滤器，能较好地说明这是一个 option 的过滤器。
     - optionFiltered：强调的是 option 是否被过滤（加上 is 能更好理解其意思，如 isOptionFiltered，但是组件属性一般不加 is）。
   - 由于其他地方也存在类似的情况，综合考虑，采用 item + 状态的形式进行命名。
     - optionFiltered
     - dateDisabled
     - nodeDisabled

6. 当对属性进行收敛时，可能会遇到需要对该功能开关进行控制的情况。比如 selectable，收敛成一个对象后，还需要控制是否开启"可选择"的功能，此时命名规则如下：
   - 如果代表的是一种能力，那么使用 + able 的形式，如 selectable: boolean \| object
   - 如果代表的是属性的透传，那么使用 + props 的形式，如 paginationProps: boolean \| object

### 属性取值

1. 当属性取值为数组形式时，属性名称应以复数命名，如 items: []。
   - 注意：只有 value/defaultValue 除外，它们始终使用单数形式命名，因为 value 代表的是组件的唯一值。

2. 当属性取值为函数形式时，API 名称的侧重点应该与函数的返回值保持一致。
   - 比如 disabledDates 方法的返回值应该是被禁用的日期，而 dateDisabled 的返回值应该是判断日期是否被禁用。

3. 避免采用数组的形式表示节点，如 [prevIcon, nextIcon]。数组表示节点会让人比较难以理解每一项的含义，可以采用以下两种方式代替：
   - 当节点只有两个时，可以拆分成两个属性控制：

     ```typescript
     prevIcon: ReactNode;
     nextIcon: ReactNode；
     ```

   - 当节点类型超过两个时，可以采用对象形式或函数形式表示
     - 函数形式：(position) => ReactNode，一般用于节点需要动态生成的情况
     - 对象形式：icons: { prev: xxx, next: xxx }，一般用于节点已经确定的情况

### API 组合

组件 Props 类型继承时，应根据继承的组件来选择是 Pick 还是 Omit。

为什么会有这个区别？

- Omit 会将剩余的属性都继承下来。如果原始组件增加属性会导致继承该组件的组件都增加这个属性，需要考虑手动 Omit 掉，心智负担较大。
- 而 Pick 只取对应的属性，不会受后续新增的属性影响。

原则：

1. 目标属性数量：通常来讲，目标数量较少时采用 Pick，目标数量较多且只需排除少量属性时采用 Omit。
2. 未来维护问题：类型继承时，需要考虑原型类型可能的未来变化。如果原始类型可能添加新属性，且这些属性默认应包含在新类型中，使用 Omit 可以避免未来的手动更新。反之，如果原始类型变化不想影响到继承的类型，应采用 Pick。
   - 比如， Select 继承 SelectBasePanel 的时候，由于 BasePanel 是 panel 通用属性，且后续属性的增加通常会加到 Select 中，此时采用 Omit 问题不大。
   - 但是在 DatePicker 组件中，继承 DatePickerPanel 的时候，由于 panel 处理后续可能会增加一些内部属性处理逻辑以及一些属性的定义和 DatePicker 并不是相同的，采用 Omit

### 组件内部的多个属性应该收敛成一个对象属性放到组件上？还是应该展开放到组件上？

原则：

1. 一种是针对内部组件属性透传的，都应该以 xxxProps 的形式，将参数透传到内部组件上。如 triggerProps 透传到 trigger 这个内部组件上。

2. 另一种是针对组件的功能的，此时主要考虑属性的复杂性和该功能独立性：
   - 对于比较独立的功能，且属性较多时（通常为 3 个及 3 个以上），应考虑将属性收敛起来。
     - Table 里支持 select / expand 的功能，但是每个功能都比较复杂，且逻辑互不关联，此时应该使用将各个功能收敛成对象形式
   - 对于属性较少的属性（通常为3个以下），应考虑该属性与当前组件的关联性，以及该属性的使用频率。
     - 比如 Description 组件的 labelWidth/labelAlign/labelStyle 中 labelWidth/labelAlign 使用频率较高，可以展开，但是如果需要 labelStyle 的话，最好是将 width/align 也通过 style 来设置。

3. 当组件的数据或配置选项比较复杂时，应考虑采用子组件的形式来设置选项，增加代码可读性。
   - 比如 Table.Column、Description.Item 等相较于 any[] 的配置形式更直观。

## 参考

- <https://github.com/ant-design/ant-design/wiki/API-Naming-rules>
- <https://github.com/ant-design/ant-design/issues/16048>
- <https://github.com/Tencent/tdesign/wiki/component-api-guide>
