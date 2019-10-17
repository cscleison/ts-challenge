import { Action, Board, TileStatus, Turtle } from "../src/board";
import { runSequence } from "../src/game";

describe("run sequence", () => {
  const zeroTurtle: Turtle = { direction: 0, tile: { x: 0, y: 0 } };
  const board: Board = {
    xLength: 3,
    yLength: 3,
    mines: [{ x: 2, y: 0 }],
    exit: { x: 0, y: 1 }
  };

  it("should return outOfBounds", () => {
    const outOfBounds: TileStatus = "outOfBounds";
    expect(runSequence(["m"], zeroTurtle, board)).toBe(outOfBounds);
  });

  it("should return onMine", () => {
    const onMine: TileStatus = "onMine";
    const explosives: Action[][] = [
      ["r", "m", "m"],
      ["r", "m", "m", "m"] // extra move to see if it stops
    ];

    explosives.forEach(sequence =>
      expect(runSequence(sequence, zeroTurtle, board)).toBe(onMine)
    );
  });

  it("should return onExit", () => {
    const onExit: TileStatus = "onExit";
    const successful: Action[][] = [
      ["r", "r", "m"],
      ["r", "r", "m", "m"] // extra move to see if it stops
    ];

    successful.forEach(sequence =>
      expect(runSequence(sequence, zeroTurtle, board)).toBe(onExit)
    );
  });

  it("should return inDanger", () => {
    const inDanger: TileStatus = "inDanger";
    const dangerous: Action[][] = [["r", "m"], ["r", "r", "r", "r"]];

    dangerous.forEach(sequence =>
      expect(runSequence(sequence, zeroTurtle, board)).toBe(inDanger)
    );
  });
});
