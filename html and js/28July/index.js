// amazon
// https://www.amazon.com/s?k=iphone&ref=nb_sb_noss_2

// create a promise
// const promiseCallback = (resolve, reject) => {
//   setTimeout(() => {
// resolve([
//   { id: 1, name: "iphone" },
//   { id: 2, name: "samsung" },
//   { id: 3, name: "nokia" },
// ]);
//   }, 3000);
// reject("something went wrong");
// };
// const promise = new Promise(promiseCallback);

// console.dir(promise);

// console.log("this is before promise");
// promise
//   .then((potato) => {
//     console.log("this is inside promise", potato);
//   })
//   .catch((error) => {
//     console.log("this is catch block", error);
//   });
// console.log("this is after promise");

// const isFromTierOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("got 8.9 cgpa");
//   }, 4000);
// });
// const hasHouse = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("5000sqft house");
//   }, 3000);
// });
// const hasCar = new Promise((resolve, reject) => {
//   //   setTimeout(() => {
//   //     resolve("honda civic");
//   //   }, 2000);
//   setTimeout(() => {
//     reject("no car, you are poor");
//   }, 2000);
// });

// const willHeGetMarried = Promise.all([isFromTierOne, hasHouse, hasCar]);

// willHeGetMarried
//   .then((result) => {
//     console.log("Yes marriage", result);
//   })
//   .catch((error) => {
//     console.log("No marriage", error);
//   });

// let time = 1;
// const timer = setInterval(() => {
//   console.log(time);
//   time++;
// }, 1000);

// setTimeout(()=>{
//     clearInterval(timer)
// },10000)

// private member using symbol

// const symbol = Symbol("test");

// class Dog {
//     #dogId;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.#dogId = 1;
//     }
// }

// const symbol1 = Symbol("test");
// const symbol2 = Symbol("test");
// console.log(symbol1);
// console.log(symbol1 === symbol2);

// const Dog = function () {
//   let dogIdSymbol = Symbol("dogId");
//   this.name = "tommy";
//   this.age = 2;
//   this[dogIdSymbol] = 1;

//   this.getDogId = function () {
//     return this[dogIdSymbol];
//   };
// };

// const dog = new Dog();
// let dogIdSymbol = Symbol("dogId");
// console.dir(dog.getDogId());

// class Batch {
//   students = [];
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }
//   addStudent(student) {
//     this.students.push(student);
//   }
//   getStudent(index) {
//     return this.students[index];
//   }
//   get newStudent() {
//     return this.students[this.students.length - 1];
//   }
// }

// const batch = new Batch("batch 1", 1);
// batch.addStudent("student 1");
// batch.addStudent("student 2");
// batch.addStudent("student 3");
// console.log(batch.newStudent);
