let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';

let moveList = ['Rock', 'Paper', 'Scissors'];

let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

function calcResult(move1, move2) {
  var result = move1 - move2;
  if (result == 1 || result + 3 == 1) {
    return winMsg;
  }
  else if (result == 2 || result + 3 == 2) {
    return loseMsg;
  }
  else {
    return tieMsg;
  }
}
function randomMove() {
  return Math.floor(Math.random() * 3);
}

function startGame() {
  statusDisplay.textContent = 'Choose!';
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = moveList[i];
    buttons[i].style.display = "inline-block";
    buttons[i].addEventListener("click", endGame);
  }
  moveDisplays.forEach((moveDisplay) => (moveDisplay.style.display = "none"));
}

function endGame(event) { }

startGame();
