constructor 方法

// class Point {
// }
// // 等同于
// class Point {
//   constructor() {}
// }

//
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true


// 与 ES5 一样，类的所有实例共享一个原型对象。

var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__//true
