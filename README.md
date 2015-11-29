ES6NewFeatures
==============
Introduce the ES6's new Features

### 星级说明：★★★ 推荐使用 ★★ 有考虑地使用 ★ 慎重地使用 ☆ 不使用

##let:用法类似于var，但所声明的变量，只在let命令所在的代码块内有效。
###推荐使用星级：★★★
```javascript
function f1() {
  let n = 5;
  if (true) {
    console.log(n);//undefined
    let n = 10;
 }
  console.log(n);//5
}
```
```javascript
function f2() {
  var n = 5;
  if (true) {
    console.log(n);//5
    var n = 10;
  }
  console.log(n); //10
}
```
