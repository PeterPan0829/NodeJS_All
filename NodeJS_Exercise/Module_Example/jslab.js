/*
此為原本 19_numeric.js 我們可以用 numeric.js 套件為基礎重新包裝出自己的 jslab.js 這個科學計算函式庫

最後要加上 module.exports = <object> 【匯出】讓其他程式使用
*/

var N = require("numeric");

var jslab = {
  inv: N.inv,
  dot: N.dot,
  str: N.prettyPrint
}

module.exports = jslab;
