import {
  isValidDiagonalMove,
  isValidHorizontalMove,
  isValidVerticalMove,
} from "../../helpers/validMoveHelpers";
import { GameLocation } from "../GameLocation";
import { ChessColor, GamePiece } from "../GamePiece";
import { GameSquare } from "../GameSquare";

export class Queen extends GamePiece {
  constructor(color: ChessColor) {
    super(
      "Queen",
      color,
      9,
      color == "white"
        ? "/chess-pieces/W_Queen.png"
        : "/chess-pieces/B_Queen.png"
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
      !isValidDiagonalMove(board, from, to) &&
      !isValidHorizontalMove(board, from, to) &&
      !isValidVerticalMove(board, from, to)
    )
      return false;

    return true;
  }
}
