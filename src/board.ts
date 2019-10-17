import { move, rotate, Tile, isSameTile, isOnTiles } from "./navigation";

/*   x0  x1  x2
y0 | _ | _ | _ | 
y1 | _ | _ | _ |
y2 | _ | _ | _ |
y3 | _ | _ | _ | */

export interface Turtle {
  readonly direction: number;
  readonly tile: Tile;
}

export interface Board {
  readonly xLength: number;
  readonly yLength: number;
  readonly mines: Tile[];
  readonly exit: Tile;
}

export const ACTION_EMOJIS = {
  m: "🏃",
  r: "↩️"
};
export type Action = keyof typeof ACTION_EMOJIS;
export type TileStatus = "inDanger" | "onExit" | "onMine" | "outOfBounds";

export const runAction = (action: Action, turtle: Turtle): Turtle =>
  action === "m"
    ? { ...turtle, tile: move(turtle.tile, turtle.direction) }
    : { ...turtle, direction: rotate(turtle.direction) };

export const checkTile = (board: Board) => (tile: Tile): TileStatus =>
  isSameTile(tile, board.exit)
    ? "onExit"
    : isOnTiles(tile, board.mines)
    ? "onMine"
    : isOutOfBounds(tile, board)
    ? "outOfBounds"
    : "inDanger";

export const isOutOfBounds = ({ x, y }: Tile, { xLength, yLength }: Board) =>
  x < 0 || y < 0 || x >= xLength || y >= yLength;
