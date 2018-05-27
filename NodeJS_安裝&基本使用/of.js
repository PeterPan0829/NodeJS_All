var a = [1, 3, 5, 6, 9, 88, 0, "Peter", ["qwer", "SK2"]]

for (let e of a) {
  console.log("e=%j", e)
}


/*

JS 變數方式（ Var、
let、
const） 介紹
https: //www.iware.com.tw/blog-JavaScript%20宣告:%20var、let、const.html
  https: //medium.com/@totoroLiu/javascript-var-let-const-差異-e3d930521230

  let、 const是ES6之後加入的新成員， 其作用的範圍跟var有些差異。
let與const是區塊作用域(block scope)
var是函式作用域(function scope)


輸出的格式簡單介紹：
  %
  s 字串 %
  d 數值 %
  j 物件（ 這是java沒有的）

*/
