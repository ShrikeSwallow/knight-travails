export const generateBoard = () => {
  const board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i].push(j);
    }
  }

  return board;
};

export const generateAdjList = () => {
  const adjacencyList = [];

  for (let i = 0; i < 8; i++) {
    let draw = "";
    for (let j = 0; j < 8; j++) {
      let converted = i * 8 + j;
      draw = draw + " " + converted;
      adjacencyList[converted] = [];
      if (i - 2 >= 0) {
        if (j - 1 >= 0) {
          adjacencyList[converted].push((i - 2) * 8 + j - 1);
        }
        if (j + 1 <= 7) {
          adjacencyList[converted].push((i - 2) * 8 + j + 1);
        }
      }

      if (i + 2 <= 7) {
        if (j - 1 >= 0) {
          adjacencyList[converted].push((i + 2) * 8 + j - 1);
        }
        if (j + 1 <= 7) {
          adjacencyList[converted].push((i + 2) * 8 + j + 1);
        }
      }

      if (i - 1 >= 0) {
        if (j - 2 >= 0) {
          adjacencyList[converted].push((i - 1) * 8 + j - 2);
        }
        if (j + 2 <= 7) {
          adjacencyList[converted].push((i - 1) * 8 + j + 2);
        }
      }

      if (i + 1 <= 7) {
        if (j - 2 >= 0) {
          adjacencyList[converted].push((i + 1) * 8 + j - 2);
        }
        if (j + 2 <= 7) {
          adjacencyList[converted].push((i + 1) * 8 + j + 2);
        }
      }
    }
    //console.log(draw);
  }
  return adjacencyList;
};
export const convertCoordinates = (x, y) => {
  if (x < 0 || y < 0 || x > 7 || y > 7) {
    throw new Error("Coordinates outside of board");
  }
};
