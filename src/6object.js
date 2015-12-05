'use strict'

//属性的简洁表示法
let name = 'casa';
let casa = {
    name,
    sayName() {
        console.log('hello,',this.name);
    }
};
casa.sayName();

//属性名表达式
let lastWord = 'last word';
let obj = {
    'first word': 'hello',
    [lastWord]: 'casa',
    ['h'+'ello']() {
        return this['first word'] + ' ' + this[lastWord];
    }
};
console.log(obj.hello());

// 新增方法
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