/*
第二種寫法是一個定義圓形 circle 的物件。
模組定義：circle.js
*/

var PI = 3.14;
Circle = function (radius) {
  this.radius = radius
  this.area = function () {
    return PI * this.radius * this.radius;
  }
};
module.exports = Circle;
