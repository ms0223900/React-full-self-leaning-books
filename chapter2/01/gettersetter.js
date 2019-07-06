get 取直
set 存值

class MyClass{
  constructor() {
    // ...
  }
  get prop(){
    return 'getter';
  }
  set prop(value){
    console.log('setter: '+ value);
  }
}

let inst  = new MyClass();
inst.prop = 123;

inst.prop

//
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, "html"
);

"get" in descriptor  // true
"set" in descriptor  // true
