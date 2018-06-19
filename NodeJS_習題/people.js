var People = {
  name: "John",
  age: 30,
  print: function () {
    console.log("name=", this.name, "age=", this.age);
  }
}

People.print();
