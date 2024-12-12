import "./styles.css";
import { generateBoard, generateAdjList } from "./board";
import { knightMoves } from "./knightMoves";

//const board = generateBoard();
const list = generateAdjList();
const curatedList = [];
list.forEach((ele) => {
  ele.sort((a, b) => a - b);
  const tempSet = new Set(ele);
  curatedList.push([...tempSet]);
});
//console.log(list);
console.log(curatedList);
// const curatedList = [...tempSet];
// console.log(curatedList);
//knightMoves([0, 0], [1, 2]);
