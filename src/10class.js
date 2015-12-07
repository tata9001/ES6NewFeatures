'use strict'

//定义类
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
console.log(new Point(10,12).toString());
console.log(Point.getClassName());

//继承
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
console.log(new ColorPoint(10,12,'red').toString());
//new.target属性
function Person(name) {
    if (new.target !== undefined) {
        this.name = name;
    } else {
        throw new Error('必须使用new生成实例');
    }
}
new Person('wy');
Person(0);
class Rectangle {
    constructor(length, width) {
        console.log(new.target === Rectangle);
    }
}
class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}
var obj1 = new Rectangle(3,2); //  true
var obj2 = new Square(3); //  false