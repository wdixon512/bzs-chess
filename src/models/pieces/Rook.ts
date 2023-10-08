import { ChessColor, GamePiece } from "../GamePiece";

export function createRook(color: ChessColor): GamePiece {
  return {
    name: "Rook",
    value: 5,
    color,
    image:
      color == "white"
        ? "/chess-pieces/W_Rook.png"
        : "/chess-pieces/B_Rook.png",
  };
}
