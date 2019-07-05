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
//
ex:
String.prototype.repeatify = String.prototype.repeatify || function(times) {
   let str = '';

   for (let i = 0; i < times; i++) {
      str += this;
   }
 
   return str;
};
