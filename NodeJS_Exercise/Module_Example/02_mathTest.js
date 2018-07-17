/*
接著可以使用 require 這個指令動態的引入該模組，注意 require 必須採用相對路徑，
即使在同一個資料夾底下，也要加上 ./ 的前置符號，代表在目前資料夾之下。
以下是一個引用上述模組的範例。
模組使用：02_mathTest.js

！！！！！！！！！！！！！！！！！！！！
原本這裡發生一些錯誤，但安裝 $ npm install mathjs 並在下面宣告 var maths = require("mathjs");
正常使用 $ node .\02_mathTest.js 就沒問題了

*/

var maths = require("mathjs");
console.log("PI=%d square(3)=%d", maths.PI, maths.square(3));
