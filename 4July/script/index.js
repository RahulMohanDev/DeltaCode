const arr1 = [1, 2, 3, 4, 5, 3];
const arr2 = [6, 7, 8];

// console.log(arr1.concat(arr2));
// console.log(arr1);
// console.log(arr2);

// functional programming
// pure functions.
// const newArray = arr1.concat(arr2);

// // impure function
// arr1.reverse();

// console.log(arr1);

// console.log(arr1.toString());

// console.log(arr1.join(","));

// polyfill
// function indexOfRahul(someNumber,array) {
//     for(let i = 0;i<array.length;i++) {
//         if(array[i]===someNumber) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(arr1.indexOf(23));
// console.log(arr1.lastIndexOf(3));
// -3        //-2            //-1
// const friends = ["Rahul Mohan", "Roahn Singh", "Ankur Mondal"];

// // console.log(friends.slice(-3,2));

// friends.splice(1,0,"Eshita","Naveen","Abhishek");

// console.log(friends);

// map
// [
//   { name: "Rahul Mohan", isInvited: false },
//   { name: "Roahn Singh", isInvited: false },
//   { name: "Ankur Mondal", isInvited: false },
// ];

// console.log(
//   friends.map((friendName) => {
//     return { isAlive: true };
//   })
// );

// filter is used to reduce the size of the array
const customers = [
  { name: "test1", age: 24 },
  { name: "test2", age: 30 },
  { name: "java", age: 15 },
];

// console.log(
//   customers.filter((person) => {
//     if (person.age > 20) {
//       return true;
//     }
//     return false;
//   })
// );

// console.log(
//   customers
//     .filter((person) => {
//       if (person.age > 20) {
//         return true;
//       }
//       return false;
//     })
//     .map((person) => {
//       return person.name;
//     }).reduce((acc,next)=>{
//         return acc+1;
//     },0)
// );

// // reduce
// function reducerFunction(acc,current) {
//     return acc+current;
// }
// const number = [1,2,3,44,5,6];

// 1
// reducerFunction(0,1);
// 2
// reducerFunction(1,2);
//3
// reducerFunction(3,3);
//.....

// console.log(number.reduce(reducerFunction,100));

// const values = [
//   { ticketName: "test", priority: "low" },
//   { ticketName: "test2", priority: "high" },
//   { ticketName: "test", priority: "low" },
//   { ticketName: "test3", priority: "high" },
//   { ticketName: "NAM", priority: "low" },
// ];

// values.sort((a, b) => {
//     if(a.priority==="low" && b.priority==="high") {
//         return 1;
//     } else if (a.priority==="high" && b.priority === "low") {
//         return -1;
//     }else {
//         return 0;
//     }
// });

// console.log(values);

const numbers = [33, 2, 102, 22, 4];

numbers.sort((a, b) => {
//   return -(a - b);
     return b-a;
});
