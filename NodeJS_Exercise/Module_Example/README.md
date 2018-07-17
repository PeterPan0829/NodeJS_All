# NodeJS_Module

**模組定義與引用**

當你用 javascript 寫出物件或函式庫時，可以提供給其他程式使用。

在 node.js 當中，模組的定義大致有兩種類型，一種是 **「匯出物件」的靜態模組**，另一種是**匯出「建構函數」的動態模組**。


```javascript
module.exports = XXX; //匯出指令

var cir = require('./circle') //接收指令
```
