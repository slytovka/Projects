

var NUM_BOARDS = 9;
var NUM_ROWS = 3;
var NUM_COLS = 3;
var EMPTY_CELL = '';

// boards contains all of our TTT boards
var boards = new Array(NUM_BOARDS);

function createBoards() {
  for (var i = 0; i < NUM_BOARDS; i++) {
    var board = boards[i];
    for (var row = 0; row < NUM_ROWS; row++) {
      board[row] = new Array(NUM_COLS);
      for (var col = 0; col < NUM_COLS; col++) {
        board[row][col] = EMPTY_CELL;
      }
    }
  }
  console.log('boards:' + JSON.stringify(boards));
}

function render() {
  for (var boardNum = 0; boardNum < NUM_BOARDS; boardNum++) {
    var board = boards[boardNum];
    for (var row = 0; row < NUM_ROWS; row++) {
      for (var col = 0; col < NUM_COLS; col++) {
        var cellValue = board[row][col];
        $('#' + boardNum + '-' + row + '-' + col).addClass(cellValue);
      }
    }
  }
}

function checkForWinnerSmallBoard(board) {
  // checks for a winner horizontally
  for (var row = 0; row < NUM_ROWS; row++) {
    if (board[row][0] !== EMPTY_CELL &&
        board[row][0] === board[row][1] &&
        board[row][0] === board[row][2]) {
      return board[row][col];
    }
  }
  // TODO: check for winner vertical

  // TODO: check for diagonals

  return EMPTY_CELL;
}

function checkForWinnerBigBoard() {
  for (var i = 0; i < NUM_BOARDS; i++) {
    var winner = checkForWinnerSmallBoard(boards[i]);
    if (winner !== EMPTY_CELL) {
      return winner;
    }
  }
  return EMPTY_CELL;
}

$(document).ready(function() {
  createBoards();
});
