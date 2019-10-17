import { Action, Board, checkTurtle, Result, runAction, Turtle } from "./board";

export const runSequence = (
  sequence: Action[],
  turtle: Turtle,
  board: Board
): string => {
  let donatello = turtle;
  let result: Result = "danger";

  for (let action of sequence) {
    donatello = runAction(action, donatello);
    result = checkTurtle(donatello, board);

    if (result !== "danger") {
      break;
    }
  }
  return describe(result);
};

const describe = (result: Result) =>
  result === "success"
    ? "Success! 🐢🆓"
    : result === "boom"
    ? "Turtle exploded 💣"
    : result === "outOfBounds"
    ? "Out of bounds 🚀"
    : "Turtle is still in danger 😱";
