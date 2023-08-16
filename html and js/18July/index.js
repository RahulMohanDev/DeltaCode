// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.getAge = function () {
//     return this.age;
//   };
//   //   this.currentTime = new Date();
//   //   this.randomNumberStatic = Math.random();
//   //   Object.defineProperty(this, "randomNumber", {
//   //     // value: 12,
//   //     get: function () {
//   //       return Math.random();
//   //     },
//   //     // set: function (value) {},
//   //   });
//   //   Object.defineProperty(this, "greeting", {
//   //     get: function () {
//   //       return `Hello my name is ${this.name} and today is ${Date()}`;
//   //     },
//   //   });
//   return this;
// }

// const john = new Person("John", 27);
// console.log(john.randomNumberStatic, "random number static");
// console.log(john.randomNumberStatic, "random number static");
// console.log(john.randomNumber, "random number");
// console.log(john.randomNumber, "random number");

// // today
// const john = new Person("John", 27);
// console.log(john.getAge());

// call this.currentTime tomorrow

// Math.random();

// OOBS
// Method
// static method
// Math.round();
// Object.keys();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const john = new Person("John", 27);
// const jane = new Person("Jane", 25);
// const jack = new Person("Jack", 30);

// function average(persons){
//     let total = 0;
//     let counter = 0;
//     for(person of persons){
//         counter++;
//         total += person.age;
//     }
//     return total / counter;
// }

// Person.average()

// const persons = [john, jane, jack];
// console.log(average(persons));

// const obj = {
//   name: "John",
//   age: 27,
//   sayName: function () {
//     console.log(`Hello my name is ${this.name}`);
//   },
// };
