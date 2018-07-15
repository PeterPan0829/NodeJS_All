// 不好的寫法 請留意!!
// 這樣的寫法一樣會有結果，但如果今天我要任意階乘 5! 16! 一定要去更改 for 當中的值 
// 所以不用 method 就沒辦法重用


let result = 1;
for (let i = 1; i <= 10; i++) {
  result = result * i;
}

console.log('10!=', result)
