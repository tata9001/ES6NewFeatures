'use strict'

let s1 = Symbol();
let s2 = Symbol("foo");
let s3 = Symbol("foo");
let s4 = Symbol.for("doo");
let s5 = Symbol.for("doo");
let s6 = Symbol("doo");
let k2 = Symbol.keyFor(s2);
let k4 = Symbol.keyFor(s4);
let k6 = Symbol.keyFor(s6);
console.log("typeof s1: ",typeof s1);
console.log("s2: ",s2);
console.log('s2===s3',s2===s3);
console.log('s4===s5',s4===s5);
console.log('s5===s6',s5===s6);
console.log("k3 foo: ",k4);
console.log("k3 doo: ",k4);
console.log("k4 doo: ",k6);

let count = Symbol('count');
let cc = {
    name:'casa',
    [count]:0,
    count:0,
    add(n){
       this[count] += n ;
    }
};
cc.add(1);
console.log('cc count undefined:'+cc.count);
console.log('cc count:'+cc[count]);
console.log('cc OwnPropertyNames:'+Object.getOwnPropertyNames(cc));
console.log('cc OwnPropertySymbols:'+Object.getOwnPropertySymbols(cc));

const levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn'),
};
log(levels.DEBUG, 'debug message');
log(levels.INFO, 'info message');
