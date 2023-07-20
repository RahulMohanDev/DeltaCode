/* type cohesion */

// const a = "23";
// const b = 23;
// const c = b + a ;
// console.log(typeof c);

// const a = "this";
// const nan = +a;
// console.log(nan+1);

/* Array */

// const friends = ["ram", "shyam", "mohan", "sohan"];
// console.log(friends[0]);
// console.log(friends.length);
// console.dir(friends)
// console.log(friends.1);

/* Array Methods */

// const friends = ["ram", "shyam", "mohan", "sohan"];
// // friends.push("rohan");
// // friends.pop();
// friends.shift();
// console.log(friends);
// friends.unshift("rohan");
// console.log(friends);

// console.log(Object.keys(friends));

/* function */
// expression vs declaration
// assignment
// let a = 10;

// function declaration
// function test() {
//     console.log("test");
// }

// function expression
// const test2 = function () {
//     console.log("test2");
// };

//  can only be used as expression
// arrow function

// const test3 = () => {};
// arrow function with one parameter and it returns the value
// shortest arrow function
// const test = (greeting) => {
//   return 23;
// };
// const test2 = (greeting) => 23;

// // zero parameter
// const test3 = () => 23;

// // multiple parameter
// const add = (a, b) => a+b;

/* paseInt and paseFloat */
// const a = "23.5";
// // const b = parseInt(a);
// const b = parseFloat(a);
// console.log(b);

/* bitwise operator */
// const a = 2; // 10
// const b = 1; // 01
// console.log(a | b);

// logical operator
// const a = 2;
// const b = 1;
// if(a && b) {
//     console.log("hello");
// }

// shot circuit evaluation
// const name = "John";
// let noOfDrinks = 0;
// const isEighTeen = true;

// function serveDrinks() {
//   noOfDrinks = noOfDrinks + 1;
//   return true;
// }

// let isAllowedToDrink = isEighTeen && serveDrinks();

// console.log(isAllowedToDrink);

// or

// let store1 = ()=>{
//     console.log("store1");
//     return false;
// };

// let store2 = ()=>{
//     console.log("store2");
//     return "store2";
// };

// const store = store1() || store2();

// const a = 3;
// const b = false;
// const result = a && b;
// console.log(result);

/* ternary operator */

// const a = 2;
// const b = 1;
// const result = a > b ? () => {
//     console.log("a is greater");
// } : () => {
//     console.log("b is greater");
// };

// result();

/* hoisting */

// test();

// console.log(b);
// TDZ
// console.log(test2);
// test2();

// var a = 2;
// let b = 2;
// // console.log(b);
// const c = 2;

// // function declaration
// function test() {
//   console.log("test");
// }

// // function expression
// var test2 = function () {
//     console.log("test2");
// };


// creation phase

//  memory allocation

//  a = undefined
//  b = undefined
//  c = undefined
//  test = function
//  test2 = undefined


// 2 const
// 1 function
// 1 var
// 1 let

// execution phase

// running the code line by line



// a= 5;
// console.log(a);

console.log(a);

let a ;

