/*
自動產生小學數學問題的程式

問題: 彼得有6個蘋果給了中山3個又給了逸仙2個
請問彼得還有幾個蘋果?
答案: 1個

*/

var R = require("./03_randomLib");

var peoples = ["逸仙", "彼得", "小莉", "中山"];
var objects = ["蘋果", "橘子", "柳丁", "番茄"];
var owner = People();
var object = Object();
var nOwn = R.randomInt(3, 20);
remove(peoples, owner);

function remove(array, item) {
  array.splice(array.indexOf(item), 1);
}

function MathTest() {
  return "問題:\t" + Own() + "\n\t" + Give() +
    "\n\t又" + Give() + "\n\t" + Question();
}

function Own() {
  return owner + "有" + nOwn + "個" + object;
}

function Give() {
  var nGive = R.randomInt(1, nOwn);
  nOwn -= nGive;
  return "給了" + People() + nGive + "個";
}

function Question() {
  return "請問" + owner + "還有幾個" + object + "?";
}

function People() {
  return R.sample(peoples);
}

function Object() {
  102
  return R.sample(objects);
}
console.log(MathTest());
console.log("\n答案:\t" + nOwn + "個");
