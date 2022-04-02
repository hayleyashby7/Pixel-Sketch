"use strict";
const MAX_DIMENSION = 600;

createBoard(16);
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
      let newSquare = document.createElement("div");
      newSquare.classList.add("gameSquare");
      newSquare.classList.add("Row-" + row);
      newSquare.classList.add("Col-" + col);
      setSquareSide(newSquare, squaresPerSide);
      gameGrid.append(newSquare);
    }
  }
}

function addEventListeners() {
  let squares = document.querySelectorAll(".gameSquare");
  squares.forEach((square) =>
    square.addEventListener("mouseover", colourSquare)
  );
}

function colourSquare(event) {}
