'use strict'

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

const levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn'),
};
console.log(levels.DEBUG, 'debug message');
console.log(levels.INFO, 'info message');
