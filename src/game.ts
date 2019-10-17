import {
  Action,
  Board,
  checkTile,
  TileStatus,
  runAction,
  Turtle
} from "./board";

export const runSequence = (
  sequence: Action[],
  turtle: Turtle,
  board: Board
): TileStatus => {
  if (!sequence.length) return "inDanger";

  const [action, ...rest] = sequence;
  const donatello = runAction(action, turtle);

  if (action !== "r") {
    const status = checkTile(board)(donatello.tile);
    if (status !== "inDanger") return status;
  }
  return runSequence(rest, donatello, board);
};

export const describe = (status: TileStatus) =>
  status === "onExit"
    ? "Success! 🐢🆓"
    : status === "onMine"
    ? "Turtle exploded 💣"
    : status === "outOfBounds"
    ? "Out of bounds 🚀"
    : "Turtle is still in danger 😱";
