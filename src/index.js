import "./styles.css";
import { generateBoard, generateAdjList } from "./board";
import { knightMoves } from "./knightMoves";

const list = generateAdjList();
//const curatedList = [];
list.forEach((ele) => {
  ele.sort((a, b) => a - b);
  //const tempSet = new Set(ele);
  //curatedList.push([...tempSet]);
});
//console.log(curatedList);
console.log(list);
