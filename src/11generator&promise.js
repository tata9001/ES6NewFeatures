'use strict'
let fs = require('fs');

let readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};

function* gen() {
    let f1 = yield readFile('/Users/yunwang/test/test1');
    let f2 = yield readFile('/Users/yunwang/test/test2');
    console.log("file test1 content:", f1.toString());
    console.log("file test2 content:", f2.toString());
};

let g = gen();
g.next().value.then(data => {
    return g.next(data).value;
}).then(data => {
    g.next(data);
}).catch(console.log);
