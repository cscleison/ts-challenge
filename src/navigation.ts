export interface Tile {
  readonly x: number;
  readonly y: number;
}
export const DIRECTIONS = {
  North: 0,
  East: 1,
  South: 2,
  West: 3
};

export const move = ({ x, y }: Tile, direction: number): Tile =>
  direction === DIRECTIONS.North
    ? { x, y: y - 1 }
    : direction === DIRECTIONS.East
    ? { y, x: x + 1 }
    : direction === DIRECTIONS.South
    ? { x, y: y + 1 }
    : { y, x: x - 1 };

export const rotate = (direction: number) =>
  direction >= DIRECTIONS.West ? DIRECTIONS.North : direction + 1;

export const isSameTile = (tile1: Tile, tile2: Tile) =>
  tile1.x === tile2.x && tile1.y === tile2.y;

export const isOnTiles = (tile: Tile, tiles: Tile[]) =>
  tiles.some(t => isSameTile(t, tile));
