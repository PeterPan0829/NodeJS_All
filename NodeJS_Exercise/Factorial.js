/*
請寫一個程式計算 10!，也就是 10 * 9 * 8 * ....*1。
但這裡我們有教 萬用階乘 寫法!

在程式的世界裡面，可以重複使用的東西只有【 Object】 和【 Method】
而如果要讓 Method 可以重複使用， 關鍵在不要在 Method 裡面寫輸出、 入， 只要寫回傳值就好!!
如果想要輸出東西最後再去做輸出就好。
*/

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log('factorial(5)=', factorial(5))
console.log('factorial(10)=', factorial(10))
