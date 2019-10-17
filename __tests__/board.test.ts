import { Board, checkTile, runAction, TileStatus, Turtle } from "../src/board";
import { Tile } from "../src/navigation";

const zeroTile: Tile = { x: 0, y: 0 };

describe("run action", () => {
  it("should move the turtle north", () => {
    const moved: Turtle = {
      direction: 0,
      tile: { x: 0, y: -1 }
    };
    expect(runAction("m", { direction: 0, tile: zeroTile })).toEqual(moved);
  });

  it("should rotate the turtle", () => {
    const rotated: Turtle = {
      direction: 1,
      tile: zeroTile
    };
    expect(runAction("r", { direction: 0, tile: zeroTile })).toEqual(rotated);
  });
});

describe("check tile", () => {
  const mine: Tile = { x: 1, y: 1 };
  const exit: Tile = { x: 2, y: 2 };

  const board: Board = {
    xLength: 3,
    yLength: 3,
    mines: [mine],
    exit
  };
  const checkStatus = checkTile(board);

  it("should be on the exit", () => {
    const onExit: TileStatus = "onExit";
    expect(checkStatus({ ...exit })).toBe(onExit);
  });

  it("should be on a mine", () => {
    const onMine: TileStatus = "onMine";
    expect(checkStatus({ ...mine })).toBe(onMine);
  });

  it("should be out of bounds", () => {
    const outOfBounds: TileStatus = "outOfBounds";
    const outsiders: Tile[] = [
      { x: -1, y: 0 },
      { x: -100, y: 0 },
      { x: 0, y: -1 },
      { x: 0, y: -100 },
      { x: 0, y: 3 },
      { x: 0, y: 300 },
      { x: 3, y: 0 },
      { x: 300, y: 0 }
    ];
    outsiders.forEach(t => expect(checkStatus(t)).toBe(outOfBounds));
  });

  it("should be in danger", () => {
    const inDanger: TileStatus = "inDanger";
    expect(checkStatus(zeroTile)).toBe(inDanger);
  });
});
