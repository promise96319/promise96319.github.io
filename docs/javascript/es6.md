# es6

- [https://es6.ruanyifeng.com/#README](https://es6.ruanyifeng.com/#README)

## 怎么查看function源码？
通过 `toSource()`方法：
- 对于内置的方法，返回 native code 字符串。
  chrome的js引擎是c++写的, Function是JS中基础组件, 其中的方法应该都是c++实现的, 所以打印时直接告诉这是native code。
  ```javascript
  function Function() {
    [native code]
  }
  ```
- 对于自定义函数，返回该函数的js源码


《ECMAScript 6 入门》

简介

ES6支持程度

- node支持度高
      $ node --v8-options | grep harmony
- 浏览器检查
      http://ruanyf.github.io/es-checker/



Babel转码器

- Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行 
  

let和const

let命令

for循环计数器

-     var a = [];
      for (let i = 0; i < 10; i++) {
        a[i] = function () {
          console.log(i);
        };
      }
      a[6](); // 6
- for特性
  - let使得每一轮的循环变量都是重新声明的，那它怎么知道上一轮循环的值？
    - 这是因为JavaScript引擎内部会记住上一轮循环的值
  - 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
        for (let i = 0; i < 3; i++) {
          let i = 'abc'
          console.log(i)
        }
        //abc
        //abc
        //abc

不存在变量提升

        console.log(bar); // 报错ReferenceError
        let bar = 2;          

暂时性死区

- 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。 
      if (true) {
        // TDZ开始
        tmp = 'abc'; // ReferenceError
        console.log(tmp); // ReferenceError
      
        let tmp; // TDZ结束
        console.log(tmp); // undefined
      
        tmp = 123;
        console.log(tmp); // 123
      }
- ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。 
  - 因此，typeof不再是一个百分之百安全的操作
        typeof x; // ReferenceError
        let x;
        typeof undeclared_variable // "undefined"
- 比较隐蔽的‘死区’
      var y = 1;   //或者let y = 1;
      function bar(x = y, y = 2) {
        return [x, y];
      }
      
      bar(); // 报错   ---y未被定义
- 时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。 
      // 不报错
      var x = x;
      
      // 报错
      let x = x;
      // ReferenceError: x is not defined

不允许重复声明

- let不允许在相同作用域内重新声明同一个变量
      var a = 1
      let a = 1 //报错
- 不能再函数内部重新声明参数

块级作用域

作用

- 防止内层变量(循环语句内的覆盖外层变量
- 防止用来计数的循环变量泄露为全局变量

特点

- 外部作用域无法读取内层作用域的变量
- 内部作用有可以定义外层作用域的同名变量（但实质上不是同一个变量）
- 
- 使得立即执行函数表达式（IIFE） 不再必要了
- ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。 
          function f1() {
            let a = 1
            if (true) {
              let a = 2
              console.log(a) //2
            }
            console.log(a); //1
          }
  注意：使用以下方法在控制台测试的时候，第一次会得到正确结果，第二次如果还在控制台中下面测试的话，会出现报错。因为相当于在全局里定义了两次a ，所以做好不要在控制台里输入
          const a = 1
          if (true) {
            const a = 3
            console.log(a);  //3
          }
          console.log(a)  //1

const 命令

基本用法

- const声明一个只读的常量。一旦声明，常量的值就不能改变。 
- 只声明不赋值，会报错
- 只在声明的块级作用域内生效
- 声明不能提升，存在暂时性死区
- 不可重复声明

本质

- const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。 
- 因此当将一个对象声明为常量时必须小心
      const a = [];
      a.push('Hello'); // 可执行
      a.length = 0;    // 可执行
      a = ['Dave'];    // 报错
  

顶层对象的属性

- 为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性 
- let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性 
      let b = 1;
      window.b // undefined

global对象

- 全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。
- 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
- 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全政策），那么eval、new Function这些方法都可能无法使用。



变量的解构赋值

数组的解构赋值

基本用法

- ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构 
- 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。 
       //模式匹配完全解构
      let [foo, [[bar], baz]] = [1, [[2], 3]]; 
      foo // 1
      bar // 2
      baz // 3
      
      //解构不成功，变量的值就等于undefined
      let [x, y, ...z] = ['a'];  
      x // "a"
      y // undefined
      z // []
      
       //不完全解构，可以成功
      let [a, [b], d] = [1, [2, 3], 4];  
      a // 1
      b // 2
      d // 4
      
- 解构赋值允许指定默认值
  - ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效 ，而null不严格等于undefined，因此不会生效
      let [x, y = 'b'] = ['a', undefined];  // x = 'a', y = 'b'
  - 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。 
        function f() {
          console.log('2');
        }
        
        let [x = f()] = [1];

对象的解构赋值

- 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。 
- 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。 
      let { foo: baz } = { foo: "aaa", bar: "bbb" };
      baz // "aaa"
      foo // error: foo is not defined
- 如果解构失败，变量的值等于undefine 
      let {foo} = {bar: 'baz'};
      foo // undefined
- 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错 
      // 报错-----foo这时为undefined，再取子属性就会报错
      let {foo: {bar}} = {baz: 'baz'}
- 注意大括号不能写在首行，不然js引擎会理解为一个代码块，从而发生语法错误
      // 错误的写法
      let x;
      {x} = {x: 1};
      // SyntaxError: syntax error
      
      // 正确的写法
      let x;
      ({x} = {x: 1});
- 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构 
      let arr = [1, 2, 3];
      let {0 : first, [arr.length - 1] : last} = arr;
      first // 1
      last // 3

字符串的解构赋值

- 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。 
      const [a, b, c, d, e] = 'hello';
      a // "h"
      b // "e"
      c // "l"
      d // "l"
      e // "o"
- 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。 
      let {length : len} = 'hello';
      len // 5

数值和布尔值的解构赋值

- 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。 
- 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。 

函数参数的解构赋值

- -     //函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。
        //如果解构失败，x和y等于默认值。
        function move({x = 0, y = 0} = {}) { 
          return [x, y];
        }
        move({x: 3, y: 8}); // [3, 8]
        move({x: 3}); // [3, 0]
        move({}); // [0, 0]
        move(); // [0, 0]
        
        
        //为函数move的参数指定默认值，而不是为变量x和y指定默认值
        function move({x, y} = { x: 0, y: 0 }) {
          return [x, y];
        }
        move({x: 3, y: 8}); // [3, 8]
        move({x: 3}); // [3, undefined]
        move({}); // [undefined, undefined]
        move(); // [0, 0]

圆括号问题

- 三种不能使用圆括号的情形
  - 变量声明语句  //有let
  - 函数参数  //也属于变量声明
  - 赋值语句的模式----模式放在括号中了
- 可以使用圆括号的情形，赋值语句的非模式部分

用途

- 交换变量的值
- 从函数返回多个值
- 函数参数的定义
- 提取json数据
- 函数参数的默认值
- 遍历Map结构
- 输入模块的指定方法

字符串的扩展

codePointAt() / String.fromCodePoint()

字符串的遍历器接口

- 字符串可以被for...of循环遍历
      for (let codePoint of 'foo') {
        console.log(codePoint)
      }
      // "f"
      // "o"
      // "o

at()

- 可以识别Unicode编号大于0xFFFF的字符，返回正确的字符（charAt()不行）

normalize()

includes(), startsWith(), endsWith()

    let s = 'Hello world!';
    
    s.startsWith('Hello') // true    
    s.endsWith('!') // true
    s.includes('o') // true     是否找到了参数字符串

    let s = 'Hello world!';
    //第二个参数，表示开始搜索的位置
    s.startsWith('world', 6) // true
    s.endsWith('Hello', 5) // true   
    s.includes('Hello', 6) // false

endsWith的行为与其他两个方法不同，它是针对前n个字符，而其它两个方法针对从第n个位置知道字符串结束

repeat()

    // 将原字符串重复n次并返回字符串
    'x'.repeat(3) // "xxx"
    
    // 小数则会取整
    'na'.repeat(2.9) // "nana"
    
    // 如果repeat的参数是负数或者Infinity，会报错
    'na'.repeat(Infinity)
    // RangeError
    'na'.repeat(-1)    //0 到 -1之间的小数等同于0
    // RangeError
    
    //参数NaN等同于 0。
    //如果repeat的参数是字符串，则会先转换成数字。

padStart(),padEnd()

- padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。 
- 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。 
- 如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。 
- 如果省略第二个参数，默认使用空格补全长度。 

模板字符串

- 模板字符串（template string）是增强版的字符串，用反引号（`）标识 
- 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。 
  - 如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。
- 模板字符串中嵌入变量，需要将变量名写在${}之中。 
  - 如果模板字符串中的变量没有声明，将报错 
- 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。 
  - 由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。 
- 模板字符串之中还能调用函数 
- 模板字符串还能嵌套 ，内层在变量的大括号中从而达到嵌套的目的
- 模板编译





正则的扩展

RegExp构造函数

允许RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符

返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。

y修饰符----叫做“粘连”（sticky）修饰符。

- y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始 
- 不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始 
- y修饰符的设计本意，就是让头部匹配的标志^在全局匹配中都有效。 
- 一个y修饰符对match方法，只能返回第一个匹配，必须与g修饰符联用，才能返回所有匹配。 
- ES6 的正则实例对象多了sticky属性，表示是否设置了y修饰符。 
      var r = /hello\d/y;
      r.sticky // true
      
      
      
      // ES5 的 source 属性
      // 返回正则表达式的正文
      /abc/ig.source
      // "abc"
      
      // ES6 的 flags 属性
      // 返回正则表达式的修饰符
      /abc/ig.flags
      // 'gi's 修饰符：dotAll 模式

s修饰符：dotAll模式

- 在这个模式下，点可以匹配任何字符。包括/n
- dotAll属性用来判断正则模式是否用了s修饰符

后行断言

先行断言---之前只支持先行断言

- ”先行断言“指的是，x只有在y前面才匹配，必须写成/x(?=y)/    
- ”先行否定断言“指的是，x只有不在y前面才匹配，必须写成/x(?!y)/    
- 上两者均不返回括号里的那个判断

后行断言

- 后行断言，x只有在y后面才匹配，必须写成/(?<=y)x/ 
- ”后行否定断言“ ，x只有不在y后面才匹配，必须写成/(?<!y)x/ 
- 上两者均不返回括号里的那个判断

后行断言的执行顺序

- “后行断言”的实现，需要先匹配/(?<=y)x/的x，然后再回到左边，匹配y的部分。这种“先右后左”的执行顺序，与所有其他正则操作相反，导致了一些不符合预期的行为。 
      /(?<=(\d+)(\d+))$/.exec('1053') // ["", "1", "053"]
      /^(\d+)(\d+)$/.exec('1053') // ["1053", "105", "3"]
      
- 上面代码中，需要捕捉两个组匹配。没有“后行断言”时，第一个括号是贪婪模式，第二个括号只能捕获一个字符，所以结果是105和3。而“后行断言”时，由于执行顺序是从右到左，第二个括号是贪婪模式，第一个括号只能捕获一个字符，所以结果是1和053。 

具名组匹配

简介

- 允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用。 
- “具名组匹配”在圆括号内部，模式的头部添加“问号 + 尖括号 + 组名” 
      const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

解构赋值和替换

- 有了具名组匹配以后，可以使用解构赋值直接从匹配结果上为变量赋值。 
      let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
      one  // foo
      two  // bar
- 字符串替换时，使用$<组名>引用具名组 
      let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
      
      '2015-01-02'.replace(re, '$<day>/$<month>/$<year>')  //第二个参数为字符串
      // '02/01/2015'
      
      
      var matches = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u.exec('2018-12-09')
      matches  //是一个数组，前4项即为匹配的项，后面还有一些其他的项
      matches.groups //  {day:"09",month:"12",year:"2018"}
- 引用：
  - 如果要在正则表达式内部引用某个“具名组匹配”，可以使用\k<组名>的写法。 
  - 数字引用（\1）依然有效。 

String.prototype.matchAll

- String.prototype.matchAll方法，可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组。 
      const string = 'test1test2test3';
      
      // g 修饰符加不加都可以
      const regex = /t(e)(st(\d?))/g;
      
      for (const match of string.matchAll(regex)) {
        console.log(match);
      }
      // ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"]
      // ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"]
      // ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
- 遍历器转化成数组
      // 转为数组方法一
      [...string.matchAll(regex)]
      
      // 转为数组方法二
      Array.from(string.matchAll(regex));

数值的扩展

二进制和八进制

- 从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6 进一步明确，要使用前缀0o表示。 

Number.isFinite()和Number.isNaN()

- Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。 
- Number.isNaN()用来检查一个值是否为NaN。
- 与传统的区别
  - 传统方法先调用Number()将非数值的值转为数值，再进行判断 
  - 这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false 

Number.parseInt()和Number.parseFloat()

- ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。 
- 逐步减少全局性方法，使得语言逐步模块化。 

Math对象的扩展

Math.trunc()

- 用于去除一个数的小数部分，返回整数部分
- 对于非数值，先用Number方法将其转为数值
- 对于空值或者无法取整数的值，返回NaN

指数运算符

- 2 ** 3  //8            2 **4 //16

函数的扩展

函数参数的默认值

函数参数的默认值

- 阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档； 
- 有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。 
- 参数变量是默认声明的，所以不能用let或const再次声明。 
- 使用参数默认值时，函数不能有同名参数。 
      // 报错,在使用默认值的时候，有2个x参数，会报错
      function foo(x, x, y = 1) {
        // ...
      }  
- 参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。 
- 参数默认值的位置
  - 通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
- 函数的length属性
  - 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
        (function (a) {}).length // 1
        (function (a = 5) {}).length // 0
        (function (a, b, c = 5) {}).length // 2 
  - 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
        (function (a = 0, b, c) {}).length // 0
        (function (a, b = 1, c) {}).length // 1 
        
- 作用域
  - 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的 
        var x = 1;
        function foo(x, y = function() { x = 2; }) {
          var x = 3;
          y();
          console.log(x);
        }
        
        foo() // 3
        x // 1
        
        
    上面代码中，函数foo的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。函数foo内部又声明了一个内部变量x，该变量与第一个参数x由于不是同一个作用域，所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。
    如果将var x = 3的var去除，函数foo的内部变量x就指向第一个参数x，与匿名函数内部的x是一致的，所以最后输出的就是2，而外层的全局变量x依然不受影响
        var x = 1;
        function foo(x, y = function() { x = 2; }) {
          x = 3;
          y();
          console.log(x);
        }
        
        foo() // 2
        x // 1
        

rest参数

- ES6 引入 rest 参数（形式为...变量名）(扩展运算符)，用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
- 用 rest 参数，可以向该函数传入任意数目的参数。 
- 与arguments区别： 
  - arguments对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用Array.prototype.slice.call先将其转为数组 
  - rest 参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用
- 注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错 
- 函数的length属性，不包括 rest 参数。 
      (function(a, ...b) {}).length  // 1
      

严格模式

- 从 ES5 开始，函数内部可以设定为严格模式。   'use strict';
- ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。 
  - 这样规定的原因是，函数内部的严格模式，同时适用于函数体和函数参数。但是，函数执行的时候，先执行函数参数，然后再执行函数体。这样就有一个不合理的地方，只有从函数体之中，才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行。 
    - 解决方法：设定全局性的严格模式 
    - 解决方法：把函数包在一个无参数的立即执行函数里面。 

name属性

- 函数的name属性，返回该函数的函数名。 
- 如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名。 
  - 解决方法，可以给把变量的名字加给匿名函数
- Function构造函数返回的函数实例，name属性的值为anonymous（匿名）。 
- bind返回的函数，name属性值会加上bound前缀。 

箭头函数

-     var sum = (num1, num2) => num1 + num2;
      // 等同于
      var sum = function(num1, num2) {
        return num1 + num2;
      };
- 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。 
- 头函数的一个用处是简化回调函数 
- 注意点：
  - 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。 
  - 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。 
  - 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。 
  - 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。 
  - function------ this
  - this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数 
    - this对象的指向是可变的，但是在箭头函数中，this是固定的。 
    - 箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域 
    - 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。 

双冒号运算符

- 函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。 
- “函数绑定”（function bind）运算符，用来取代call、apply、bind调用。 
- 该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。 
- 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。
      let log = ::console.log;
      // 等同于
      var log = console.log.bind(console); 
- 如果双冒号运算符的运算结果，还是一个对象，就可以采用链式写法。 

尾调用优化

- 指某个函数的最后一步是调用另一个函数。
- return f(x)格式   其它格式均不是尾调用-----调用之后不能有赋值操作
- 尾调用不一定出现在函数尾部，只要是最后一步操作即可。 
      function f(x) {
        if (x > 0) {
          return m(x)
        }
        return n(x);
      }  //m,n都属于尾调用
      
- 栈帧介绍
- 如果函数g不是尾调用，函数f就需要保存内部变量m和n的值、g的调用位置等信息。但由于调用g之后，函数f就结束了，所以执行到最后一步，完全可以删除f(x)的调用帧，只保留g(3)的调用帧。
  这就叫做“尾调用优化”（Tail call optimization），即只保留内层函数的调用帧。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。
- 尾递归------函数调用自身，称为递归。如果尾调用自身，就称为尾递归。 
  - 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。 
  - 但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。 
  - S6 是如此，第一次明确规定，所有 ECMAScript 的实现，都必须部署“尾调用优化”。这就是说，ES6 中只要使用尾递归，就不会发生栈溢出，相对节省内存。 
  - 斐波那契数列
- 递归函数的改写
  - 函数式编程有一个概念，叫做柯里化（currying），意思是将多参数的函数转换成单参数的形式 
  - 方法一是在尾递归函数之外，再提供一个正常形式的函数。 
  - 方法二采用 ES6 的函数默认值。 
  - 递归本质上是一种循环操作。纯粹的函数式编程语言没有循环操作命令，所有的循环都用递归实现，这就是为什么尾递归对这些语言极其重要。 
- 严格模式
  - ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
    - func.arguments：返回调用时函数的参数。
    - func.caller：返回调用当前函数的那个函数。
    - 尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。 
- 尾递归优化的实现
  - 采用“循环”换掉“递归”。 
  - 蹦床函数（trampoline）可以将递归执行转为循环执行 

函数参数的尾逗号

- ES2017 允许函数的最后一个参数有尾逗号 



数组的扩展

扩展运算符

基本用法

- 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。 
- 由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。 
      // ES5 的写法
      Math.max.apply(null, [14, 3, 77])
      
      // ES6 的写法
      Math.max(...[14, 3, 77])
      
      // ES5的 写法
      var arr1 = [0, 1, 2];
      var arr2 = [3, 4, 5];
      Array.prototype.push.apply(arr1, arr2);
      
      // ES6 的写法
      let arr1 = [0, 1, 2];
      let arr2 = [3, 4, 5];
      arr1.push(...arr2);

运用

- 复制数组----------不是复制引用
      const a1 = [1, 2];
      // 写法一
      const a2 = [...a1];
      // 写法二
      const [...a2] = a1;
- 合并数组--------------都是浅拷贝
      const a1 = [{ foo: 1 }];
      const a2 = [{ bar: 2 }];
      
      const a3 = a1.concat(a2);
      const a4 = [...a1, ...a2];
      
      a3[0] === a1[0] // true
      a4[0] === a1[0] // true
- 与结构赋值结合
  - 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。 
        const [first, ...middle, last] = [1, 2, 3, 4, 5];
        // 报错
        
- 字符串
  - 扩展运算符还可以将字符串转为真正的数组。 
        [...'hello']
        // [ "h", "e", "l", "l", "o" ]
        
  - 上面写法有一个重要的好处，那就是能够正确识别四个字节的 Unicode 字符。 
- 实现了Iterator接口的对象
  - 任何Iterator接口的对象，都可以用扩展运算符转为真正的数组
- Map和Set结构，Generator函数
  - 扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。
  - 如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错 

Array.from()

- Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map） 
      let arrayLike = {
          '0': 'a',
          '1': 'b',
          '2': 'c',
          length: 3    //必须要有length属性，不然最终得到的结果均为[]
      };
      
      // ES5的写法
      var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
      
      // ES6的写法
      let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
- 常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的arguments对象 
- 所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。 
- Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。 
- 对于还没有部署该方法的浏览器，可以用Array.prototype.slice方法替代。 

Array.of()

- Array.of方法用于将一组值，转换为数组。 
- 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。 

数组实例的copyWithin()

- 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。 
      Array.prototype.copyWithin(target, start = 0, end = this.length)
      
  - target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
  - start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
  - end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

数组实例的find()和findIndex()

find()

- 用于找出第一个符合条件的数组成员 
- 它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员 
- 如果没有符合条件的成员，则返回undefined 

findIndex()

- findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1 
- 这两个函数都可以接受第二个参数，用来绑定回调函数的this对象（第一个参数为回调函数）
- 这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足。
      [NaN].indexOf(NaN)
      // -1
      
      [NaN].findIndex(y => Object.is(NaN, y))
      // 0

数组实例的fill()

- fill方法使用给定值，填充一个数组。 
- 可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。（在结束位置之前）
      ['a', 'b', 'c'].fill(7, 1, 2)
      // ['a', 7, 'c']    注意是在结束位置2之前！！
      
- 注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。 
      let arr = new Array(3).fill([]);
      arr[0].push(5);
      arr
      // [[5], [5], [5]]
      

数组实例的entries(),keys(),values()

- keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。 
      for (let [index, elem] of ['a', 'b'].entries()) {
        console.log(index, elem);
      }
      // 0 "a"
      // 1 "b"
      

数组实例的includes()

- includes方法返回一个布尔值，表示某个数组是否包含给定的值
- 该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度，则会重置为从0开始。 
- indexOf缺点
  - 一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观 
  - 它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判。 
- Map 结构的has方法，是用来查找键名的 
- Set 结构的has方法，是用来查找值的 

数组的空位

- 数组的空位指，数组的某一个位置没有任何值 
- **注意，空位不是undefined，一个位置的值等于undefined，依然是有值的。
- es5
  - forEach(), filter(), reduce(), every() 和some()都会跳过空位。
  - map()会跳过空位，但会保留这个值
  - join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
- ES6 则是明确将空位转为undefined。 



对象的扩展

属性的简洁表示法

ES6 允许直接写入变量和函数，作为对象的属性和方法

- 属性简写（属性名即为变量名）

    const foo = 'bar';
    const baz = {foo};
    baz // {foo: "bar"}
    
    // 等同于
    const baz = {foo: foo};

- 方法简写

    const o = {
      method() {
        return "Hello!";
      }
    };
    // 等同于
    const o = {
      method: function() {
        return "Hello!";
      }
    };

- 注意，简洁写法的属性名总是字符串，这会导致一些看上去比较奇怪的结果。 
      const obj = {
        class () {} //由于class是字符串，，所以不会因为它属于关键字，而导致语法解析报错
      };
      
      // 等同于
      
      var obj = {
        'class': function() {}
      };
      
- 如果某个方法的值是一个 Generator 函数，前面需要加上星号 

属性名表达式

- ES6 允许字面量定义对象时，用中括号包含（表达式）作为对象的属性名或者方法名，即把表达式放在方括号内。 
      let lastWord = 'last word';
      
      const a = {
        'first word': 'hello',
        [lastWord]: 'world'
      };
      
      a['first word'] // "hello"
      a[lastWord] // "world"
      a['last word'] // "world"
      
      let obj = {
        ['h' + 'ello']() {
          return 'hi';
        }
      };
      
      obj.hello() // hi
  - 属性名表达式与简洁表示法，不能同时使用，会报错。 
  - 属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object] 
  - 若有相同的属性名，则后面的属性名会覆盖前面的（前面的无效）

方法的name属性

- 方法的name属性返回函数名（即方法名） 
- 如果对象的方法使用了取值函数（getter）和存值函数（setter） ，返回值是方法名前加上get和set。 
- bind方法创造的函数，name属性返回bound加上原函数的名字 
- function构造函数创造的函数，name属性返回anonymous。 
- 如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。 

Object.is()

- Object.is()用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。 
  - 不同之处只有两个：一是+0不等于-0，二是NaN等于自身。 

Object.assign()

- Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target） 
- 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。 
- 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错 
- 数组，字符串，属性名为Symbol值，都可以拷贝，而其它的不能被拷贝进去
- 注意点
  - 浅拷贝
  - 同名属性的替换，后者覆盖前者
  - 数组的处理：把数组视为对象，索引即为属性名
  - 取值函数的处理：如果要赋值的是一个取值函数，那么将求值后再赋值

属性的可枚举性和遍历

- 对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为 
- Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。 
- 目前，有四个操作会忽略enumerable为false的属性。 
  - for...in循环：只遍历对象自身的和继承的可枚举的属性。
  - Object.keys()：返回对象自身的所有可枚举的属性的键名。
  - JSON.stringify()：只串行化对象自身的可枚举的属性。
  - Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性
- ES6 规定，所有 Class 的原型的方法都是不可枚举的。 
- 属性遍历的次序规则。
  - 首先遍历所有数值键，按照数值升序排列。
  - 其次遍历所有字符串键，按照加入时间升序排列。
  - 最后遍历所有 Symbol 键，按照加入时间升序排列

Object.getOwnPropertyDescriptors()

- ES2017 引入了Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象。 
- 目的：该方法的引入目的，主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题。 

__proto__属性，Object.setPrototypeOf(),Object.getPrototypeOf()

- 最好不要使用__proto__属性
- Object.create()（生成操作）代替。 
- Object.setPrototypeOf(object, prototype)方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身。它是 ES6 正式推荐的设置原型对象的方法。 
- Object.getPrototypeOf(object)用于读取一个对象的原型对象 
- 如果参数不是对象，会被自动转为对象 
- 如果参数是undefined或null，它们无法转为对象，所以会报错。 

super关键字

- ES6 新增了一个类似this的关键字super，指向当前对象的原型对象。 
- super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。 
- 目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。 
      const obj = {
        x: 'world',
        foo() {
          super.foo();
        }
      }
      

Object.keys()/values()/entries()

- Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名 
- Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。 
  - 属性名为数值的属性，是按照数值大小，从小到大遍历的， 
  - 如果Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组。 
  - 如果原对象的属性名是一个 Symbol 值，该属性会被忽略。 

对象的扩展运算符

- ES2018 将这个运算符(...)了对象。 



Symbol

概述

- ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值 ，以保证对象属性不会与其他属性名产生冲突 
- 它是 JavaScript 语言的第七种数据类型 
- Symbol 值通过Symbol函数生成 
- Symbol 值不能与其他类型的值进行运算，会报错。 
- 但是，Symbol 值可以显式转为字符串 ，Symbol 值也可以转为布尔值，但是不能转为数值。 
- 注意，Symbol 值作为对象属性名时，不能用点运算符。 
- Symbol 值作为属性名时，该属性还是公开属性，不是私有属性。 

实例：消除魔术字符串

- 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。 

属性名的遍历

- Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。 
- Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值 
- Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。 

Symbol.for(),Symbol.keyFor()

- Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被   登记   在   全局环境    中供搜索，后者不会。 Symbol.for('foo') === Symbol.for('foo');  //true
- Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。 
      let s1 = Symbol.for("foo");
      Symbol.keyFor(s1) // "foo"
      
      let s2 = Symbol("foo");
      Symbol.keyFor(s2) // undefined

实例：模块的Singleton模式

- Singleton 模式指的是调用一个类，任何时候返回的都是同一个实例。 

内置的Symbol值





Set 和 Map数据结构

Set

基本用法

- ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值 ， Set 结构不会添加重复的值 
- Set 结构没有键名，只有键值（或者说键名和键值是同一个值） 
- 可以接收数组作为参数（或者具有iterable接口的其它数据结构）  （返回的是一个对象）
- Set 本身是一个构造函数，用来生成 Set 数据结构。
- 数组去重
      [...new Set(array)]
- 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值 ,内部相当于有===的判断，但是有个例外就是NaN等于自身   ---两个对象总是不相等的。 

Set实例的属性和方法

- 属性
  - Set.prototype.constructor：构造函数，默认就是Set函数。
  - Set.prototype.size：返回Set实例的成员总数
- 操作方法
  - add(value)：添加某个值，返回 Set 结构本身。
  - delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
  - has(value)：返回一个布尔值，表示该值是否为Set的成员。
  - clear()：清除所有成员，没有返回值。
- 遍历方法
  - keys()：返回键名的遍历器
  - values()：返回键值的遍历器-----与上面方法完全一致，结果也一样 （为set结构的默认方法，可省略）
  - entries()：返回键值对的遍历器 --------返回的结果是键值和键名完全相同的单个单个的数组
  - forEach()：使用回调函数遍历每个成员----------无返回值
- 遍历的应用
  - 扩展运算符内部使用for...of循环，所以也可以用于Set结构
  - Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。 
        let a = new Set([1, 2, 3]);
        let b = new Set([4, 3, 2]);
        
        // 并集
        let union = new Set([...a, ...b]);
        // Set {1, 2, 3, 4}
        
        // 交集
        let intersect = new Set([...a].filter(x => b.has(x)));
        // set {2, 3}
        
        // 差集
        let difference = new Set([...a].filter(x => !b.has(x)));
        // Set {1}

WeakSet

- 与Set结构的区别
  - WeakSet的成员只能是对象，而不是其他类型的值
  - WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用 ：WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。 
        const a = [[1, 2], [3, 4]];
        const ws = new WeakSet(a);
        // WeakSet {[1, 2], [3, 4]}    是数组a的成员成为ws的成员，而不是a数组本身
        
  - WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
  - WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
  - WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
  - WeakSet 没有size属性，没有办法遍历它的成员。 
  - WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。 

Map

基本用法

- ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键 
- 如果对同一个键多次赋值，后面的值将覆盖前面的值。 
  - 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。 
- 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键 

实力属性和操作方法

- size属性返回Map结构的成员总数
- 操作方法
  - set(key, value)  设置键值对返回整个Map结构 （注意中间是逗号），因为左后返回的是map对象，所以可以采用链式写法
  - get(key)   读取键值，如果找不到返回undefined
  - has(key)
  - delete(key) 删除键，返回布尔值
  - clear()，无返回值
- 遍历方法-------------------Map 的遍历顺序就是插入顺序 
  - keys()：返回键名的遍历器。
  - values()：返回键值的遍历器。
  - entries()：返回所有成员的遍历器。-------------->为默认方法
  - forEach()：遍历 Map 的所有成员。
- Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。 

与其他数据结构的转换

- Map转换成数组----------->  扩展运算符
- 数组转Map ----------------->直接将数组传入Map构造函数-------new Map(array)
- Map转对象------------------> 如果键只有字符串可以直接转换、如果不是，则键名会被转成字符串
- 对象转Map-------------->遍历一遍直接转换
- Map转JSON ---------------->都是字符串的时候转为对象JSON，否则转为数组JSON

WeakMap

- 与Map的区别
  - WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名 
  - WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内 
    - 只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。 
- 回收机制
- 用途：WeakMap 应用的典型场合就是 DOM 节点作为键名 
- WeakMap 的另一个用处是部署私有属性。 



Proxy

概述

- Proxy（代理器） 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。 

- ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。 
      var proxy = new Proxy(target, handler);
- Proxy 支持的拦截操作 
  - get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
    - 第三个参数可选----->它总是指向原始的读操作所在的那个对象，一般情况下就是 Proxy 实例。 
    - get方法可以继承
    - 链式调用
          var pipe = (function () {
            return function (value) {
              var funcStack = [];
              var oproxy = new Proxy({} , {
                get : function (pipeObject, fnName) {
                  if (fnName === 'get') {
                    return funcStack.reduce(function (val, fn) {
                      return fn(val);  //用ruduce方法挨个调用数组中的函数
                    },value);
                  }
                  funcStack.push(window[fnName]);  //将之前调用的方法放到一个数组中
                  return oproxy;
                }
              });
          
              return oproxy;
            }
          }());
          
          var double = n => n * 2;
          var pow    = n => n * n;
          var reverseInt = n => n.toString().split("").reverse().join("") | 0;
          
          pipe(3).double.pow.reverseInt.get; // 63
    - 实现生成各种DOM节点的通用函数dom
          const dom = new Proxy({}, {
            get(target, property) {
              return function(attrs = {}, ...children) {
                const el = document.createElement(property);
                for (let prop of Object.keys(attrs)) {
                  el.setAttribute(prop, attrs[prop]);
                }
                for (let child of children) {
                  if (typeof child === 'string') {
                    child = document.createTextNode(child);
                  }
                  el.appendChild(child);
                }
                return el;
              }
            }
          });
          
          const el = dom.div({},
            'Hello, my name is ',
            dom.a({href: '//example.com'}, 'Mark'),
            '. I like:',
            dom.ul({},
              dom.li({}, 'The web'),
              dom.li({}, 'Food'),
              dom.li({}, '…actually that\'s it')
            )
          );
          
          document.body.appendChild(el);
  - set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
    - set方法的第四个参数receiver，指的是原始的操作行为所在的那个对象 
          const handler = {
            set: function(obj, prop, value, receiver) {
              obj[prop] = receiver;
            }
          };
          const proxy = new Proxy({}, handler);
          const myObj = {};
          Object.setPrototypeOf(myObj, proxy);
          
          myObj.foo = 'bar';
          myObj.foo === myObj // true
  - has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
    - has方法拦截的是HasProperty操作，而不是HasOwnProperty操作，即has方法不判断一个属性是对象自身的属性，还是继承的属性。 
    - 虽然for...in循环也用到了in运算符，但是has拦截对for...in循环不生效。 
  - deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
    - 如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。 
  - ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
    - 有三类属性会被ownKeys方法自动过滤，不会返回。 
      - 目标对象上不存在的属性
      - 属性名为 Symbol 值
      - 不可遍历（enumerable）的属性
  - getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
  - defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
  - preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
  - getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
  - isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
  - setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
  - apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
    - apply方法拦截函数的调用、call和apply操作。 
  - construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
    - construct方法返回的必须是一个对象，否则会报错 

Proxy.revocable()

- Proxy.revocable方法返回一个可取消的 Proxy 实例。 
- Proxy.revocable的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问。 

this问题

- 虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。 

实例：Web服务的客户端

- Proxy 对象可以拦截目标对象的任意属性，这使得它很合适用来写 Web 服务的客户端。 



Reflect

概述

- 设计目的
  - 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上 -------------->更加清晰
  - 修改某些Object方法的返回结果，让其变得更合理 
  - 让Object操作都变成函数行为 ---------->命令式变为函数行为
  - Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。------->也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。 

静态方法

- Reflect.apply(target, thisArg, args)
- Reflect.construct(target, args)
- Reflect.get(target, name, receiver)
  - Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。 
  - 如果第一个参数不是对象，Reflect.get方法会报错   
  - 如果name属性部署了读取函数（getter），则读取函数的this绑定receiver。 
- Reflect.set(target, name, value, receiver)
  - Reflect.set方法设置target对象的name属性等于value。 
  - 如果name属性设置了赋值函数，则赋值函数的this绑定receiver。 
  - 它返回一个布尔值，表示是否设置成功 
- Reflect.defineProperty(target, name, desc)
- Reflect.deleteProperty(target, name)
- Reflect.has(target, name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target, name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target, prototype)

观察者模式

- 观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行。
-     const queuedObservers = new Set();
      
      const observe = fn => queuedObservers.add(fn); //将观察者都放入一个目标当中
      const observable = obj => new Proxy(obj, {set});  //使用Proxy代理来拦截赋值操作，触发充当观察者的各个函数
      
      function set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver); //赋值操作
        queuedObservers.forEach(observer => observer());  // 触发各个函数执行
        return result;
      }



Promise对象

Promise的含义

- Promise 是异步编程的一种解决方案 
- 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果 
- 特点：
  - 对象的状态不受外界影响 
    - Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
    - 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。  
  - 一旦状态改变，就不会再变，任何时候都可以得到这个结果 
    - Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected 
    - 与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。 
- 缺点:
  - 无法取消Promise，一旦新建它就会立即执行，无法中途取消。 
  - 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部 
  - 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成） 

 基本用法

- ES6规定，Promise对象是一个构造函数，用来生成Promise实例
- Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
  -  resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去 
  - reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。 
- Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。 
  - then方法可以接受两个回调函数作为参数 
    - 第一个回调函数是Promise对象的状态变为resolved时调用 
    - 第二个回调函数是Promise对象的状态变为rejected时调用 
    - 两个函数都接受Promise对象传出的值作为参数 
  - Promise 新建后立即执行，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行 
  - Promise实例2里resolve(实例1)时，实例1的状态决定了实例2的状态，实例2自己的状态失效
  - 调用resolve或reject并不会终结 Promise 的参数函数的执行。 后面的语句仍然可以执行，但是这样做不是很好，因此最好加个return
  - 

 Promise.prototype.then()

- 作用是为 Promise 实例添加     状态改变时    的回调函数 
- then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。可以采用链式写法 
- 

 Promise.protype.catch()

 Promise.prototype.finally()

 Promise.all()

 Promise.race()

 Promise.resolve()

 Promise.reject()

 应用

Promise.try() 



