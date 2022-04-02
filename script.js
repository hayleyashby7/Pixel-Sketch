"use strict";

createBoard(16, 16);

function createBoard(numRows, numCols) {
  let gameGrid = document.getElementById("game-grid");

  // Add board divs by rows of columns
  for (let row = 1; row <= numRows; row++) {
    for (let col = 1; col <= numCols; col++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("gameSquare");
      newSquare.classList.add("Row-" + row);
      newSquare.classList.add("Col-" + col);
      newSquare.textContent = row + " , " + col;

      gameGrid.append(newSquare);
    }
  }
}
