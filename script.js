const cells = document.getElementsByClassName("items");
const playerWon = document.getElementById("player-won");

const render = () => {
  let j = 0;
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (cells[i].innerHTML != "") {
        return;
      }

      if (j % 2 === 0 && playerWon.innerHTML == "") {
        cells[i].innerHTML = "X";
      } else if (j % 2 === 1 && playerWon.innerHTML == "") {
        cells[i].innerHTML = "O";
      }
      game();

      j++;
      
      if(j == 9 && playerWon.innerHTML == "")
    playerWon.innerHTML = "DRAW"
    });
  }
};

const game = () => {
  if (
    cells[0].innerHTML == "X" &&
    cells[1].innerHTML == "X" &&
    cells[2].innerHTML == "X"
  ) {
    playerWon.innerHTML = "Player 1 Won";
  }
  if (
    cells[0].innerHTML == "O" &&
    cells[1].innerHTML == "O" &&
    cells[2].innerHTML == "O"
  ) {
    playerWon.innerHTML = "Player 2 Won";
  }
  if (
    cells[0].innerHTML == "X" &&
    cells[3].innerHTML == "X" &&
    cells[6].innerHTML == "X"
  ) {
    playerWon.innerHTML = "Player 1 Won";
  }
  if (
    cells[0].innerHTML == "O" &&
    cells[3].innerHTML == "O" &&
    cells[6].innerHTML == "O"
  ) {
    playerWon.innerHTML = "Player 2 Won";
  }
  if (
    cells[6].innerHTML == "X" &&
    cells[7].innerHTML == "X" &&
    cells[8].innerHTML == "X"
  ) {
    playerWon.innerHTML = "Player 1 Won";
  }
  if (
    cells[6].innerHTML == "O" &&
    cells[7].innerHTML == "O" &&
    cells[8].innerHTML == "O"
  ) {
    playerWon.innerHTML = "Player 2 Won";
  }
  if (
    cells[2].innerHTML == "X" &&
    cells[5].innerHTML == "X" &&
    cells[8].innerHTML == "X"
  ) {
    playerWon.innerHTML = "Player 1 Won";
  }
  if (
    cells[2].innerHTML == "O" &&
    cells[5].innerHTML == "O" &&
    cells[8].innerHTML == "O"
  ) {
    playerWon.innerHTML = "Player 2 Won";
  }
  if (
    cells[0].innerHTML == "X" &&
    cells[4].innerHTML == "X" &&
    cells[8].innerHTML == "X"
  ) {
    playerWon.innerHTML = "Player 1 Won";
  }
  if (
    cells[0].innerHTML == "O" &&
    cells[4].innerHTML == "O" &&
    cells[8].innerHTML == "O"
  ) {
    playerWon.innerHTML = "Player 2 Won";
  }
  if (
    cells[2].innerHTML == "X" &&
    cells[4].innerHTML == "X" &&
    cells[6].innerHTML == "X"
  ) {
    playerWon.innerHTML = "Player 1 Won";
  }
  if (
    cells[2].innerHTML == "O" &&
    cells[4].innerHTML == "O" &&
    cells[6].innerHTML == "O"
  ) {
    playerWon.innerHTML = "Player 2 Won";
  }
  if (
    cells[1].innerHTML == "X" &&
    cells[4].innerHTML == "X" &&
    cells[7].innerHTML == "X"
  ) {
    playerWon.innerHTML = "Player 1 Won";
  }
  if (
    cells[1].innerHTML == "O" &&
    cells[4].innerHTML == "O" &&
    cells[7].innerHTML == "O"
  ) {
    playerWon.innerHTML = "Player 2 Won";
  }
  if (
    cells[3].innerHTML == "X" &&
    cells[4].innerHTML == "X" &&
    cells[5].innerHTML == "X"
  ) {
    playerWon.innerHTML = "Player 1 Won";
  }
  if (
    cells[3].innerHTML == "O" &&
    cells[4].innerHTML == "O" &&
    cells[5].innerHTML == "O"
  ) {
    playerWon.innerHTML = "Player 2 Won";
  }
};

// const draw = () => {
//   if (cells.length == arraymaxvalues()) playerWon.innerHTML = "DRAW";
// };

render();
