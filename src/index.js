import "./styles.css";
import { generateBoard, generateAdjList } from "./board";
import { knightMoves } from "./knightMoves";

//const board = generateBoard();
const list = generateAdjList();
console.log(list);
//knightMoves([0, 0], [1, 2]);
const flatList = list.flat();
//console.log(flatList);

list.forEach((i, j) => {
  console.log(list[(i, j)]);
});
