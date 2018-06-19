/*
複數的範例

以複數(Complex Number) 為範例，用最簡單的方式闡述 JavaScript 的物件導向設計。
但必須聲明的是，我們不採用傳統的 new 方式進行說明， 因為那種方式很詭異不容易看清楚 JavaScript 物件導向的特性。

相反的，我們採用 Object.create() 的方式作為入門踏板， 因為這種方式比較好理解。
要理解 JavaScript 的物件導向之前，先讓我們看看傳統的非物件導向寫法，怎麼樣撰寫一個複數(Complex Number) 的模組。

11_complex.js 是非物件的寫法， 下一個範例 12_ocomplex1.js 是物件寫法第一個範例。多多比較唷!!

*/

function add(c1, c2) {
  return {
    r: c1.r + c2.r,
    i: c1.i + c2.i
  };
}

function sub(c1, c2) {
  return {
    r: c1.r - c2.r,
    i: c1.i - c2.i
  };
}

function mul(c1, c2) {
  return {
    r: c1.r * c2.r - c1.i * c2.i,
    i: c1.r * c2.i + c1.i * c2.r
  };
}

function toStr(c) {
  return c.r + "+" + c.i + "i";
}
var a = {
    r: 1,
    i: 2
  },
  b = {
    r: 2,
    i: 1
  };
var add12 = add(a, b);
var sub12 = sub(a, b);
var mul12 = mul(a, b);
console.log("a=%s", toStr(a));
console.log("b=%s", toStr(b));
console.log("add(a,b)=%s", toStr(add12));
console.log("sub(a,b)=%s", toStr(sub12));
console.log("mul(a,b)=%s", toStr(mul12));

/*
可以看到這種寫法也很模組化，看起來相當不錯，只是函數是函數；資料是資料，
函數只是用來處理資料的程式，此種寫法還沒有用到物件導向的技術。

接著下一個範例 12 _ocomplex1.js 讓我們來看一個簡化後的物件導向版本， 這個簡化後的版本只有一種運算函數，那就是加法 add。

*/
