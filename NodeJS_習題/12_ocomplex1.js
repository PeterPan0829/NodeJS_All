/*
接著讓我們來看一個簡化後的物件導向版本，這個簡化後的版本只有一種運算函數，那就是加法 add。
*/

var Complex = {
  add: function (c2) {
    return creatComplex(this.r + c2.r, this.i + c2.i);
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
var x = a.add(b).add(b).add(b);

console.log("a=%j", a);
console.log("b=%j", b);
console.log("a.add(b)=%j", a.add(b));
console.log("x=%j", x);

/*
在上述程式中，我們透過 Object.create(Complex) 創造一個物件之後，立刻在其中塞入 r, i 等欄位，
此時雖然物件看來只有兩個欄位，但事實上還有一些隱藏的物件資訊沒有被印出來，
其中的一個隱藏物件資訊就是原型，在 JavaScript 中的物件都有一個原型 prototype 的欄位，
這個欄位在執行完 Object.create(Complex) 後， 會指向Complex 物件。

上述程式中我們在 log() 函數中用了 % j 的格式，這代表要將該物件以 json 的方式印出來。
因此當我們後來呼叫 c1.add(c2) 這樣的指令時，JavaScript 的解譯系統才能夠從 c1 這個物件中找到 add 這個欄位，然後將其當成函數使用。
這種用點符號 "." 串起來的寫法可以一直串下去，成為一種串式語法，因此我們可以用 c1.add(c2).add(c2).add(c2).add(c2) 進行連續的加法。
*/
