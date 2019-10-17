import movesSettings from "../settings/moves.json";
import { Action } from "./board";

const isValid = (sequence: Action[]) =>
  Boolean(
    sequence && sequence.length && sequence.every(a => a === "m" || a === "r")
  );

export const loadMoves = () => {
  if (!movesSettings) {
    throw new Error("Moves settings not found");
  }
  const moves = Object.values(movesSettings) as Action[][];

  if (!moves || !moves.every(isValid)) {
    throw new Error("Moves settings are malformed");
  }
  return moves;
};
