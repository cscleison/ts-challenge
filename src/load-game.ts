import gameSettings from "../settings/game.json";
import { Board, isOutOfBounds, Turtle } from "./board";
import { isOnTiles, isSameTile, Tile } from "./navigation";

const parseTile = (tile: Tile) => Boolean(tile && tile.x >= 0 && tile.y >= 0);

const getBoard = ({
  xLength,
  yLength,
  exit,
  mines
}: typeof gameSettings): Board => {
  if (
    !Boolean(
      xLength > 0 &&
        yLength > 0 &&
        parseTile(exit) &&
        mines &&
        mines.length &&
        mines.every(parseTile)
    )
  ) {
    throw new Error("Board settings are malformed");
  }
  return {
    xLength,
    yLength,
    exit,
    mines
  };
};

const getTurtle = ({
  direction,
  startPosition
}: typeof gameSettings): Turtle => {
  if (!Boolean(direction >= 0 && direction < 4 && parseTile(startPosition))) {
    throw new Error("Turtle settings are malformed");
  }
  return {
    direction,
    tile: startPosition
  };
};

const minesAreValid = (board: Board) =>
  board.mines.every(m => !isOutOfBounds(m, board));

const startPositionIsValid = ({ tile }: Turtle, board: Board) =>
  !isOutOfBounds(tile, board) &&
  !isOnTiles(tile, board.mines) &&
  !isSameTile(tile, board.exit);

export const loadGame = () => {
  if (!gameSettings) {
    throw new Error("Game settings not found");
  }
  const board = getBoard(gameSettings);
  const turtle = getTurtle(gameSettings);

  if (!minesAreValid(board)) {
    throw new Error("Mines are placed out of the board");
  }
  if (!startPositionIsValid(turtle, board)) {
    throw new Error("Start position is invalid");
  }
  return { turtle, board };
};
