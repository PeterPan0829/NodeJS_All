/*
寫這個測試程式來驗證 jslab.js 模組

每個程式只要用 module.export 匯出物件；接著就可以使用 require()函數 引入該物件來使用
*/

var J = require("./jslab");
var C = console;

var A = [
  [1, 2, 3],
  [3, 2, 1],
  [6, 5, 4]
];
C.log("A=\n", J.str(A));

var iA = numeric.inv(A);
C.log("iA=\n", J.str(iA))

var AiA = numeric.dot(A, iA);
C.log("A * iA=\n", J.str(AiA));
