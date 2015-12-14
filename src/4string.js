'use strict'

//字符串的遍历器接口
for (let c of 'casa') {
    console.log(c);
}
//字符串新增方法
var s = 'CASA!';
console.log(s.startsWith('CA'));
console.log(s.endsWith('!'));
console.log(s.includes('AS'));
console.log(s.repeat(3));

//模板字符串
// 普通字符串
console.log(`In JavaScript '\n' is a line-feed.`);
// 多行字符串
console.log`In JavaScript this is
 not legal.`;
console.log(`string text line 1
string text line 2`);
// 字符串中嵌入变量
let name = 'Bob', time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);
function fn() {
    return "CASA";
}
console.log(`Hello ${fn()}`);
//String.raw()
console.log(`\n\ta`);
console.log(String.raw`\n\ta`);
console.log(`\\n\\ta`);
