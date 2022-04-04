"use strict";
const MAX_DIMENSION = 600;
let boardSize = 16;

createBoard();

function setMaxHeightWidth(element) {
  element.style.maxHeight = `${MAX_DIMENSION}px`;
  element.style.maxWidth = `${MAX_DIMENSION}px`;
}

function setSquareSide(square) {
  let sideLength = MAX_DIMENSION / boardSize;

  square.style.height = `${sideLength}px`;
  square.style.width = `${sideLength}px`;
}

function createBoard() {
  let gameGrid = setGameGridSize();
  setMaxHeightWidth(gameGrid);

  // Add board divs by rows of columns
  for (let row = 1; row <= boardSize; row++) {
    for (let col = 1; col <= boardSize; col++) {
      let newSquare = createSquare(row, col);
      setSquareSide(newSquare, boardSize);
      gameGrid.append(newSquare);
    }
  }
  addEventListeners();
}

function createSquare(row, col) {
  let newSquare = document.createElement("div");
  newSquare.classList.add("gameSquare");
  newSquare.classList.add("zero_percent");
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

  switch (true) {
    case square.classList.contains("hundred_percent"): {
      //Maximum
      break;
    }

    case square.classList.contains("ninety_percent"): {
      square.classList.toggle("hundred_percent");
      break;
    }

    case square.classList.contains("eighty_percent"): {
      square.classList.toggle("ninety_percent");
      break;
    }

    case square.classList.contains("seventy_percent"): {
      square.classList.toggle("eighty_percent");
      break;
    }

    case square.classList.contains("sixty_percent"): {
      square.classList.toggle("seventy_percent");
      break;
    }

    case square.classList.contains("fifty_percent"): {
      square.classList.toggle("sixty_percent");
      break;
    }

    case square.classList.contains("fourty_percent"): {
      square.classList.toggle("fifty_percent");
      break;
    }

    case square.classList.contains("thirty_percent"): {
      square.classList.toggle("fourty_percent");
      break;
    }

    case square.classList.contains("twenty_percent"): {
      square.classList.toggle("thirty_percent");
      break;
    }

    case square.classList.contains("ten_percent"): {
      square.classList.toggle("twenty_percent");
      break;
    }

    case square.classList.contains("zero_percent"): {
      square.classList.toggle("ten_percent");
      break;
    }

    default: {
      // Do nothing - leave as is
    }
  }
}

function resetBoard(event) {
  let newBoardSize = prompt("Enter number of squares per side(between 1-100)");

  if (newBoardSize > 100 || newBoardSize < 1) {
    alert(`${newBoardSize} is not between 1-100`);
  } else {
    boardSize = newBoardSize;
    removeOldSquares();
    createBoard();
  }
}

function setGameGridSize() {
  let gameGrid = document.getElementById("game-grid");
  gameGrid.style.gridTemplate = `repeat(${boardSize}, 1fr) / repeat(${boardSize}, 1fr)`;

  return gameGrid;
}

function removeOldSquares() {
  let squares = document.querySelectorAll(".gameSquare");
  squares.forEach((square) => square.remove());
}
