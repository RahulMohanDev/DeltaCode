/* Deleting a key from object */

//   name: "John",
//   age: 27,
//   friends: ["Tom", "Jerry"],
// };

// obj.isMarried = true;

// delete obj.isMarried;

// console.log(obj);

/* Enumeration of object */

// you call amazon api
// const amazon = {
//   cart: [
//     {
//       name: "potato",
//       price: 10,
//       quantity: 2,
//     },
//     {
//       name: "tomato",
//       price: 20,
//       quantity: 3,
//     },
//   ],
//   accountBalance: 100,
// };

// Object.defineProperty(amazon, "accountNumber", {
//   value: 1234567890,
//   enumerable: false,
// });

// for (key in amazon) {
//   console.log(key);
// }

// console.log(amazon);

// console.log(Object.keys(amazon));
// console.log(Object.values(amazon));
// console.log(Object.entries(amazon));

/* Prototype */

const Person = function (name, age) {
  // happens here 
  this.name = name;
  this.age = age;
};

Person.prototype.sayName = function () {
  console.log(`Hello my name is ${this.name}`);
};

// every function has a prototype property

// console.dir(Person);

// every object has a __proto__/[[Prototype]] property
// const obj = {
//     name: "John",
// };

// console.dir(obj);

const john = new Person("John", 27);
const tom = new Person("Tom", 30);
console.dir(john);
console.dir(tom);
john.sayName();
