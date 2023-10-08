import { ChessColor, GamePiece } from "../GamePiece";

export function createPawn(color: ChessColor): GamePiece {
  return {
    name: "Pawn",
    value: 1,
    color,
    image:
      color == "white"
        ? "/chess-pieces/W_Pawn.png"
        : "/chess-pieces/B_Pawn.png",
  };
}
