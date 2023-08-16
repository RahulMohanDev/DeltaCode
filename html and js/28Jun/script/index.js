// creation phase
// execution phase
fun();
console.log(c);
console.log(a);
fun2();


// function def
function fun() {
    console.log("hi this is fun function")
};

// this we will discuss later
// 2015 ES6
// variable deceleration
let a;
a = "test2"
const b = "test2"
var c = "test3"; 

// function expression
const fun2 = ()=>{
    console.log("this is another way of creating functions")
};

const fun3 = function test() {
    console.log("this is also a function expression")
}





fun5(); 
// undefined();


// var fun5 = function (){
//     console.log("this is a function expresion")
// }

// var fun5 = ()=>{
//     console.log("get 1000 rs");
// }

// fun5();

// 23; 
// ()=>{
//  console.log("hi");
// };

// rules about var
// 1) will be hoisted;
// 2) can be redefined;
// 3) also changes its value;
// 4) when hoisted it will have a value of undefined;
// 5) its is functionally scoped;
// var test; 
// var test;

// var test2 = 23;
// function fun() {
//     var test2 = 55;  
// }
// fun();

// console.log(test2);


// function add(a=0,b=0) {
//     console.log(a+b);
// }

// add(1);

// let and const
// block scoped
// if(true) {
//     let age = 27;
// }

// console.log(age);

for(let i =0;i<5;i++) {}
console.log(i);
