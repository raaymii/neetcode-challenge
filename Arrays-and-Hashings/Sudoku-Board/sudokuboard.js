/**
 * @param {character[][]} board
 * @return {boolean}
 * 
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 */

var isValidSudoku = function (board) {
  // Create sets for each row, column, and sub-box
  const rows = new Array(9).fill().map(() => new Set());
  const columns = new Array(9).fill().map(() => new Set());
  const boxes = new Array(9).fill().map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const digit = board[i][j];
      if (digit !== ".") {
        // Check if the digit is already present in the corresponding row, column, or sub-box
        if (
          rows[i].has(digit) ||
          columns[j].has(digit) ||
          boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(digit)
        ) {
          return false; // Invalid Sudoku board
        }

        // Add the digit to the sets for the corresponding row, column, and sub-box
        rows[i].add(digit);
        columns[j].add(digit);
        boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(digit);
      }
    }
  }

  return true; // Valid Sudoku board
};
