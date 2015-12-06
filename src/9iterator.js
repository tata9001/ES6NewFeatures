'use strict'

//  实现 iterator 接口
let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
    console.log(item); // 'a', 'b', 'c'
}
// 判断对象是否具有iterator接口
console.log(typeof iterable[Symbol.iterator] === 'function');