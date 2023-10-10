import { isValidKingMove } from "../../helpers/validMoveHelpers";
import { GameLocation } from "../GameLocation";
import { ChessColor, GamePiece } from "../GamePiece";
import { GameSquare } from "../GameSquare";

export class King extends GamePiece {
  constructor(color: ChessColor) {
    super(
      "King",
      color,
      1000,
      color == "white" ? "/chess-pieces/W_King.png" : "/chess-pieces/B_King.png"
    );
  }

  isLegalMove(
    board: GameSquare[][],
    from: GameLocation,
    to: GameLocation
  ): boolean {
    if (!super.isLegalMove(board, from, to)) return false;
    if (!isValidKingMove(board, from, to)) return false;
    return true;
  }
}
