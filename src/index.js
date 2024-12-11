import "./styles.css";
import { generateBoard, generateAdjList } from "./board";

const board = generateBoard();
console.log(board[0][1]);
console.log(generateAdjList());
