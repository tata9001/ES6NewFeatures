'use strict'

export let firstName = 'wang';
let lastName = 'yun';
function multiply (x, y) {
    return x * y;
};
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    static getClassName(){
        return 'Point';
    }
}
// 默认导出
export default function defaultFunction(){
    console.log('I am defaulit export');
}
export {lastName,multiply,Point}
