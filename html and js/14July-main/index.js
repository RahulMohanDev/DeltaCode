// spread and rest (...)

// const person = {
//   name: "rahul",
// };
// const address = {
//   doorNo: 548,
//   area: "indranagar",
// };

// const data = { ...person, ...address };

// console.log(data);

// const test = {
//     age: 23
// }

// const testCopy = {...test};

// testCopy.age = 55;

// console.log(test)

// const test1 = {
//   name: "rahul mohan",
// };

// const test2 = {
//   name: "Eshita",
// };

// const test3 = {
//   name: "Alok",
//   age: 28,
// };

// const merge = { ...test1, ...test2, ...test3 };

// console.log(merge);

// const person = {
//   name: "Rahul Mohan",
//   address: {
//     area: "test",
//   },
// };

// const person2 = { ...person,
//     address: { ...person.address },
//     name: "Naveen"
// };

// const person2 {
//     name: "naveen"
//     address: 1000
// }

// person.address.area = "potato";

// console.log(person);
// console.log(person2);

// assignment

// const complex = {
//   person: {
//     name: "Rahul Mohan",
//     age: 27,
//     address: {
//       area: { name: "indranagar" },
//       houseNo: 546,
//     },
//   },
//   vehicle: {
//     type: "cycle",
//     brand: {
//       name: "bitwin",
//     },
//   },
// };

// const arr = [1, 2, 3];
// const arr2 = [3, 4, 5];
// const newArray = [...arr, ...arr2, 6, 7];
// console.log(newArray);

function add(...arrayOfNumber) {
  let sum = 0;
  for (let el of arrayOfNumber) {
    sum += el;
  }
  return sum;
}

// function add(arrayOfNumber) {
//     let sum = 0;
//       for (let el of arrayOfNumber) {
//         sum += el;
//       }
//       return sum;
// }

console.log("hi")
console.log(add(2, 3, 4, 5, 6, 5, 2, 34, 6));
