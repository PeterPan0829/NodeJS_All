var circle = {
  r: 3, //半徑是3
  area: function () { //定義 area 函數
    return 3.14 * this.r * this.r; //所謂的 this 就是指向現在的單一物件 circle
  }
}
console.log("circle.r=%d", circle.r);
console.log("circle.area()=%d", circle.area());
