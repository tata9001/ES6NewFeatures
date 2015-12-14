'use strict'

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

function f2() {
    var n = 5;
    var n = 100;
    if (true) {
        console.log(n);
        var n = 10;
    }
    console.log(n);
}

f1();
f2();

console.log(doo);
var doo = 2;

console.log(foo);
let foo = 2;