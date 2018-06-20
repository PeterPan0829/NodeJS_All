/*
上述幾種寫法都使採用 Object.create 的方式，根據某物件創造出新物件。
但是 JavaScript 的典型物件寫法是採用《 建構函數 + 原型鏈》的方式進行物件導向設計的，以下我們將介紹這種典型做法。
首先讓我們看看 javascript 當中的建構函數怎麼寫，以下同樣用《 複數物件》當作範例。
*/


var Complex = function (r, i) { //可以看到這個版本的 Complex 並不是個物件，而是一個函數，我們用 new Complex(1, 2) 這樣的語句呼叫這個建構函數，創建出新物件。
  this.r = r; //然後在建構函數當中，我們仍然可以使用 this 代表這個物件，將內容放到物件裡面。
  this.i = i;
  this.add = function (c2) {
    return new Complex(this.r + c2.r, this.i + c2.i);
  }
  this.sub = function (c2) {
    return new Complex(this.r - c2.r, this.i - c2.i);
  }
  this.mul = function (c2) {
    return new Complex(this.r * c2.r - this.i * c2.i,
      this.r * c2.i + this.i * c2.r);
  }
  this.toString = function () {
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
