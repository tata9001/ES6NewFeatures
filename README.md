ES6NewFeatures
=================
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
    let m = 40;
    if (true) {
        //console.log('inner n = ' , n);
        console.log('m = ',m);
        let n = 10;
    }
    console.log('n = ',n);
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
let [w, x = 1 ,y, ...z] = ['a'];
console.log(w);
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
* 字符串的遍历器接口    
```javascript
for (let c of 'casa') {
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
#### 运行脚本：`node ./src/5function.js `    
* 函数参数的默认值   
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
* 可变参数(rest parameter)   
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
* 箭头函数（=>）:用于定义函数,简化回调函数，类似于java8中的(->)    
```javascript
// 箭头函数写法
let f = () => 5;
// 等同于 let f = function (){ return 5 };
console.log(f());
let sum = (num1, num2) => num1 + num2;
// 等同于
//let sum = function(num1, num2) {
//    return num1 + num2;
//};
console.log(sum(1,2));
[1,2,3].map(x => console.log(x * x));
  ```
####注：箭头函数的注意事项
    1. 固化this对象，它里面的this对象是定义时所在的对象，而不是使用时所在的对象 
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
    2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。    
    3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。    
    4. 不可以使用yield命令，因此箭头函数不能用作Generator函数。    
 
* 尾调用优化(node/chrome还都未实现):只保留内层函数的调用帧,避免stack overflow(就当不存在吧)   
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
#### 运行脚本：`node ./src/6object.js `    
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
#### 运行脚本：`node ./src/7symbol.js `    
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
#### 运行脚本：`node ./src/8setMap.js ` 
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
#### 运行脚本：`node ./src/9itertor.js ` 

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

## 10.Generator 函数 ：ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同。
### 协程
    传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。
    其中有一种叫做"协程"（coroutine），意思是多个线程互相协作，完成异步任务。
    
    协程有点像函数，又有点像线程。它的运行流程大致如下。
    
    第一步，协程A开始执行。
    第二步，协程A执行到一半，进入暂停，执行权转移到协程B。
    第三步，（一段时间后）协程B交还执行权。
    第四步，协程A恢复执行。
    上面流程的协程A，就是异步任务，因为它分成两段（或多段）执行.
    Generator函数是协程在ES6的实现，最大特点就是可以交出函数的执行权（即暂停执行）。
### 定义
    实质上：它是一个封装的异步任务，或者说是异步任务的容器。
    语法上：它一个状态机，封装了多个内部状态，也是一个遍历器对象生成函数。
        执行它会返回一个遍历器对象，可以依次遍历Generator函数内部的每一个状态。
    形式上：是一个普通函数，有两个特征：
        一是，function命令与函数名之间有一个星号；
        二是，函数体内部使用yield语句，定义不同的内部状态
### 推荐使用星级：★ 
#### 运行脚本：`node ./src/10generator.js`
```javascript
// 普通调用
function* helloWorldGenerator() {
    console.log('hello 前面---');
    yield 'hello';
    console.log('casa 前面---');
    let nextWord = yield 'casa'
    console.log(nextWord);
    console.log('ending 前面---');
    return 'ending';
}
let hw = helloWorldGenerator();
setTimeout(()=>console.log(hw.next()),1000);
setTimeout(()=>console.log(hw.next()),2000);
setTimeout(()=>console.log(hw.next('tw')),3000);
setTimeout(()=>console.log(hw.next()),4000);
//  for of 调用
for (let v of helloWorldGenerator()) {
    console.log("value:" + v);
}
// return
let hw2 = helloWorldGenerator();
console.log(hw2.next());
console.log(hw2.return("returnedData"));
// throw
function* g() {
    while (true) {
        try {
            yield '';
        } catch (e) {
            if (e != 'a') throw e;
            console.log('内部捕获', e);
        }
    }
};
var i = g();
i.next();
try {
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}
```    

* Generator与状态机 :Generator是实现状态机的最佳结构.   
```javascript
let ticking = true;
let es5clock = function() {
    if (ticking)
        console.log('Tick!');
    else
        console.log('Tock!');
    ticking = !ticking;
}
let es6clock = function*(_) {
    while (true) {
        yield _;
        console.log('Tick!');
        yield _;
        console.log('Tock!');
    }
};
```

## 11.Promise对象 ：用来传递异步操作的消息,它代表了某个未来才会知道结果的事件（通常是一个异步操作），并且这个事件提供统一的API，可供进一步处理，有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
### 推荐使用星级：★★★    
#### 运行脚本：`node ./src/11promise.js`
#### 两个特点:
*（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成）和Rejected（已失败）。
    只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。    
*（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。
    Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。
    只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。
    就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。    
```javascript
let log = console.log;
function async(arg, callBack) {
    setTimeout(function () {
        log('result ' + arg);
        callBack();
    }, 1000);
};
function validate() {
    log("Wait for it ...");
    async('first', function () {
        async('second', function () {
            async('third', function () {
                async('fourth', function () {
                });
            });
        });
    });
};
validate();
```    
```javascript
function asyncPromise(arg) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(arg == 'first' || arg == 'third'){
                resolve('validatePromise result ' + arg);
            } else{
                reject(arg + " error");
            }
        }, 1000);
    });
};
function validatePromise() {
    log("validatePromise Wait for it ...");
    asyncPromise('first').then((resp)  => {
        log(resp);
        return asyncPromise('second');
    }).then((resp) => {
        log(resp);
        return asyncPromise('third')
    },(err) => {
        log("error:" + err);
        return asyncPromise('third');
    }).then((resp)  => {
        log(resp);
        return asyncPromise('fourth');
    }).then((resp) => {
        log(resp);
    }).catch(log);
};
validatePromise();
```
*其他方法：    
    Promise.all()：var p = Promise.all([p1,p2,p3]);全resolve后才resolve,一个reject马上reject;    
    Promise.race()：var p = Promise.race([p1,p2,p3]);只要一个reject/resolve马上reject/resolve;    
    Promise.resolve()：将现有对象转为Promise对象对象状态返回状态为resolve;    
    Promise.reject()：将现有对象转为Promise对象对象状态返回状态为reject;    
```javascript
var p = Promise.resolve('foo')
// 等价于
//new Promise(resolve => resolve('foo'))
p.then(function (s){
 console.log(s)
});
```    
*与Generator函数结合：` node ./src/11generator\promise.js`
```javascript
let fs = require('fs');
let readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};
function* gen() {
    let f1 = yield readFile('/Users/yunwang/test/test1');
    let f2 = yield readFile('/Users/yunwang/test/test2');
    console.log("file test1 content:", f1.toString());
    console.log("file test2 content:", f2.toString());
};
let g = gen();
g.next().value.then(data => {
    return g.next(data).value;
}).then(data => {
    g.next(data);
}).catch(console.log);
```

##12.Class:ES6的Class只是ES5的构造函数的一层包装
### 推荐使用星级：★★★    
#### 运行脚本：`node --harmony_new_target ./src/12class.js` 
* 基本语法    
```javascript
// ES5:
function Point(x,y){
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
}
// ES6:定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
  static getClassName(){
          return 'Point';
  }
}
console.log(new Point(10,12).toString());
console.log(Point.getClassName());
```
* constructor方法:通过new命令生成对象实例时，自动调用该方法。但只能有一个constructor方法;
* static 方法;
* 不存在变量提升(hoist);    
```javascript
new Foo(); // ReferenceError
class Foo {}
```
* 严格模式:默认是严格模式，所以不用写‘use strict’;
* 继承(Extend):super关键字;     
```javascript
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
console.log(new ColorPoint(10,12,'red').toString());
```
* new.target属性:返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。
```javascript
// 传统的构造器
function Person(name) {
    if (new.target !== undefined) {
        this.name = name;
    } else {
        throw new Error('必须使用new生成实例');
    }
}
new Person('wy');
Person(0);
//ES6的构造器
class Rectangle {
    constructor(length, width) {
        console.log(new.target);
    }
}
class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}
var obj1 = new Rectangle(3,2); // Rectangle 
var obj2 = new Square(3); //  Square
```


## 13.Module ：原生的模块化，用于替代CommonJS/AMD，主要有export和import两个命令构成
### 推荐使用星级：★★★    
#### 运行脚本：
     `babel-node ./src/13module.js`    
* export命令:一个模块就是一个独立的文件，内部的变量需要由export声明，外部才能使用到；
* import命令:用于加载模块文件，并从中引入变量。
```javascript
// 13exports.js
 export let firstName = 'wang';
 let lastName = 'yun';
 function multiply (x, y) {
     return x * y;
 };
 class Point {
     constructor(x, y) {
         this.x = x;
         this.y = y;
     }
     toString() {
         return '(' + this.x + ', ' + this.y + ')';
     }
     static getClassName(){
         return 'Point';
     }
 }
 // 默认导出
 export default function defaultFunction(){
     console.log('I am defaulit export');
 }
 export {lastName,multiply,Point}
```
```javascript
// 13module.js
//模块的继承
//  普通引入
import {lastName,multiply,Point} from './13export.js';
// 整体引入
//import * from './13export.js';
// 默认引入
import defaultExport from './13export.js';
console.log(lastName);
console.log(multiply(4,9));
console.log(new Point(1,3))
defaultExport();
```

## 14.其他：
* Unicode的扩展
* 正则的扩展
* 数值的扩展
* 数组的扩展
* Proxy和Reflect
* 二进制数组

## 15.相关链接：
* http://kangax.github.io/compat-table/es6/#babel
* http://es6.ruanyifeng.com/
* http://es6.ruanyifeng.com/#docs/reference
* http://babeljs.io/repl/
* https://github.com/lukehoban/es6features#modules
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla
