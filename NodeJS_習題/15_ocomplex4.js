/*
必須注意的是，這種寫法仍然必須把 Complex.create 提出來到外面寫，
否則在Complex 都尚未創建完成時就要用 Object.create(Complex) 創建 Complex 物件的話，就會產生錯誤了。
*/

var Complex = {
  add: function (c2) {
    return Complex.create(this.r + c2.r, this.i + c2.i);
  },
  sub: function (c2) {
    return Complex.create(this.r - c2.r, this.i - c2.i);
  },
  mul: function (c2) {
    return Complex.create(this.r * c2.r - this.i * c2.i,
      this.r * c2.i + this.i * c2.r);
  },
  toString: function () {
    return this.r + "+" + this.i + "i"
  }
}
Complex.create = function (r, i) {
  var c = Object.create(Complex);
  c.r = r;
  c.i = i;
  return c;
}
var a = Complex.create(1, 2),
  b = Complex.create(2, 1);
var x = a.add(b).sub(b).mul(b);
console.log("a=%s", a);
console.log("b=%s", b);
console.log("a.add(b)=%s", a.add(b));
console.log("a.sub(b)=%s", a.sub(b));
console.log("a.mul(b)=%s", a.mul(b));
console.log("x=%s", x);
