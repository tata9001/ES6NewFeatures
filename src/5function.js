'use strict'

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

//固化this对象
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



