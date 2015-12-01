'use strict'

// 字符的Unicode表示法
console.log("\u0061");
console.log("\uD842\uDFB7");

for (let c of 'casa') {
    console.log(c);
}
//字符串的遍历器接口
let text = "\uD842\uDFB7";
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

for (let c of text) {
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
console.log(String.raw({raw: `CS!` }, 'A', 'A'));
