function swapTheme() {
  const app = document.querySelector("#app");
  const button = document.querySelector("#swap");
  console.log(app, button);
  app.className = app.className == "day" ? "night" : "day";
  button.className =
    button.className == "button_day" ? "button_night" : "button_day";
}
