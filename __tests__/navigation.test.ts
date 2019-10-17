import { DIRECTIONS, move, Tile, rotate, isSameTile } from "../src/navigation";

describe("move", () => {
  const initial: Tile = { x: 0, y: 0 };

  it("should move a tile north", () => {
    const moved: Tile = { x: 0, y: -1 };
    expect(move(initial, DIRECTIONS.North)).toEqual(moved);
  });

  it("should move a tile east", () => {
    const moved: Tile = { x: 1, y: 0 };
    expect(move(initial, DIRECTIONS.East)).toEqual(moved);
  });

  it("should move a tile south", () => {
    const moved: Tile = { x: 0, y: 1 };
    expect(move(initial, DIRECTIONS.South)).toEqual(moved);
  });

  it("should move a tile west", () => {
    const moved: Tile = { x: -1, y: 0 };
    expect(move(initial, DIRECTIONS.West)).toEqual(moved);
  });
});

describe("rotate", () => {
  it("should rotate from north to east", () => {
    expect(rotate(DIRECTIONS.North)).toEqual(DIRECTIONS.East);
  });

  it("should rotate from west to north", () => {
    expect(rotate(DIRECTIONS.West)).toEqual(DIRECTIONS.North);
  });
});

describe("is the same tile", () => {
  const initial: Tile = { x: 0, y: 0 };

  it("should be the same tile", () => {
    expect(isSameTile(initial, initial)).toBeTruthy();
    expect(isSameTile(initial, { ...initial })).toBeTruthy();
  });

  it("should NOT be the same tile", () => {
    expect(isSameTile(initial, { x: 1, y: 0 })).toBeFalsy();
    expect(isSameTile(initial, { x: 0, y: 1 })).toBeFalsy();
  });
});
