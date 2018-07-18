# NodeJS_WebServer

**Introduction**

node.js 採用 Event Queue 的方式執行 (類似 Win3.1 中的協同式多工)，而沒有採用 Thread 的方式，
因此對所有 輸出入 IO 都應該盡可能採用非同步的方式執行，這樣才能讓 node.js 程式發揮最大的效能，否則就會因為 IO 而卡住。
因此以資料夾兩個版本當中，以非同步版速度較快。

