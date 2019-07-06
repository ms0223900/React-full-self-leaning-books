// class Point{
//   constructor(x,y){
//     this.x = x;
//     this.y = y;
//   }
//   toString() {
//     return '(' + this.x + ', ' + this.y + ')';
//   }
// }
//
// typeof Point // "function"
// Point === Point.prototype.constructor // true
//


// 使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。
// class Bar {
//   doStuff() {
//     console.log('stuff');
//   }
// }
// var b = new Bar();
// b.doStuff() // "stuff"


//es6
// class Point {
//   constructor() {
//     // ...
//   }
//
//   toString() {
//     // ...
//   }
//
//   toValue() {
//     // ...
//   }
// }
//
// // 等同于es5
// Point.prototype = {
//   constructor() {},
//   toString() {},
//   toValue() {},
// };
// class B {}
// let b = new B();
//
// b.constructor === B.prototype.constructor // true

// class Point {
//   constructor(){
//     // ...
//   }
// }
//Oject.assign 添加多個方法。
// Object.assign(Point.prototype, {
//   toString(){},
//   toValue(){}
// });
// Point.prototype.constructor === Point // true


// class Point {
//   constructor(x, y) {
//     // ...
//   }
//
//   toString() {
//     // ...
//   }
// }
//
// Object.keys(Point.prototype)
// // []
// Object.getOwnPropertyNames(Point.prototype)
// // ["constructor","toString"]

// var Point = function (x, y) {
//   // ...
// };
//
// Point.prototype.toString = function() {
//   // ...
// };
//
// Object.keys(Point.prototype)
// // ["toString"]
// Object.getOwnPropertyNames(Point.prototype)
// // ["constructor","toString"]

ex:
String.prototype.repeatify = String.prototype.repeatify || function(times) {
   let str = '';

   for (let i = 0; i < times; i++) {
      str += this;
   }

   return str;
};
