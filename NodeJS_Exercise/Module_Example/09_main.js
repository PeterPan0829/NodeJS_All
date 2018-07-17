/*
用 npm 安裝外部套件

使用 npm install 可以安裝套件，舉例而言，假如我們這支程式 09_main.js 用到 lodash套件，如下：
*/

var _ = require("lodash");
var set = _.intersection([1, 3, 7, 9], [2, 3, 8, 9]);
console.log("set=", set);

/*
我們想要執行這個程式，於是切到 main.js 所在的資料夾後打入 node main.js ，結果
卻發現下列情況。

必須要用下列 npm 指令先安裝 lodash套件。
$ npm install lodash

可以用 ls 列出目前資料夾內容，會發現多出的一個node_modules 的資料夾，
裡面會有 lodash 子資料夾，這代表已經安裝好了該套件。

接著我們就可以用 node main.js 指令執行原本的程式，這樣就不會再產生錯誤了！
*/
