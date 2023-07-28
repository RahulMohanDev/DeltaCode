// javascript code goes here
let seconds;
let min;
let hours;
let timerId = null;

const pauseButton = document.querySelector("#pause");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

function initialButtonState() {
  pauseButton.setAttribute("disabled", true);
  stopButton.setAttribute("disabled", true);
  startButton.removeAttribute("disabled");
}

function initialize() {
  seconds = 0;
  min = 0;
  hours = 0;
  updateTimerOnUI();
  pauseButton.innerText = "pause";
  initialButtonState();
}

initialize();

function tick() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    min++;
  }
  if (min >= 60) {
    min = 0;
    hours++;
  }
}

function displayTime() {
  return `${getFormatTime(hours)}:${getFormatTime(min)}:${getFormatTime(
    seconds
  )}`;
}

function updateTimerOnUI() {
  document.querySelector("#time").innerHTML = displayTime();
}

function getFormatTime(unitValue) {
  return unitValue <= 9 ? "0" + unitValue : unitValue;
}

function start() {
  timerId = setInterval(() => {
    tick();
    updateTimerOnUI();
  }, 1000);
  startButton.setAttribute("disabled", true);
  pauseButton.removeAttribute("disabled");
  stopButton.removeAttribute("disabled");
}

function pause() {
  if (pauseButton.innerText === "pause") {
    clearInterval(timerId);
    pauseButton.innerText = "continue";
  } else {
    start();
    pauseButton.innerText = "pause";
  }
}

function stop() {
  clearInterval(timerId);
  initialize();
}
