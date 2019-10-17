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
export type Result = "danger" | "success" | "boom" | "outOfBounds";

export const runAction = (action: Action, turtle: Turtle): Turtle =>
  action === "m"
    ? { ...turtle, tile: move(turtle.tile, turtle.direction) }
    : { ...turtle, direction: rotate(turtle.direction) };

export const checkTurtle = (turtle: Turtle, board: Board): Result =>
  isSameTile(turtle.tile, board.exit)
    ? "success"
    : isOutOfBounds(turtle.tile, board)
    ? "outOfBounds"
    : isOnTiles(turtle.tile, board.mines)
    ? "boom"
    : "danger";

export const isOutOfBounds = ({ x, y }: Tile, { xLength, yLength }: Board) =>
  x < 0 || y < 0 || x >= xLength || y >= yLength;
