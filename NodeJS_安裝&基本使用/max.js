/*

JS 的 方法 method、function：
C、 Java 在開頭都要加上型態 EX: static int Print_Number() { .....};

JS 是弱型態直接function max(a, b) { ...}　就好。

*/

function max(a, b) {
  if (a > b)
    return a;
  else
    return b;
}

m = max(9, 8);
console.log("max(9,8)=" + m);


/*

在此必須說明一點， 函數呼叫時， 參數的傳遞與名稱無關， 而是與參數的位置有關。
舉例而言， 上面我們用 max(9, 5) 呼叫 max 函數， 此時 a, b 分別會帶入 a = 9, b = 5 的值進去， 因此判斷式會得到

if (9 > 5) return 9;
於是會傳回 9.
但是如果我們用下列的呼叫方式， 那麼就會得到 z = 7。
x = 3;
y = 7;
z = max(x, y); // 此時 x 會代入 a, y 會代入 b 於是得到 max(x,y) = max
(3, 7) = 7

假如呼叫時有 a, b 等變數， 也不會因為名稱相同而代入， 而是按照位置填入， 舉例而言， 在以下程式中，
a = 8;
b = 2;
c = max(b, a); // 此時 b=2 會代入參數 a, 而 a=8 會代入參數 b 於是得到 m
ax(b, a) = max(2, 8) = 8

總而言之， 函數是根據呼叫時的位置代入的， 而非根據名字。

*/
