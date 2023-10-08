import {
  isValidPawnFirstMove,
  isValidPawnMove,
} from "../../helpers/validMoveHelpers";
import { GameLocation } from "../GameLocation";
import { ChessColor, GamePiece } from "../GamePiece";
import { GameSquare } from "../GameSquare";

export class Pawn extends GamePiece {
  constructor(color: ChessColor) {
    super(
      "Pawn",
      color,
      1,
      color == "white" ? "/chess-pieces/W_Pawn.png" : "/chess-pieces/B_Pawn.png"
    );
  }

  isLegalMove(
    board: GameSquare[][],
    from: GameLocation,
    to: GameLocation
  ): boolean {
    if (!super.isLegalMove(board, from, to)) return false;

    if (isValidPawnMove(board, from, to)) return true;
    // initial move
    if (!this.hasMoved && isValidPawnFirstMove(from, to)) return true;

    return false;
  }
}
