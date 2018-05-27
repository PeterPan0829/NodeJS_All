for (i = 1; i <= 10; i++) {
  if (i === 3) continue;
  if (i === 8) break;
  console.log("i = ", i);
  // console.log("i = "+ i);   用這行　＋　和上一行　, 都可以。自己試試看唷！
}

/*
另外、 javascript 也從 C 語言那裏繼承了continue 與break 等語句，
遇到 continue 時會回到迴圈開頭，忽略後面語句。而遇到break 時則會跳出迴圈。

在上述程式中， 當 i == 3 時， 會執行continue， 繼續執行下一輪迴圈，因此不會印出i = 3。
當 i == 8 時， 會執行break 而跳出迴圈， 因此後面的 i = 8, i = 9, i = 10 都將不會印出。

執行結果：
i = 1
i = 2
i = 4
i = 5
i = 6
i = 7
*/
