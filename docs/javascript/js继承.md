# js 继承

## 原型链继承

```javascript
function Parent() {}
function Child() {}

Child.prototype = new Parent()
```

:::tip 缺点
1. `Parent`实例包含`Parent`构造函数添加的属性，这些属性会被`Child`继承共享。
2. 没有办法在不影响`Child`实例的情况下，给`Parent`构造函数传递参数。
:::

## 借用构造函数

```javascript
function Parent(name) {
	this.name = name
}

function Child() {
	Parent.call(this, 'Silence')
}
```

:::tip 缺点
方法都在构造函数里定义，无法复用。
:::

## 组合继承

```javascript
function Parent(name) {
	this.name = name
}

function Child(name) {
	Parent.call(this, name)
}

Child.prototype = new Parent()
```

结合了`原型继承`和`构造函数继承`的优点，通过原型共享分享，通过构造函数自定义属性等。

:::tip 缺点
每次都会调用两次`Parent`构造函数，一次是在`Child`内部，一次是创建`Child`原型时。
:::

## 原型式继承

```javascript
// 传入一个对象
function object(o) {
	function F() {}
  F.prototype = o
  // 返回可以访问这个对象属性的实例
  return new F()
}
```

`Object.create()`方法规范了原型式继承，接收两个参数：一个用作新对象原型的对象，一个为新对象定义额外属性的对象（可选）。

## 寄生式继承

```javascript
function factory(o) {
	// 使用原型式继承
  const clone = object(o)
  // 添加额外属性方法
  clone.xxx = 'xxx'
  return clone
} 
```

## 寄生组合式继承

```javascript
function inheritPrototype(Child, Parent) {
  // 创建一个对象，原型指向 Parent.protoype
	const prototype = object(Parent.prototype)
  // 更改 constructor / prototype 指向
  prototype.constructor = Child
  Child.prototype = prototype
}
```

寄生组合式继承是引用类型最理想的继承方式。