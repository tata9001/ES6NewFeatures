'use strict'
let log = console.log;
function async(arg, callBack) {
    setTimeout(function () {
        log('result ' + arg);
        callBack();
    }, 1000);
};
function validate() {
    log("Wait for it ...");
    async('first', function () {
        async('second', function () {
            async('third', function () {
                async('fourth', function () {
                });
            });
        });
    });
};
validate();


function asyncPromise(arg) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(arg == 'first' || arg == 'third'){
                resolve('validatePromise result ' + arg);
            } else{
                reject(arg + " error");
            }
        }, 1000);
    });
};

function validatePromise() {
    log("validatePromise Wait for it ...");
    asyncPromise('first').then((resp)  => {
        log(resp);
        return asyncPromise('second');
    }).then((resp) => {
        log(resp);
        return asyncPromise('third')
    },(err) => {
        log("error:" + err);
        return asyncPromise('third');
    }).then((resp)  => {
        log(resp);
        return asyncPromise('fourth');
    }).then((resp) => {
        log(resp);
    }).catch(log);
};
validatePromise();