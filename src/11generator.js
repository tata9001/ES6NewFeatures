'use strict'
// 普通调用
function* helloWorldGenerator() {
    console.log('hello 前面---');
    yield 'hello';
    console.log('casa 前面---');
    let nextWord = yield 'casa'
    console.log(nextWord);
    console.log('ending 前面---');
    return 'ending';
}
let hw = helloWorldGenerator();
setTimeout(()=>console.log(hw.next()),1000);
setTimeout(()=>console.log(hw.next()),2000);
setTimeout(()=>console.log(hw.next('tw')),3000);
setTimeout(()=>console.log(hw.next()),4000);
//  for of 调用
for (let v of helloWorldGenerator()) {
    console.log("value:" + v);
}
// return
let hw2 = helloWorldGenerator();
console.log(hw2.next());
console.log(hw2.return("returnedData"));
// throw
function* g() {
    while (true) {
        try {
            yield '';
        } catch (e) {
            if (e != 'a') throw e;
            console.log('内部捕获', e);
        }
    }
};
var i = g();
i.next();
try {
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}

// 状态机
let ticking = true;
let clock = function() {
    if (ticking)
        console.log('Tick!');
    else
        console.log('Tock!');
    ticking = !ticking;
}

let es6clock = function*(_) {
    while (true) {
        yield _;
        console.log('Tick!');
        yield _;
        console.log('Tock!');
    }
};