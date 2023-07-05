// const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// console.log(regex.test("test@gmail.com"));

// tag 

// const listOfh2 = document.getElementsByTagName("h2");

// const h1 = document.getElementById("test");

// const list = document.getElementsByClassName("button");

const element = document.querySelector("h2");
const elements = document.querySelectorAll("h2");
console.log(elements);







// node list or html collection
// console.log(listOfh2);
// console.log(listOfh2.length);
// for(let element of listOfh2) {
//     console.log(element);
// }
// const htmlCollectionArray = Array.from(listOfh2);
// console.log([1,23]);



// h1.innerText = "This was added by js";
// h1.innerText = h1.innerText + " this was added by js"; 


const obj = {
    name: "rahul Mohan"
}

//  dot notation and bracket notation
const keyValue = "name";

obj[keyValue];
obj.name;


// typeOf
typeof "test"
-(-1);
