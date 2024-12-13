import "./styles.css";
import { generateBoard, generateAdjList } from "./board";
import { knightMoves } from "./knightMoves";

const list = generateAdjList();
//const curatedList = [];
//console.log(list);
knightMoves([0, 0], [1, 2]);
