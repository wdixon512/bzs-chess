import { ChessColor, GamePiece } from "../GamePiece";

export function createKing(color: ChessColor): GamePiece {
  return {
    name: "King",
    value: 1000,
    color,
    image:
      color == "white"
        ? "/chess-pieces/W_King.png"
        : "/chess-pieces/B_King.png",
  };
}
