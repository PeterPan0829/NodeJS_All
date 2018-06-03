/*
  請寫一個程式求某個大於 1 的數 n 之平方根。

  sqrt = square root 平方根

  sqrt() 可以直接引用 library 的 method ().
  
*/

function sqrt(n) {
  let x = 0;
  for (x = 0; x * x < n; x += 0.001) {
  }
  return x

}

console.log('sqrt(4)=', sqrt(4))
console.log('sqrt(17.8)=', sqrt(17.8))
