let counter = 1;

const clickHandler = () => {
    let display = document.getElementById("onButtonClick");
    display.innerHTML = "You clicked me " + counter + " times";
    counter += 1;
}

const debounce = (callbackFn, wait) => {
    // Write your code here
    let id;
    return (...args) => {
        clearTimeout(id);
        id = setTimeout(() => { callbackFn.apply(this, args); }, wait);
    };
}


document.getElementById('myButton').addEventListener('click', debounce(clickHandler,1000) );