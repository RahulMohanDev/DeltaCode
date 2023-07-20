// this.name = "global name";

// function test() {
//   console.log(this.name);
// }

// const obj = {
//     name: "John",
//     test: test
// }

// // obj.test();
// test();

// bind, call, apply

// function test() {
//   console.log(this.name);
// }

// // test();

// const obj = {
//     name: "John",
//     test: test
// }

// // bind

// const testBoundedToObj = test.bind(obj);
// obj.name = "Jane";
// console.dir(testBoundedToObj);
// testBoundedToObj();
// testBoundedToObj();
// testBoundedToObj();

// test();

// call
// test.call(obj);
// test();

// const person = {
//   name: "John",
// };

// function add(a, b) {
//   console.log(
//     `${this.name} is adding ${a} and ${b} and the result is ${a + b}`
//   );
// }

// add.call(person, 2, 3);

// apply
// add.apply(person, [2, 3]);

// monkey patching
// Array.prototype.sayHello = function() {
//     console.log("hello");
// };

// [1,2,3].sayHello();

// const arr = [1, 2, 3];

// arr.test = "hi"

// console.log(arr.hasOwnProperty("test"));

// console.log(arr.hasOwnProperty("[[Prototype]]"));

// const obj = {
//     name: "John",
// }

// obj.hasOwnProperty("name");

// // constructor function
// const Person = function (name) {
//     this.name = name;
// }

// // methord
// Person.prototype.sayHello = function () {
//     console.log(`Hello ${this.name}`);
// };

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}
