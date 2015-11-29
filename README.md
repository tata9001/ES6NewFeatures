ES6NewFeatures
==============
Introduce the ES6's new Features

### 星级说明：★★★ 推荐使用 ★★ 有考虑地使用 ★ 慎重地使用 ☆ 不使用

## 1.let:用法类似于var，用于声明变量。
### 推荐使用星级：★★★
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
## 2.const 特性基本与let一致，但其作用是声明常量，仅能在声明的时候赋值
### 推荐使用星级：★★★  
```javascript  
if (true) {
  const MAX = 5;
  MAX = 6;//error
  const MIN;
  MIN = 1;
}
console.log(MAX);
``` 
###ES6中规定，var命令和function命令声明的全局变量，依旧是全局对象的属性；let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。  
```javascript    
var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1
let b = 1;
window.b // undefined
```  
