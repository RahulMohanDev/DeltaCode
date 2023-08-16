// javascript code goes here
let colorBox = document.querySelector("#colorbox");
let colorChange = document.querySelector("#colorchange");
let fontSize = document.querySelector("#fontsize");
let underline = document.querySelector("#underline");
let italic = document.querySelector("#italic");
let bold = document.querySelector("#bold");
let list = document.querySelector("#list");
let textStyle = document.querySelector("#text-container");
let getStyle = document.querySelector("#getstyle");
let cssProps = document.querySelector("#css-props");

// Change text color
colorChange.addEventListener("click", function () {
  textStyle.style.color = colorBox.value;
});

// Change font size
fontSize.addEventListener("input", function () {
  textStyle.style.fontSize = fontSize.value + "px";
});

// Change text styles
underline.addEventListener("click", function () {
  if(textStyle.style.textDecoration === "underline")
    textStyle.style.textDecoration = "none";
   else
     textStyle.style.textDecoration = "underline";
});

italic.addEventListener("click", function () {
  if(textStyle.style.fontStyle === "italic")
     textStyle.style.fontStyle = "normal"
  else
     textStyle.style.fontStyle = "italic"
});

bold.addEventListener("click", function () {
  if(textStyle.style.fontWeight === "bold")
    textStyle.style.fontWeight = "normal";
   else
     textStyle.style.fontWeight = "bold"
});

// Change font family
list.addEventListener("change", function () {
  textStyle.style.fontFamily = list.value;
});

// Get CSS properties
getStyle.addEventListener("click", function () {
  let props = window.getComputedStyle(textStyle);

  let cssText =
    `color: ${textStyle.style.color};
    font-size: ${fontSize.value}px;
    text-decoration: ${textStyle.style.textDecoration === "underline" ? "underline" : "none"};
    font-style: ${textStyle.style.fontStyle === "italic" ? "italic" : "none"};
    font-weight: ${textStyle.style.fontWeight === "bold" ? "bold" : "none"};
    font-family: ${list.value};`;
  cssProps.textContent = cssText;
});