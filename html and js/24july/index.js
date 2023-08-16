// const id = setTimeout(() => {
//   // fun 1
//   console.log("this will be canceled");
// }, 0);

// clearTimeout(id);

// // web api
// // setTimeout(() => {
// //   // fun 2
// //   console.log("Hello World 2");
// // }, 0);

// console.log("I am first");

// json sting
// const json = '{"age": 27,"name": "Rahul Mohan","isStupid": true';
// json.age
// const jsonObject = JSON.parse(json);
// console.log(jsonObject.age);

// oject to json
// const obj = {
//   age: 27,
//   name: "Rahul Mohan",
// };

// const jsonString = JSON.stringify(obj);
// console.log(jsonString);

// const obj = {
//   age: 27,
//   name: "Rahul Mohan",
// };

// const test = () => {
//   console.log(this.name);
// };

// test.call(obj);

// const Animal = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// Animal.prototype.eat = function () {
//   console.log("I am eating");
// };
// Animal.prototype.sleep = function () {
//   console.log("I am sleeping");
// };

// // new animal = new Animal("Tommy", 2);

// const Dog = function (name, age, breed) {
//   // calling super
//   Animal.call(this, name, age);
//   console.dir(this);
//   this.breed = breed;
//   // super()
// };

// // new Dog("Tommy", 2, "Pug");
// // [[prototype]] = Dog.prototype

// // // Dog[[prototype]] = Animal.prototype
// console.dir(Dog.prototype, "old Dog.prototype");
// // consturctor link is broken
// Dog.prototype = Object.create(Animal.prototype);
// // link is correct constructor is missing
// // console.dir(Dog.prototype, "new Dog.prototype");
// // resetting constructor
// Dog.prototype.constructor = Dog;
// // console.dir(Dog.prototype, "new Dog.prototype");

// Dog.prototype.bark = function () {
//   console.log("I am barking");
// };

// const dog = new Dog("Tommy", 2, "Pug");
// console.dir(dog);
// dog.eat();
// dog.sleep();
// dog.bark();

//

// const bapp = {
//   name: "Mohan",
// };

// const person = Object.create(bapp);
// person.name = "Rahul";
// console.dir(person);

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static eat() {
        console.log("I am eating");
    }

    sleep() {
        console.log("I am sleeping");
    }
}

// class Dog extends Animal {
//     constructor(name, age, breed) {
//         super(name, age);
//         this.breed = breed;
//     }

//     bark() {
//         console.log("I am barking");
//     }
// }
