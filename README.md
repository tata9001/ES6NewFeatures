ES6NewFeatures
==============
Introduce the ES6's new Features

### 星级说明：★★★ 推荐使用 ★★ 有考虑地使用 ★ 慎重地使用 ☆ 不使用

##1.let:用法类似于var，用于声明变量。
### 推荐使用星级：★★★
#### 运行脚本：`node src/1let.js`    
#### 特性
* 块级作用域 
* 暂时性死区  
```javascript
function f1() {  
  let n = 5;  
  let m = 0;  
  if (true) {  
      console.log(n);  
      console.log(m);  
      let n = 10;  
 }  
  console.log(n);  
}  
```  
```javascript
function f2() {  
  var n = 5;  
  if (true) {  
    console.log(n);  
    var n = 10;  
  }  
  console.log(n);   
}  
```  
* 不存在变量提升  
```javascript  
console.log(foo);  
let foo = 2;  
console.log(foo);  
var foo = 2;  
```  
* 不允许重复声明  
```javascript  
function () {
  let a = 10;
  let a = 1;
}
```  
```javascript  
function () {
  var a = 10;
  var a = 1;
}
```

##2.const 特性基本与let一致，但其作用是声明常量，仅能在声明的时候赋值
### 推荐使用星级：★★★  
#### 运行脚本：`node src/2const.js`    

```javascript  
if (true) {
  const MAX = 5;
  MAX = 6;
  const MIN;
  MIN = 1;
}
console.log(MAX);
``` 
######注：ES6中规定，var命令和function命令声明的全局变量，依旧是全局对象的属性；let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。  
```javascript    
var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1
let b = 1;
window.b //
```  

##3.变量的解构赋值(Destructuring):按照一定模式，从数组和对象中提取值，对变量进行赋值    
### 推荐使用星级：★★
#### 注：在nodejs中查看in progress features     
`node --v8-options | grep "in progress"`
#### 运行脚本：`node --harmony_destructuring ./src/3destructuring.js`  
* 数组的解构赋值    
```javascript   
 let [x, y, ...z] = ['a'];
 console.log(x);
 console.log(y);
 console.log(z);
```  
* 对象的解构赋值    
```javascript   
var { foo, bar ,zoo = 'default',dog} = {foo: "aaa", bar: "bbb"};
console.log(foo);
console.log(bar);
console.log(zoo);
console.log(dog);
let { log, sin, cos ,PI } = Math;
console.log(sin(PI / 2));
``` 
* 字符串的解构赋值    
```javascript   
const [a, b, c, d, e] = 'hello';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
let {length : len} = 'hello';
console.log(len);
``` 
* 数值和布尔值的解构赋值    
```javascript   
let {log} = console;
let {toString: s1} = 123;
log(s1 === Number.prototype.toString)
log(s1.call(34));
let {toString: s2} = true;
log(s2 === Boolean.prototype.toString)
``` 
* 函数参数的解构赋值    
```javascript   
let [x1,x2] = [[1, 2], [3, 4]].map(function ([a, b]) {
    return a + b
});
log(x1);
log(x2);
``` 

##4.字符串的扩展
### 推荐使用星级：★★★    

#### 运行脚本：`node src/4string.js`    
* 字符的Unicode表示法    
```javascript
console.log("\u0061");
console.log("\uD842\uDFB7");
 ```
* 字符串的遍历器接口    
```javascript
for (let c of 'casa') {
    console.log(c);
}
let text = "\uD842\uDFB7";
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}
for (let c of text) {
    console.log(c);
}
```    
 * 字符串新增方法    
```javascript
var s = 'CASA!';
console.log(s.startsWith('CA'));
console.log(s.endsWith('!'));
console.log(s.includes('AS'));
console.log(s.repeat(3));
  ```  
* 模板字符串    
```javascript
// 普通字符串
console.log(`In JavaScript '\n' is a line-feed.`);
// 多行字符串
console.log`In JavaScript this is
 not legal.`;
console.log(`string text line 1
string text line 2`);
// 字符串中嵌入变量
let name = 'Bob', time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);
function fn() {
    return "CASA";
}
console.log(`Hello ${fn()}`);
//String.raw()
console.log(`\n\ta`);
console.log(String.raw`\n\ta`);
console.log(String.raw({raw: `CS!` }, 'A', 'A'));
```    

