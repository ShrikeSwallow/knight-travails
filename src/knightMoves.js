import { generateAdjList, convertCoordinates } from "./board";

const searchDFS = (start, end, board, visited, path, iteration) => {
  visited[iteration] = [...visited[iteration - 1]];
  visited[iteration][start] = true;
  path[iteration] = [...path[iteration - 1]];
  if (path[iteration].length > 5) {
    return;
  }
  path[iteration].push(start);
  if (start === end) {
    console.log(path[iteration].join(" -> "));
    return;
    //return true;
  }
  board[start].forEach((vertex) => {
    if (visited[iteration][vertex] !== true) {
      searchDFS(vertex, end, board, visited, path, iteration + 1);
    }
  });
  //console.log("search ended");
};

const searchBFS = (start, end, board, visited, path) => {
  const queueArr = [start];
  visited[start] = true;
  let current;

  while (queueArr.length > 0) {
    current = queueArr[0];
    path.push(current);
    if (current === end) {
      console.log(path.join(" -> "));
      //return true;
    }
    queueArr.splice(0, 1);

    board[current].forEach((vertex) => {
      if (visited[vertex] != true) {
        queueArr.push(vertex);
        visited[vertex] = true;
      }
    });
  }
};

export const knightMoves = ([startX, startY], [endX, endY]) => {
  //console.log(board[start]);
  //console.log(board[start].includes(board[end]));
  const board = generateAdjList();
  const start = convertCoordinates(startX, startY);
  const end = convertCoordinates(endX, endY);
  const path = [];
  const visited = [];
  let iteration = 0;
  visited[iteration] = [];
  path[iteration] = [];
  searchDFS(start, end, board, visited, path, iteration + 1);
  //searchBFS(start, end, board, visited, path);
};
