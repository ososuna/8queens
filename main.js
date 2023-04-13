// define a variable to keep track of the solutions
let solutions = [];

// define a function to check if a given position is safe
function isSafe(board, row, col) {
  // check the row
  for (let i = 0; i < col; i++) {
    if (board[row][i] === 1) {
      return false;
    }
  }

  // check the upper diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) {
      return false;
    }
  }

  // check the lower diagonal
  for (let i = row, j = col; j >= 0 && i < board.length; i++, j--) {
    if (board[i][j] === 1) {
      return false;
    }
  }

  // if the position is safe, return true
  return true;
}

// define a function to solve the problem using backtracking
function solveQueens(board, col) {
  // base case: if all queens are placed, add the solution to the solutions array and return
  if (col >= board.length) {
    solutions.push(board.map(row => row.slice()));
    return;
  }

  // try placing a queen in each row of the current column
  for (let i = 0; i < board.length; i++) {
    if (isSafe(board, i, col)) {
      board[i][col] = 1;
      solveQueens(board, col + 1);
      board[i][col] = 0;
    }
  }
}

// define a function to print the solutions
function printSolutions(solutions) {
  for (let i = 0; i < solutions.length; i++) {
    console.log(`Solution ${i+1}:`);
    for (let j = 0; j < solutions[i].length; j++) {
      console.log(solutions[i][j].join(" "));
    }
    console.log("");
  }
}

// initialize an empty 8x8 chessboard
let board = new Array(8).fill(null).map(() => new Array(8).fill(0));

// solve the problem
solveQueens(board, 0);

// print the solutions
printSolutions(solutions);
