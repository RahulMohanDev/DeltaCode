// const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const email = prompt("please enter your email");

// if (reg.test(email)) {
//   console.log("that is a valid email");
// } else {
//   console.log("this is not a valid email");
// }
let firstName;
if (!localStorage.getItem("username")) {
  firstName = prompt("hi user what is your name");
  localStorage.setItem("username", firstName);
  console.log(`welcome to the platform ${firstName}`);
} else {
  firstName = localStorage.getItem("username");
  console.log(`Welcome back ${firstName}`);
}

function logout() {
  localStorage.removeItem("username");
}
