import { generateAdjList, convertCoordinates } from "./board";

const search = (start, end, board, visited, path) => {
  visited[start] = true;
  path.push(start);
  if (start === end) {
    console.log("Success");
    console.log(path.join(" -> "));
    return true;
  }
  board[start].forEach((vertex) => {
    if (visited[vertex] !== true) {
      search(vertex, end, board, visited, path);
    }
  });
  //console.log("search ended");
};
export const knightMoves = ([startX, startY], [endX, endY]) => {
  //console.log(board[start]);
  //console.log(board[start].includes(board[end]));
  const board = generateAdjList();
  const start = convertCoordinates(startX, startY);
  const end = convertCoordinates(endX, endY);
  const path = [];
  const visited = [];
  search(start, end, board, visited, path);
};
