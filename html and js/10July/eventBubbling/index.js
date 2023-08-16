//  fetch
const pTag = document.querySelector("p");
const divTag = document.querySelector("div");
const body = document.querySelector("body");

// pTag.addEventListener("click", (e) => {
//   console.log("P: click was bubbled");
//   console.dir(e.target);
//   console.dir(e.currentTarget);
// });

// divTag.addEventListener("click", (e) => {
//   console.log("div: click was bubbled");
//   console.dir(e.target);
//   console.dir(e.currentTarget);
// });

// body.addEventListener("click", (e) => {
//   console.log("body: click was bubbled");
//   console.dir(e.target);
//   console.dir(e.currentTarget);
// });

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

const cal = document.querySelector("#cal");
cal.addEventListener("click", (e) => {
  const operation = e.target.innerText;
  const input1 = Number.parseInt(document.querySelector("#input1").value);
  const input2 = Number.parseInt(document.querySelector("#input2").value);
  let result = 0;
  if (operation === "+") {
    result = input1 + input2;
  } else if (operation === "-") {
    result = input1 - input2;
  }
  const resultInput = document.querySelector("#result");
  resultInput.value = result;
});
