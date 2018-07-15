/*
在物件的原型 prototype 裏通常還有些其他未顯示出來的函數，
像是 toString() 就是一個很好用的函數，假如我們為物件加上 toString()函數的話，
那在該物件需要被轉換成字串的時候，就會自動呼叫 toString()，以下是我們為上述 ocomplex1.js 程式
加上 toString() 函數之後的結果，這個版本稱為 ocomplex2.js。
*/

var Complex = {
  add: function (c2) {
    return creatComplex(this.r + c2.r, this.i + c2.i);
  },
  toString: function () {
    return this.r + "+" + this.i + "i"
  }
}

var creatComplex = function (r, i) {
  var c = Object.create(Complex);
  c.r = r;
  c.i = i;
  return c;
}

var a = creatComplex(1, 2),
  b = creatComplex(2, 1);
var x = a.add(b).add(b).add(b).add(b);

console.log("a=%s", a);
console.log("b=%s", b);
console.log("a.add(b)=%s", a.add(b));
console.log("x=%s", x);

/*
可以看到由於我們加入了 toString() 函數，而且在印出來的語法上採用了 %s 這個字串式印法，
於是在印到螢幕前 console.log 會先呼叫這些複數物件的 toString() 函數， 結果印出來的格式就好看很多了。
*/
