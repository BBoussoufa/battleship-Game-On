let player = {
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  };
  let computer = {
    
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  };

  // This function generates random X/Y coordinates to be assigned to the
  // objects listed above at the key of gameBoard. This allows the program
  // to automatically and randomly assign ships to the 4 x 4 game board.
  const randomShipGenerator = (firstOrSecondPlayer) => {
    // Set iteration index to 0;
    let i = 0;
    // Set number of loops to <= 3 to get 4 ships
    while (i <= 3) {
      // Call the Math.floor and Math.random methods to generate a random
      // number between 0 and 4, excluding 4.
      let xCoordinate = Math.floor(Math.random() * 4);
      let yCoordinate = Math.floor(Math.random() * 4);
      if (firstOrSecondPlayer.gameBoard[xCoordinate][yCoordinate] === 0) {
        firstOrSecondPlayer.gameBoard[xCoordinate][yCoordinate] = 1;
        i++;
        }
      }
    }