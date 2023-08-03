// const promise = fetch(
//   "https://64ca8a15700d50e3c70507e4.mockapi.io/api/v1/book"
// );

// promise
//   .then((response) => {
//     console.dir(response);
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result);
//   });

// async await
// async function getBook() {
//   const response = await fetch(
//     "https://64ca8a15700d50e3c70507e4.mockapi.io/api/v1/book"
//   );
//   const results = await response.json();
//   console.log(results);
// }

// const test = getBook();
// console.dir(test);

// const promise1 = new Promise((res, rej) => {
// //   setTimeout(() => {
// //     res(23);
// //   }, 3000);
//     rej(55);
// });

// async function handPromise() {
//     try {
//       const value = await promise1;
//       console.log(value);
//     } catch (testValue) {
//       console.log(testValue);
//     }
// }

// handPromise();

// currying
// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(2, 5));

// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// console.log(multiply(2)(5))

// function loggerUtil(fileName) {
//   return function (type) {
//     return function (errorMessage) {
//       if (type === "normal") {
//         console.log(`${fileName} has error ${errorMessage}`);
//       } else {
//         console.error(`${fileName} has error ${errorMessage}`);
//       }
//     };
//   };
// }

// // currying function
// const indexFileLogger = loggerUtil("index.js");

// //
// const normalError = indexFileLogger("normal");
// const criticalLogger = indexFileLogger("critical");

// normalError("this is a error");
// normalError("this is another error");

// criticalLogger("something big broke");
// criticalLogger("something else broke");

// normal function

// loggerUtil("index.js","normal","this is a error")
// loggerUtil("index.js","normal","this is another error")



