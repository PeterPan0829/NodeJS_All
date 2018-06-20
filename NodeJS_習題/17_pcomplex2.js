/*
雖然上一個範例 16 _pcomplex.js 採用了建構函數，但是這種寫法的每個物件裡面，都會儲存一份add, sub, mul 等函數，
如果有 100 個複數物件， 就會儲存 100 份這種函數， 這顯然是很浪費空間的做法。
還好，javascript 提供了一個稱為《 原型》的機制，讓我們可以《共用》 這些《 應該共用且只有一份》的欄位與函數，以下就是一個採用《原型寫法》的複數物件程式。
*/


var Complex = function (r, i) {
  this.r = r;
  this.i = i;
}
Complex.prototype.add = function (c2) {
  return new Complex(this.r + c2.r, this.i + c2.i);
}
Complex.prototype.sub = function (c2) { //其中採用 prototype 關鍵字的語句，就是所謂的原型。
  return new Complex(this.r - c2.r, this.i - c2.i);
}
Complex.prototype.mul = function (c2) {
  return new Complex(this.r * c2.r - this.i * c2.i,
    this.r * c2.i + this.i * c2.r);
}
Complex.prototype.toString = function () {
  return this.r + "+" + this.i + "i"
}
var a = new Complex(1, 2),
  b = new Complex(2, 1);
var x = a.add(b).sub(b).mul(b);
console.log("c1=%s", a);
console.log("c2=%s", b);
console.log("c1.add(c2)=%s", a.add(b));
console.log("c1.sub(c2)=%s", a.sub(b));
console.log("c1.mul(c2)=%s", a.mul(b));
console.log("x=%s", x);
