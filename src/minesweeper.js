const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];

  for (iterateRows = 0; iterateRows < numberOfRows; iterateRows++) {
    const row = [];
    for (iterateColumns = 0; iterateColumns < numberOfColumns; iterateColumns++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];

  for (iterateRows = 0; iterateRows < numberOfRows; iterateRows++) {
    const row = [];
    for (iterateColumns = 0; iterateColumns < numberOfColumns; iterateColumns++) {
      row.push(null);
    }
    board.push(row);
  }

    let numberOfBombsPlaced = 0;

    while (numberOfBombsPlaced < numberOfBombs) {
      const randomRowIndex = Math.floor(Math.random() * numberOfRows);
      const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] === 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
  }

  return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
// bombBoard will sometimes have less bombs than specified due to the previously-mentioned missing code.
// Additionally, printing bombBoard will not look clean due to use of null instead of ' ' - this should just be for debugging, not presentation.
printBoard(bombBoard);
