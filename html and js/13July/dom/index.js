// to find things.

// const listOfH1 = document.getElementsByTagName("h1");
// console.log(listOfH1);
// const id = document.getElementById("test");
// const listOfClasses = document.getElementsByClassName("button");
// console.log(className);
// console.log(className.map(()=>{}));
// html collection or node list
// for(let element of listOfClasses) {
//     console.log(element);
// }
// console.log(listOfClasses.length);
// const arrayOfClasses = Array.from(listOfClasses);
// arrayOfClasses.map();

// const car = {
//     name: "potato"
// };
// const car2 = car;

// to change things.

// new
// const firstH1 = document.querySelector("h1");
// const listOfH1Node = document.querySelectorAll("h1");
// console.log(listOfH1Node);

// changing content of div
// const test1 = document.querySelector("#test1");
// test1.innerText = "hi"

// change the value of input element
// const firstName = document.querySelector("#name");
// firstName.value = "Rahul";
// console.log(firstName.value)

// add

// const h2 = document.createElement("h2");
// h2.innerText = "Hi I am a h2";
// const createElementDiv = document.querySelector("#createElement");
// createElementDiv.appendChild(h2);

// events listen to events
const button = document.querySelector("#addTodo");

button.addEventListener("click", () => {
  //   console.log("button clicked");
  const todo = document.querySelector("#todo");
  const newTask = document.createElement("li");
  newTask.innerText = todo.value;
  newTask.addEventListener("click",(e)=>{
    console.log("click");
    const clickedElement = e.target;
    clickedElement.classList.toggle("completed");
  })
  const listOfTodo = document.querySelector("#listOfTodo");
  const children = listOfTodo.children;
  children[0].appendChild(newTask);
});



