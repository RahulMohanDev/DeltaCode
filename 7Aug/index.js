// function throttle(callback, delay) {
//   let wait = false;

//   //   rest parameter
//   return (...args) => {
//     if (wait) {
//       return;
//     }
//     callback.apply(this, args);
//     // spread parameter.
//     // callback(...args);
//     wait = true;
//     setTimeout(() => {
//       wait = false;
//     }, delay);
//   };
// }

// const normalFunction = () => {
//     console.log("I will only be called for 3 sec");
//   }

// const throttledFunction = throttle(normalFunction, 3000);

// setInterval(()=>{
//     throttledFunction();
// },1000)

// this in arrow function

// const arrow = () => {
//   // window or global
//   console.log(this.name);
// };

// function normalFunction() {
//   console.log(this.name);
// }

// obj = {
//   name: "potato",
//   test : {
//     name: "bounded name",
//   },
//   arrow: arrow,
//   normalFunction: normalFunction,
// };

// test = {
//   name: "bounded name",
// };

// obj.arrow();
// obj.normalFunction();

// arrow.call(test);
// normalFunction.call(test);

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   bark() {
//     console.log(`${this.name} barked`);
//   }

//   barkAfterSec(sec) {
//     // const boundedBark = this.bark.bind(this);
//     // lexical this
//     setTimeout(() => {
//       console.log(`${this.name} barked`);
//     }, sec * 1000);
//   }
// }

// const dog1 = new Dog("potato", 10);
// dog1.barkAfterSec(2);

// function test() {
//   console.log(`${this.name}`);
// }

// test();


// callback function