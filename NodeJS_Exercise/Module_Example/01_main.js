/*
靜態模組：匯出物件
以下是一個匯出物件的靜態模組定義。
*/

var math = {
  PI: 3.14,
  square: function (n) {
    return n * n;
  }
}

module.exports = math; // ES6 寫法 export default math;

/*
接著可以使用 require 這個指令動態的引入該模組，注意 require 必須採用相對路徑，
即使在同一個資料夾底下，也要加上 ./ 的前置符號，代表在目前資料夾之下。
以下是一個引用上述模組的範例。
模組使用：02_mathTest.js
*/
