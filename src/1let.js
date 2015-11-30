'use strict'

function f1() {
    let n = 5;
    let m = 0;
    if (true) {
        //console.log(n);
        console.log(m);
        let n = 10;
    }
    console.log(n);
}

function f2() {
    var n = 5;
    var n = 10;
    if (true) {
        console.log(n);
        var n = 10;
    }
    console.log(n);
}

f1();
f2();

console.log(foo);
var foo = 2;


console.log(foo);
let foo = 2;