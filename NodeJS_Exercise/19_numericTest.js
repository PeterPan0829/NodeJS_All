/*
  用 npm 安裝外部套件

  除了預設的函式庫之外，我們也可以使用外部的套件。
  在 node.js 當中，預設就有 npm (node package manager) 這個指令，可以用來管理、安裝、發布套件。

  沒有安裝 lodash 套件，因此我們必須要用下列 npm 指令先安裝 lodash套件。
  $ npm install lodash
  這樣就安裝好該套件了，可以用 ls 列出目前資料夾內容，會發現多出的一個node_modules 的資料夾，
  裡面會有 lodash 子資料夾，這代表已經安裝好了該套件 npm 目前已經有數十萬個套件可以供我們使用，也可以自己定義套件然後透過npm publish 指令發布套件，

  我們透過 $ npm install numeric 這個指令，安裝這個套件，然後寫程式 19_numericTest.js 來測試一下這個套件。
*/



// import numeric from "numeric"; 原本宣告下面那行系統自動提示 ES6 寫法


var numeric = require("numeric");

function print(name, m) {
  console.log("=======================" + name + "=========================");
  console.log(numeric.prettyPrint(m));
}

var A = [
  [1, 2, 3],
  [3, 2, 1],
  [6, 5, 4]
];
print("A", A);

var iA = numeric.inv(A);
print("iA", iA);

var AiA = numeric.dot(A, iA);
print("A * iA", AiA);


/*
  可以看到上述程式中，我們用 numeric.inv(A) 這行指令輕鬆地就計算出了反矩陣，
  這種函數如果要自己寫其實會很花時間的，但是用了套件之後，我們輕輕鬆鬆的就可以做完這些《矩陣運算》的動作。

  不只這些，numeric.js 套件其實還蠻完整的，可以參考下列網址中的內容，進一步瞭解這個套件到底提供了哪些函數？
  http://www.numericjs.com/documentation.html
*/
