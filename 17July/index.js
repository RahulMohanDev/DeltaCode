// function test(newFunction) {
//   return () => {
//     newFunction();

function test() {}
//   };
// }

// function add(a,b) {
//     return a+b;
// }

// add(2,3);

// function abc(name) {
//   console.log(name + "Hello World");
// }

// test(abc);

//  two conditions
// 1. function should be able to be passed as an argument
// 2. function should be able to be returned from another function

// function sayHelloMaker(name) {
//    const b = "test"
//    const a = function() {
//     const innerVariable = "Hello World";
//     console.log("Hello " + name + b);
//   };
//   return a;
// }

// test();

// console.dir(sayHelloMaker);

// const sayHello = sayHelloMaker("John");
// sayHello();

// const firstName = "John";
// const greeting = `hi my name is ${firstName}, and I am ${20 + 7} years old`;

// const obj = {
//     name: "John",
//     age: 27,
// };

// ES16 - ES2021
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// constructor function
// they use this to refer to the new object
// function Person(name, age) {
//     // const this = {};
//     // we will revisit this later when we learn about prototypes
//     this.name = name;
//     this.age = age;
//     return this;
// }

// // they are called with new keyword
// const john = new Person("John", 27);

// console.log(john);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     return this;
// }

// console.log(this);

// function test() {
//     console.log(this);
// }

// test();

// this.name = "window Name"

// obj.sayName();
// const functionCopy = obj.sayName;
// functionCopy();
// obj.functionCopy();

// this is obj
// obj.sayName();

// const functionCopy = obj.sayName;
// functionCopy();

// test.potato();

// test2.tomato();

// its is function;
// const a = test2.potato;
// a();

// this.name = "window Name";

// function sayName() {
//   console.log(`Hello my name is ${this.name}`);
// }

// const obj = {
//   name: "John",
//   age: 27,
//   sayName: sayName,
// };

// obj.sayName();

// constructor function
const Person = function (name, age) {
  this.name = name;
  this.age = age;
  return this;
};

const john = new Person("John", 27);

// constructor function
console.dir(john);

// factory function
const createPerson = function (name, age) {
  return {
    name: name,
    age: age,
  };
};

const jane = createPerson("Jane", 27);

// factory function
console.dir(john instanceof Person);
console.dir(jane instanceof createPerson);
