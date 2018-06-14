/*
  翻譯系統(簡易英翻中)
 
  在 Terminal 下指令： node e2c a dog chase a cat (e2c 是這支程式的名子）
  會得到　['一隻', '狗', '追', '一隻', '貓']　這樣的結果。

  slice()： 指定從陣列中取出某區段的元素
  push()： 陣列有個函數叫做 push, 可以把查出來的字推到陣列裡面就會多一個中文字

  系統分析：
          (1)建立 e2c 物件（字典）
          (2)運用內建函數 push()、slice()


*/

var e2c = {
  dog: "狗",
  cat: "貓",
  chase: "追",
  a: "一隻",
  eat: "吃"
};

function mt(e) { //寫的函數不只是查一個字而是查詢整句話，而這整句話是個陣列！
  var c = [];
  for (let i in e) { // i 會從 0123去跑迴圈
    var eword = e[i]; //表示會去取得第 e[i] 個文字
    var cword = e2c[eword]; //從上面的理解，會把eword丟進去e2c字典，然後它回查出對應的中文字給我們放到 cword 裡面。
    c.push(cword); // c 是一個陣列，陣列有個函數叫做 push ,可以把查出來的字推到陣列裡面就會多一個中文字
  }
  return c; //最後回傳這個陣列，就是一隻貓追一隻狗（你也可以自己下其他組合參數 ex: cat chase a 等等）
}

var c = mt(process.argv.slice(2)); // process.argv 是參數陣列而 slice(2) 表示第二個以後切出來
console.log(c);
