// const heading = document.getElementsByTagName("h1");
// you get a htmlCollection or nodeList
// it will have a length property
// (it will have an iterator) you can use it in an of loop
// listOfHeadings[0]
// const listOfHeadings = document.getElementsByTagName("h2");
// const listOfHeadingsArray = Array.from(listOfHeadings);
// console.dir(listOfHeadingsArray);
// console.dir(listOfHeadings);
// for (let headings of listOfHeadings) {
//   console.log(headings);
// }

// const classOfHeadings = document.getElementsByClassName("book");
// console.log(classOfHeadings);

// const book = document.querySelectorAll(".book");
// // console.dir(book);
// const bookArray = Array.from(book);
// console.dir(bookArray);

// const heading = document.querySelector("h1");
// heading.innerText = "Hi from js";

// friends = ["Rahul", "rohan"];

// const div = document.querySelector("div");
// div.innerText = `hi`;
const friends = ["rahul mohan", "rohan singh"];

const friendsContainer = document.createElement("div");
const ol = document.createElement("ol");

for (let friend of friends) {
  const li = document.createElement("li");
  li.innerText = friend;
  ol.appendChild(li);
}
friendsContainer.appendChild(ol);

const body = document.querySelector("body");
// body.appendChild(friendsContainer);

const redBox = document.querySelector("#appending");

const h1 = document.createElement("h1");
h1.innerText = "some value";

redBox.insertAdjacentElement("afterend", h1);


// selecting elements in dom
// creating elements in dom
// changing elements properties in dom 


// events and form
