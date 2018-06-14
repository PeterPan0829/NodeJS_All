/*

查字典程式

＊物件： 在 JS 裡面， 只要用大括號｛｝ 括起來， 然後括號裡面有【 欄位名稱】 和【 欄位內容】 這就是 JS 的【 物件】！！　 其中 dog 是欄位名稱、 "狗"
是欄位內容。
*/

var e2c = {
  dog: "狗",
  cat: "貓",
  a: "一隻",
  chase: "追",
  eat: "吃"
};

function look(e) {
  return e2c[e];
}

e = process.argv[2] // 從 process.argv 這個陣列取出第二個元素 （命令列下的參數，會在第二個原因是 node dlook cat，0是node 1是檔案名稱 2才是我們下的參數）
c = look(e);

console.log(e + " = " + c);
