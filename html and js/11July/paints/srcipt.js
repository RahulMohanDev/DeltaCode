const wallId = document.getElementById("wall_id");
const wallColor = document.getElementById("wall_color");
const applyBtn = document.getElementById("apply-btn");
const resetBtn = document.getElementById("reset-btn");
const blocks = document.querySelectorAll(".block");

let prevBlock = null;
let prevColor = null;

// Set the background color of the specified block
function setBlockColor(block, color) {
  block.style.backgroundColor = color;
}

// Apply the specified color to the specified block
function applyColorToBlock(id, color) {
  const block = document.getElementById(id);
  setBlockColor(block, color);
  prevBlock = block;
  prevColor = color;
}

// Apply the color to the specified block on clicking the Apply button
applyBtn.addEventListener("click", () => {
  const id = wallId.value;
  const color = wallColor.value;
  applyColorToBlock(id, color);
});

// Persist the color for the previous block and reset the background color of all blocks on clicking the Reset button
resetBtn.addEventListener("click", () => {
  if (prevBlock && prevColor) {
    setBlockColor(prevBlock, prevColor);
  }
  blocks.forEach((block) => (block.style.backgroundColor = "transparent"));
});