var People = {
  name: "John",
  age: 30,
  print: function () {
    console.log("name=", this.name, "age=", this.age); // 所謂的 this 就是指向現在的單一物件 Peopel
  }
}

People.print();
