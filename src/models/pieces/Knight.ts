import { ChessColor, GamePiece } from "../GamePiece";

export function createKnight(color: ChessColor): GamePiece {
  return {
    name: "Knight",
    value: 3,
    color,
    image:
      color == "white"
        ? "/chess-pieces/W_Knight.png"
        : "/chess-pieces/B_Knight.png",
  };
}