##5.函数的扩展
### 推荐使用星级：★★★  
### 注:目前ES6的新特性，nodejs和最新的chrome还不支持，但babel可以支持转换 http://babeljs.io/repl/
#### 运行脚本：`./src/5function.js `    
* 函数参数的默认值   (chrome49)    
```javascript
function print(x, y='CASA') {
    console.log(x, y);
}
print('Hello');
print('Hello', 'CASA');
print('Hello', '');
print('Hello', undefined);
// 与解构赋值默认值结合使用
function foo({x, y = 5}) {
    console.log(x, y);
}
foo({}) // undefined, 5
foo({x: 1}) // 1, 5
foo({x: 1, y: 2}) // 1, 2
  ```  
* 可变参数(rest parameter)-(chrome47)    
```javascript
function add(...values) {
    let sum = 0;
    for (let val of values) {
        sum += val;
    }
    return sum;
}
console.log(add(1,2,3,4));
  ```  
* 扩展运算符(spread):  rest的逆运算,可以用来替换apply    
```javascript
console.log(...'casa');
console.log(...[1, 2, 3]);
//babel转换后
console.log.apply(console, [1, 2, 3]);
  ```  
* name属性:该函数的函数名    
```javascript
function foo() {}
console.log(foo.name) // "foo"
var func1 = function () {};
//ES6
console.log(func1.name) // "func1"
//ES5
console.log(func1.name) // ""
var f = v => v;
console.log(f.name) // ""
```

* 箭头函数（=>）:用于定义函数,简化回调函数，类似于java8中的(->)    
```javascript
function foo() {}
console.log(foo.name) // "foo"
var func1 = function () {};
//ES6
console.log(func1.name) // "func1"
//ES5
console.log(func1.name) // ""
var f = v => v;
console.log(f.name) // ""
  ```
     ####注：箭头函数的注意事项
     * 固化this对象，它里面的this对象是定义时所在的对象，而不是使用时所在的对象 
 ```javascript
       function foo() {
           console.log("foo -- id:",this.id);
           setTimeout( function() {
               console.log("function -- id:", this.id);
           },100);
           let that = this;
           setTimeout( function() {
               console.log("function that -- id:", that.id);
           },100);
           setTimeout( () => {
               console.log("=> -- id:", this.id);
           },100);
       }
       foo.call( { id: 42 } );
  ```
     * 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。    
     * 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。    
     * 不可以使用yield命令，因此箭头函数不能用作Generator函数。    
* 尾调用优化(node/chrome还都未实现):只保留内层函数的调用帧,避免stack overflow   
```javascript
function factorial(n, acc) {
    'use strict';
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}
console.log(factorial(100000,1));
```

##6.对象的扩展
### 推荐使用星级：★★★  
#### 运行脚本：`./src/6object.js `    
* 属性的简洁表示法    
```javascript
let name = 'casa';
let casa = {
    name,
    sayName() {
        console.log('hello,',this.name);
    }
};
casa.sayName();
```
* 属性名表达式
```javascript
let lastWord = 'last word';
let obj = {
    'first word': 'hello',
    [lastWord]: 'casa',
    ['h'+'ello']() {
        return this['first word'] + ' ' + this[lastWord];
    }
};
console.log(obj.hello());
```
* 新增方法    
```javascript
// 严格相等，类似于===
console.log(Object.is('',''));
console.log(Object.is({},{}));
//  属性复制，类似于$.extend();
var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { test(){
    console.log('source2');
}};
Object.assign(target, source1, source2);
target.test();
```

