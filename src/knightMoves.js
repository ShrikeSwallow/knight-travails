import { generateAdjList } from "./board";

const board = generateAdjList();
export const knightMoves = ([startX, startY], [endX, endY]) => {
  //console.log(board[start]);
  //console.log(board[start].includes(board[end]));
  if (startX === endX && startY === endY) {
    console.log("Success!");
  } else {
  }
};
