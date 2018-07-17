/*
在引用「匯出建構函數」的程式當中由於取得的是建構函數，因此必須再使用
new 的方式建立物件之後才能使用 (例如以下的 c = new cir(5) 這個指令，就是在透過建構函數 cir() 建立物件。
*/

var cir = require('./07_circle'); // 注意 ./ 代表 circle 與此程式放在同一個資料夾底下。

var c = new cir(5);
console.log("c.area()=" + c.area());


/*
現在應該可以理解為何要將 Circle 定義為一個函數了吧！
這只不過 Circle 類別的建構函數而已，當他被 module.exports = Circle 這個指令匯出時，
就可以在 var cir = require('./circle') 這個指令接收到建構函數，
然後再利用像 var c = new cir(5) 這樣的指令，呼叫該建構函數以建立出物件。
*/
