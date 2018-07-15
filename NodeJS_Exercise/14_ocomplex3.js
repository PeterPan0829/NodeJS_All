/*
也可以把減法 sub() 和乘法 mul() 函數放到這個物件導向版的複數程式中，這樣就和前面的非物件導向版功能相當了，
以下是這個比較完整的版本。
*/

var Complex = {
  add: function (c2) {
    return createComplex(this.r + c2.r, this.i + c2.i);
  },
  sub: function (c2) {
    return createComplex(this.r - c2.r, this.i - c2.i);
  },
  mul: function (c2) {
    return createComplex(this.r * c2.r - this.i * c2.i,
      this.r * c2.i + this.i * c2.r);
  },
  toString: function () {
    return this.r + "+" + this.i + "i"
  }
}
var createComplex = function (r, i) {
  var c = Object.create(Complex);
  c.r = r;
  c.i = i;
  return c;
}
var a = createComplex(1, 2),
  b = createComplex(2, 1);
var x = a.add(b).sub(b).mul(b);
console.log("a=%s", a);
console.log("b=%s", b);
console.log("a.add(b)=%s", a.add(b));
console.log("x=%s", x);

/*
上述程式雖然很完整了， 但是在語法上 createComplex() 沒有和 Complex 物件直接綁釘在一起，感覺怪怪的。
為了讓語法更漂亮，乾脆將該函數直接塞回 Complex物件內成為 Complex.create() 函數，這樣感覺就更「 物件化」了一些。
請看以下 15_ocomplex4.js 的版本！
*/
