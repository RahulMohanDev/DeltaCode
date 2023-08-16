const CONSTANT = {
  X: "X",
  O: "O",
  PLAYER_1: "Player1",
  PLAYER_2: "Player2",
};

let currentPlayer = CONSTANT.PLAYER_1;

let currentGameSymbol = CONSTANT.X;

let board = document.querySelector("#gameBoard");
console.log(board.id);
const buttons = board.childNodes;
for (button of buttons) {
  button.addEventListener("click", (e) => {
    playNextMove(e);
  });
}

function playNextMove(e) {
  if (e.target.innerText) {
    return;
  }
  e.target.innerText = currentGameSymbol;
  currentGameSymbol =
    currentGameSymbol === CONSTANT.X ? CONSTANT.O : CONSTANT.X;
  currentPlayer =
    currentPlayer === CONSTANT.PLAYER_1 ? CONSTANT.PLAYER_2 : CONSTANT.PLAYER_2;
}
