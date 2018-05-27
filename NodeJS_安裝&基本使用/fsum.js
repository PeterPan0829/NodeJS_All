function sum(n) {
  var s = 0;
  for (let i = 1; i <= n; i++) {
    s = s + i;
  }
  return s;
}
sum10 = sum(10);
console.log("1+...+10=" + sum10);

/*

計算總和

您可以在函數裡面使用前面幾章所學到的任何控制結構， 像是
if,
while,
for,
switch,
陣列， 變數等等。

*/
