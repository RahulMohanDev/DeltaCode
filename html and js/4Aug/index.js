// const friends = [
//   { name: "rahul mohan", age: 27 },
//   { name: "Rohan Singh poona", age: 25 },
//   { name: "Suraj", age: 26 },
// ];

// ["rahul mohan","rohan singh poona","suraj"];

// const test = friends.map((friend) => {
//   return friend.name;
// });

// console.log(test);

// const allowedMemberNames = friends
//   .filter((friend) => {
//     if (friend.age > 25) {
//       return true;
//     } else {
//       return false;
//     }
//   })
//   .map((allowedMember) => {
//     return allowedMember.name;
//   });

// console.log(allowedMemberNames);

// write a polyfill for map ?
// (allowedMember) => {
//     return allowedMember.name;
//   }
// Array.prototype.myMap = function (mappingFunction) {
//   const newMappedArray = [];
//   for (let element of this) {
//     newMappedArray.push(mappingFunction(element));
//   }
//   return newMappedArray;
// };

// const names = friends.myMap((friend) => {
//   return friend.name;
// });

// console.log(names);

// Array.prototype.myFilter = function (fun) {
//   const newArray = [];
//   for (let element of this) {
//     if (fun(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// };

// const filteredList = friends.myFilter((el) => {
//   if (el.age > 25) {
//     return true;
//   }
// });

// console.log(filteredList);

// class ExtendedArray extends Array {
//   myFilter(fun) {
//     const newArray = [];
//     for (let element of this) {
//       if (fun(element)) {
//         newArray.push(element);
//       }
//     }
//     return newArray;
//   }
// }

// const extendedArray = new ExtendedArray();
// extendedArray.push(23, 44, 55);
// console.log(extendedArray);
// console.log(
//   extendedArray.myFilter((el) => {
//     return el > 45;
//   })
// );
//

// don't run the fun until the fun is not called for delay
// function debounce(fun, delay) {
//   let timeoutId;

//   return function (...args) {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       fun.apply(this, args);
//       timeoutId = null;
//     }, delay);
//   };
// }

// const callServer = (firstName) => {
//   console.log(`send data to server ${firstName}`);
// };

// const debounceSendToServer = debounce(callServer, 2000);

// setInterval(() => {
//   debounceSendToServer("Rahul");
// }, 1000);

function debounce(fun, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fun.apply(this, args);
      timeoutId = null;
    }, delay);
  };
}

const input = document.querySelector("#inputbox");
const div = document.querySelector("div");

const debouncedWriteToDiv = debounce(() => {
  console.log("did this even fire");
  div.innerText = input.value;
}, 3000);

input.addEventListener("keydown", () => {
  debouncedWriteToDiv();
});
