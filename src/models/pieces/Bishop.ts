import { ChessColor, GamePiece } from "../GamePiece";

export function createBishop(color: ChessColor): GamePiece {
  return {
    name: "Bishop",
    value: 3,
    color,
    image:
      color == "white"
        ? "/chess-pieces/W_Bishop.png"
        : "/chess-pieces/B_Bishop.png",
  };
}
