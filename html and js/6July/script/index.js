// // selecting button to click and change content.
// const button = document.querySelector("#changeButton")
// // always use arrow functions for callbacks.
// const id = button.addEventListener("dblclick",()=>{
//     const h1 = document.querySelector("h1");
//     h1.innerText="Now I can change it"
// })

// const MAX_SUBMISSION_DAY = 5;
// let noOfDaysFromCreation = parseInt(
//   prompt("how many from assignment creation")
// );
// if (noOfDaysFromCreation > MAX_SUBMISSION_DAY) {
//   alert("sorry you are late");
// } else {
//   alert(
//     "you have " + (MAX_SUBMISSION_DAY - noOfDaysFromCreation) + " remaining"
//   );
// }

const addTaskButton = window.document.querySelector("#addTaskButton");
// console.dir(addTaskButton);
console.log(1);

addTaskButton.addEventListener("click", () => {
  console.log(2);
  const input = document.querySelector("#taskInput");
  // alert(input.value);
  const newTsk = document.createElement("li");
//   <li><li>
  newTsk.innerText = input.value;
//   <li> test <li>
  const list = document.querySelector("#list");
  list.appendChild(newTsk);
});

console.log(3);

// const a = "hi";
// querrySelector(a);

// function querrySelector(a) {
//     const person = new Person("rahul mohan",23);
//     return person;
//
// }

// console.log("hi")


