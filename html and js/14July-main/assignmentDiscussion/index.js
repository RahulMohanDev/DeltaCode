const wallId = document.querySelector("#wall_id");
const wallColor = document.querySelector("#wall_color");
const apply = document.querySelector("#apply-btn");
const reset = document.querySelector("#reset-btn");
const wallBlock = document.querySelector(".blocks-wall");

apply.addEventListener("click", () => {
  const id = wallId.value;
  const color = wallColor.value;
  // const wall = document.querySelector("#1");
  const wall = document.getElementById(id);
  wall.style.backgroundColor = color;
});

reset.addEventListener("click", () => {
  const walls = wallBlock.children;
  console.log(walls);
  for (let wall of walls) {
    wall.style.backgroundColor = "transparent";
  }
});
