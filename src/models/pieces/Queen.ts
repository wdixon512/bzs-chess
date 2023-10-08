import { ChessColor, GamePiece } from "../GamePiece";

export function createQueen(color: ChessColor): GamePiece {
  return {
    name: "Queen",
    value: 9,
    color,
    image:
      color == "white"
        ? "/chess-pieces/W_Queen.png"
        : "/chess-pieces/B_Queen.png",
  };
}
