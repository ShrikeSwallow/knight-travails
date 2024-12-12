import { generateAdjList, convertCoordinates } from "./board";

const board = generateAdjList();
const search = (start, end) => {
  if (start === end) {
    console.log("Success");
    return true;
  }
  const visited = [];
  visited.push(start);
  const moves = [...board[start]];
  console.log(moves);
  let next;
  /*while (moves.length > 0) {
    next = moves.splice(0, 1)[0];
    console.log(next);
    if (!visited.includes(next)) {
      search(next, end);
    }
    visited.push(next);
  }*/
  console.log("search ended");
};
export const knightMoves = ([startX, startY], [endX, endY]) => {
  //console.log(board[start]);
  //console.log(board[start].includes(board[end]));
  const start = convertCoordinates(startX, startY);
  const end = convertCoordinates(endX, endY);
  console.log(start, end);
  search(start, end);
};

// MAKE A TREE FROM START POINT'S SORTED TABLE
// ENSURE THERE'S NO REPETITIONS DURING INSERTION
// USE CODE FROM BST PROJECT
