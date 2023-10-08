import {
  isValidHorizontalMove,
  isValidVerticalMove,
} from "../../helpers/validMoveHelpers";
import { GameLocation } from "../GameLocation";
import { ChessColor, GamePiece } from "../GamePiece";
import { GameSquare } from "../GameSquare";

export class Rook extends GamePiece {
  constructor(color: ChessColor) {
    super(
      "Rook",
      color,
      5,
      color == "white" ? "/chess-pieces/W_Rook.png" : "/chess-pieces/B_Rook.png"
    );
  }

  isLegalMove(
    board: GameSquare[][],
    from: GameLocation,
    to: GameLocation
  ): boolean {
    if (!super.isLegalMove(board, from, to)) return false;
    // not a valid diagonal move
    else if (
      !isValidVerticalMove(board, from, to) &&
      !isValidHorizontalMove(board, from, to)
    )
      return false;

    return true;
  }
}
