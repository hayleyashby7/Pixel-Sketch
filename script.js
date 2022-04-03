"use strict";
const MAX_DIMENSION = 600;
let boardSize = 16;

createBoard(boardSize);
addEventListeners();

function setMaxHeightWidth(element) {
  element.style.maxHeight = `${MAX_DIMENSION}px`;
  element.style.maxWidth = `${MAX_DIMENSION}px`;
}

function setSquareSide(square, numPerSide) {
  let sideLength = MAX_DIMENSION / numPerSide;

  square.style.height = `${sideLength}px`;
  square.style.width = `${sideLength}px`;
}

function createBoard(squaresPerSide) {
  let gameGrid = document.getElementById("game-grid");

  setMaxHeightWidth(gameGrid);

  // Add board divs by rows of columns
  for (let row = 1; row <= squaresPerSide; row++) {
    for (let col = 1; col <= squaresPerSide; col++) {
      let newSquare = createSquare(row, col);
      setSquareSide(newSquare, squaresPerSide);
      gameGrid.append(newSquare);
    }
  }
}

function createSquare(row, col) {
  let newSquare = document.createElement("div");
  newSquare.classList.add("gameSquare");
  return newSquare;
}

function addEventListeners() {
  let resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", resetBoard);

  let squares = document.querySelectorAll(".gameSquare");
  squares.forEach((square) =>
    square.addEventListener("mouseover", colourSquare)
  );
}

function colourSquare(event) {
  let square = event.target;
  square.style.backgroundColor = "black";
}

function resetBoard(event) {
  let newBoardSize = prompt("Enter number of squares per side(between 1-100)");

  if (newBoardSize > 100 || newBoardSize < 1) {
    alert(`${newBoardSize} is not between 1-100`);
  } else {
    boardSize = newBoardSize;
    updateBoard();
  }
}

function updateBoard() {
  let gridStyle = document.getElementById("game-grid");
  gridStyle.style.gridTemplate = `repeat(${newBoardSize}, auto) / repeat(${newBoardSize}, auto)`;
}
