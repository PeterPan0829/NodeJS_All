/*
ES6 新版的類別寫法

不管你總共建立了多少 Complex 物件，Complex 的 prototype 都只會有一份，因此這種寫法會比前一種寫法更省記憶體。
而這種寫法，也是最經典的 javascript 物件導向寫法。
在一般的物件導向語言裡，會有《繼承》的機制，但是在 javascript 的早期版本 (ES6 之前) 裡面，並沒有《繼承》的機制。
但是 javascript 仍然可以做到類似《繼承》的功能，方法是在原型裏再塞入原型，
這種原型裡面還可以有原型的做法，請上網多找找資源學習唷!!
*/

class Complex {
  constructor(r, i) {
    this.r = r;
    this.i = i;
  }
  add(c2) {
    return new Complex(this.r + c2.r, this.i + c2.i);
  }
  sub(c2) {
    return new Complex(this.r - c2.r, this.i - c2.i);
  }
  mul(c2) {
    return new Complex(this.r * c2.r - this.i * c2.i,
      this.r * c2.i + this.i * c2.r);
  }
  toString() {
    return this.r + "+" + this.i + "i"
  }
}
var a = new Complex(1, 2),
  b = new Complex(2, 1);
var x = a.add(b).sub(b).mul(b);
console.log("a=%s", a);
console.log("b=%s", b);
console.log("a.add(b)=%s", a.add(b));
console.log("a.sub(b)=%s", a.sub(b));
console.log("a.mul(b)=%s", a.mul(b));
console.log("x=%s", x);
