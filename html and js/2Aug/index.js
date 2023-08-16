// const digest = {
//   eat: () => {
//     console.log("eat food");
//   },
//   shit: () => {
//     console.log("do the thing");
//   },
// };

// const sleep = {
//   goToSleep: () => {
//     console.log("go to sleep");
//   },
// };

// class Animal {
//   constructor(isAlive) {
//     this.isAlive = isAlive;
//   }

//   gatherFood() {
//     console.log("look for food");
//   }
// }

// class Dog extends Animal {
//   constructor(isAlive, name, age) {
//     super(isAlive);
//     this.name = name;
//     this.age = age;
//   }

//   bark() {
//     console.log("bark");
//   }
// }

// Object.assign(Dog.prototype, { ...digest, ...sleep });

// class Fungus extends Animal {
//   constructor(isAlive, isLethalToHumans) {
//     super(isAlive);
//     this.isLethalToHumans = isLethalToHumans;
//   }

//   spread() {
//     console.log("spread to places");
//   }
// }

// const dog1 = new Dog(true, "tom", 3);
// console.dir(dog1);

const promise = fetch(
  "https://64ca8a15700d50e3c70507e4.mockapi.io/api/v1/book"
);

promise
  .then((response) => {
    console.dir(response);
    return response.json();
  })
  .then((result) => {
    console.log(result);
  });

// const promise = new Promise((res, rej) => {
//   res(23);
// });

// promise
//   .then((value) => {
//     console.log(value);
//     return "potato";
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   });

// const didRahulSleepEarly = true;

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("wake rahul up");
//   }, 5000);
// });

// promise1.then((res) => {
//   if (didRahulSleepEarly) {
//     return "ok";
//   }
//   new promise2 = new promise((res,rej)=>{
//     setTimeout(()=>{
//         res("wake up now at least")
//     },5000)
//   })
//   return promise2;
// }).then(()=>{
//     console.log("")
// })
