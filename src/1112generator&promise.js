'use strict'
var fs = require('fs');

var readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error) reject(error);
            resolve(data);
        });
    });
};

function* gen(){
    var f1 = yield readFile('/Users/yunwang/test/test1');
    var f2 = yield readFile('/Users/yunwang/test/test2');
    console.log(f1.toString());
    console.log(f2.toString());
};

let g = gen();
g.next().value.then(data => {
    return g.next(data).value;
}).then(data => {
    g.next(data);
}).catch(console.log);
