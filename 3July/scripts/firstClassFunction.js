// function as an argument
// function abc (test) {
//     test();
//     return;
// }

// function randomFunction () {
//     console.log("this is a random function");
// }

// abc(randomFunction);

// you can also return a function

// function robot(instruction) {
//     let someJob = null;
//     switch (instruction) {
//         case 1:
//             someJob = function () {
//                 console.log("say hi ");
//             }
//             break;
//         case 2:
//             someJob = function() {
//                 console.log("say bye");
//             }
//             break;
//     }
//     return someJob;
// }

// function door() {
//     const fun = robot(1);
//     fun();
// }

// door();

// const a = function () {
//     console.log("hi");
// }

// function test() {
//     return 23;
// }

// const b = test();

// function joinAt9() {
//   console.log("go to newton join my class");
// }

// function joinAt4() {
//   console.log("join at 4 for extra class");
// }

// // function eshita(instruction) {
// //     // she will run it when needed
// //     instruction();
// // }

// eshita(joinAt9);

// HOF

// function higherOrderConsoleLog(fileName, loggerFunction = console.log) {
//   return function potato(message) {
//     loggerFunction(fileName + ": " + message);
//   };
// }

// const logger = higherOrderConsoleLog("firstClassFunction.js");

// const fileName = "firstClassFunction.js";

// logger("Hi testing my new logger");
// // console.log(fileName+" Hi testing my new logger")

// // logger("will it still know ?")
// console.log(fileName+ "will it still know ?")

// "java instructor" 
// "javascript instructor" 
// testInstructor =instructorHigherOrderFunction(instructor) {

// }

testInstructor("teach xyz");
// java instructor says: teach xyz 
// ++ marks
// javascript instructor Rahul Mohan says: 