## 7.Symbol:ES6引入的新的原始数据类型，表示独一无二的值，可以用来做对象的属性名，防止属性名冲突。
### 推荐使用星级：★    
#### 运行脚本：`./src/7symbol.js `    
```javascript
// 基本用法
let s1 = Symbol();
let s2 = Symbol("foo");
let s3 = Symbol("foo");
let s4 = Symbol.for("doo");
let s5 = Symbol.for("doo");
let s6 = Symbol("doo");
console.log("typeof s1: ",typeof s1);
console.log("s2: ",s2);
console.log('s2===s3',s2===s3);
console.log('s4===s5',s4===s5);
console.log('s5===s6',s5===s6);
// 用作属性名
let count = Symbol('count');
let cc = {
    name:'casa',
    [count]:0,
    add(n){
       this[count] += n ;
    }
};
cc.add(1);
console.log('cc count undefined:'+cc.count);
console.log('cc count:'+cc[count]);
console.log('cc OwnPropertyNames:'+Object.getOwnPropertyNames(cc));
console.log('cc OwnPropertySymbols:'+Object.getOwnPropertySymbols(cc));
// 用作常量，有点枚举的意思
const levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn'),
};
log(levels.DEBUG, 'debug message');
log(levels.INFO, 'info message');
```

## 8.Set和Map数据结构:JavaScript原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6又添加了Map和Set。
### 推荐使用星级：★★    
#### 运行脚本：`./src/8setMap.js ` 
* Set 类似于数组，但是成员的值都是唯一的，没有重复的值。   
```javascript
console.log('set.size',set.size);
set.add(3);
console.log(set.has(1));
console.log(set.delete(1));
set.forEach(x => console.log('forEach:',x));
for(let x of set){
    console.log('for of',x);
}
console.log('set.keys():',set.keys());
console.log('set.values():',set.values());
console.log('set.entries():',set.entries());
```
* Map 可以用对象当键的键值对象集合    
```javascript
let map = new Map();
map.set('foo', true);
map.set('bar', false);
map.set(1, 'casa');
console.log('map.size:',map.size);
console.log('map.get():',map.get(1));
console.log('map.has():',map.has(1));
console.log('map.delete():',map.delete(1));
for (let entry of map) {
    console.log(entry[0], entry[1]);
}
map.forEach(function(value, key, map){
    console.log("Key: %s, Value: %s", key, value);
});
```
* WeakSet和WeakMap:与Set和Map唯一的区别是它只接受对象作为键名（null除外），
不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。不提供size属性和遍历的方法；

## 9.Iterator和for...of循环
### 推荐使用星级：★★    
#### 运行脚本：`./src/9itertor.js ` 

* 迭代器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作。
    实现该接口的对象有Array,Set,Map,String,Generator函数对象，以及某些类数组对象。
    ####接口方法：
    * next():返回值格式{ value: "a", done: false }
    * return(): 使用场合如果for...of循环提前退出（通常是因为出错，或者有break语句或continue语句），
    就会调用return方法。
    * throw():主要是配合Generator函数使用;
    
    ####作用：
    * 为各种数据结构，提供一个统一的、简便的访问接口；
    * 使得数据结构的成员能够按某种次序排列；
    * ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。
        
    ```javascript
    let iterable = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    };
    for (let item of iterable) {
        console.log(item); // 'a', 'b', 'c'
    }
    // 判断对象是否具有iterator接口
    console.log(typeof iterable[Symbol.iterator] === 'function');
    ```
* for...of循环:借鉴了Java、Python语法,引入其作为遍历所有实现Iterator数据结构的统一的方法。
    ####遍历语法比较：
    * 原始写法 :麻烦，但性能最好。   
    ```javascript
    for (var index = 0; index < myArray.length; index++) {
      console.log(myArray[index]);
    }
    ```
    * forEach方法: 无法中途跳出forEach循环，break命令或return命令都不能奏效；单行语句循环与(=>)配合；
    ```javascript
    myArray.forEach(function (value) {
      console.log(value);
    });
    ```
    * for...in :不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键;会以任意顺序遍历键名。  
    ```javascript
    for (var index in myArray) {
      console.log(myArray[index]);
    }
    ```
    * for...of :简洁语法;可以与break、continue和return配合使用;但不能提供index，性能相比原始的稍差。  
    ```javascript
    for (var index in myArray) {
      console.log(myArray[index]);
    }
    ```
