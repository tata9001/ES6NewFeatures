'use strict'

// 数组的解构赋值
let [w, x = 1 ,y, ...z] = ['a'];
console.log(w);
console.log(x);
console.log(y);
console.log(z);

//对象的解构赋值
var { foo, bar ,zoo = 'default',dog} = {foo: "aaa", bar: "bbb"};
console.log(foo);
console.log(bar);
console.log(zoo);
console.log(dog);
let { sin, cos ,PI } = Math;

console.log(sin(PI / 2));

//字符串的解构赋值
const [a, b, c, d, e] = 'hello';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let {length : len} = 'hello';
console.log(len);

//数值和布尔值的解构赋值
let {log} = console;
let {toString: s1} = 123;
log(s1 === Number.prototype.toString)
log(s1.call(34));
let {toString: s2} = true;
log(s2 === Boolean.prototype.toString)

// 函数参数的解构赋值
let [x1,x2] = [[1, 2], [3, 4]].map(function ([a, b]) {
    return a + b
});
log(x1);
log(x2);
