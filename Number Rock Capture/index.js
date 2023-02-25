function numRookCaptures(board) {
    let x, y;
    // find the position of the rook
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] === "R") {
          x = i;
          y = j;
          break;
        }
      }
    }
    // look for pawns that can be captured by the rook
    let captures = 0;
    for (let i = x - 1; i >= 0; i--) {
      if (board[i][y] === "B") {
        break;
      }
      if (board[i][y] === "p") {
        captures++;
        break;
      }
    }
    for (let i = x + 1; i < 8; i++) {
      if (board[i][y] === "B") {
        break;
      }
      if (board[i][y] === "p") {
        captures++;
        break;
      }
    }
    for (let j = y - 1; j >= 0; j--) {
      if (board[x][j] === "B") {
        break;
      }
      if (board[x][j] === "p") {
        captures++;
        break;
      }
    }
    for (let j = y + 1; j < 8; j++) {
      if (board[x][j] === "B") {
        break;
      }
      if (board[x][j] === "p") {
        captures++;
        break;
      }
    }
    return captures;
  }