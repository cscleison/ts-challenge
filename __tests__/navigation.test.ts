import {
  DIRECTIONS,
  isOnTiles,
  isSameTile,
  move,
  rotate,
  Tile
} from "../src/navigation";

const zeroTile: Tile = { x: 0, y: 0 };

describe("move", () => {
  it("should move a tile north", () => {
    const moved: Tile = { x: 0, y: -1 };
    expect(move(zeroTile, DIRECTIONS.North)).toEqual(moved);
  });

  it("should move a tile east", () => {
    const moved: Tile = { x: 1, y: 0 };
    expect(move(zeroTile, DIRECTIONS.East)).toEqual(moved);
  });

  it("should move a tile south", () => {
    const moved: Tile = { x: 0, y: 1 };
    expect(move(zeroTile, DIRECTIONS.South)).toEqual(moved);
  });

  it("should move a tile west", () => {
    const moved: Tile = { x: -1, y: 0 };
    expect(move(zeroTile, DIRECTIONS.West)).toEqual(moved);
  });
});

describe("rotate", () => {
  it("should rotate from north to east", () => {
    expect(rotate(DIRECTIONS.North)).toBe(DIRECTIONS.East);
  });

  it("should rotate from west to north", () => {
    expect(rotate(DIRECTIONS.West)).toBe(DIRECTIONS.North);
  });
});

describe("is the same tile", () => {
  it("should be the same tile", () => {
    expect(isSameTile(zeroTile, zeroTile)).toBeTruthy();
    expect(isSameTile(zeroTile, { ...zeroTile })).toBeTruthy();
  });

  it("should NOT be the same tile", () => {
    expect(isSameTile(zeroTile, { x: 1, y: 0 })).toBeFalsy();
    expect(isSameTile(zeroTile, { x: 0, y: 1 })).toBeFalsy();
  });
});

describe("is on tiles", () => {
  it("should be on tiles", () => {
    expect(isOnTiles(zeroTile, [{ ...zeroTile }, { x: 1, y: 1 }])).toBeTruthy();
  });

  it("should NOT be on tiles", () => {
    expect(isOnTiles(zeroTile, [{ x: 1, y: 1 }, { x: 2, y: 2 }])).toBeFalsy();
  });
});
