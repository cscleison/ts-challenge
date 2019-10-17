import { Action, ACTION_EMOJIS } from "./board";
import { runSequence } from "./game";
import { loadGame } from "./load-game";
import { loadMoves } from "./load-moves";

// ui
const body = document.getElementsByTagName("body")[0];
const table = document.getElementById("sequences") as HTMLTableElement;

const renderRow = (sequence: Action[], result: string): void => {
  const row = table.insertRow(-1);
  row.insertCell(0).innerHTML = sequence.map(a => ACTION_EMOJIS[a]).join("");
  row.insertCell(1).innerHTML = result;
};

const renderError = (message: string) => {
  table.remove();
  const el = document.createElement("div");
  el.classList.add("error");
  el.innerHTML = `💀 Error: ${message}`;
  body.appendChild(el);
};

// app
const run = () => {
  try {
    const { turtle, board } = loadGame();
    const moves = loadMoves();
    moves.forEach(sequence =>
      renderRow(sequence, runSequence(sequence, turtle, board))
    );
  } catch (e) {
    renderError(e.message);
  }
};

run();
