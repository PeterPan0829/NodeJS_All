/*
在引用「匯出建構函數」的程式當中由於取得的是建構函數，因此必須再使用
new 的方式建立物件之後才能使用 (例如以下的 c = new cir(5) 這個指令，就是在透過建構函數 cir() 建立物件。
*/

var cir = require('./07_circle'); // 注意 ./ 代表 circle 與此程式放在同一個資料夾底下。

var c = new cir(5);
console.log("c.area()=" + c.area());
