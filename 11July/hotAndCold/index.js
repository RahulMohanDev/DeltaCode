// javascript code goes here
function displayRandomNumber() {
    const p = document.querySelector("#num");
    const randomNumber = Math.floor(Math.random()*41)-20;
    p.innerText = randomNumber;
}