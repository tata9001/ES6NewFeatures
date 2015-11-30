ES6NewFeatures
==============
Introduce the ES6's new Features

### 星级说明：★★★ 推荐使用 ★★ 有考虑地使用 ★ 慎重地使用 ☆ 不使用

##1.let:用法类似于var，用于声明变量。
### 推荐使用星级：★★★
### 运行脚本：`node src/1let.js`    
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
### 运行脚本：`node src/2const.js`    

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

##3变量的解构赋值(Destructuring):按照一定模式，从数组和对象中提取值，对变量进行赋值    
### 推荐使用星级：★★
#### 注：在nodejs中查看in progress features `node --v8-options | grep "in progress"`
### 运行脚本：`node --harmony_destructuring ./src/3destructuring.js`  
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