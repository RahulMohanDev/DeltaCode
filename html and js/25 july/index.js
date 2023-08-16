// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log("I am eating");
//   }

//   sleep() {
//     console.log("I am sleeping");
//   }
// }

// class Dog extends Animal {
//     constructor(name, age, breed) {
//         super(name, age);
//         this.breed = breed;
//     }

//     bark() {
//         console.log("I am barking");
//     }
// }

// const arr = ["Rohan singh poona", "ankur mondal", "saurabh"];

// // const friend1 = arr[0];
// // const friend2 = arr[1];

// // array destructuring
// const [friend1, ...restOfTheFriends] = arr;

// console.log(friend1, restOfTheFriends);

// const obj = {
//   name: "Rohan",
//   age: 23,
// };

// const { name } = obj;

// console.log(potato);

//  50 elemets
// const arr = ["potato", "tomato", "cucumber", "onion", "cabbage"];
// const [first, ...testOfTheArray] = arr;
// console.log(first, testOfTheArray);
// const [first, ...rest , ...test] = arr;

// const obj = {
//   name: "Rohan",
//   age: 23,
//   address: {
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//   },
// };

// const { name: firstName } = obj;

// const firstName = obj.name;

// const potato = obj.firstName;
// const firstName = obj.firstName;

// const { firstName: potato, address } = obj;

// console.log(potato, address);

// obj = {};

// Object.defineProperty(obj, "firstName", {
//   get: function () {
//     console.log("getting name");
//     return "rahul";
//   },
// });

// console.log(obj.firstName);

//  getter setter tomorrow
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   set age(newAge) {
//     if (newAge < 0) {
//       throw new Error("Age cannot be negative");
//       return;
//     } else {
//       this.age = newAge;
//     }
//   }

//   eat() {
//     console.log("I am eating");
//   }

//   sleep() {
//     console.log("I am sleeping");
//   }
// }

// const dog = new Animal("Tommy", 2);
// dog.age = -10;

// console.log(dog.age);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log("I am eating");
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  // overriding
  eat() {
    console.log("I am eating and a dog");
  }

  bark() {
    console.log("I am barking");
  }
}
