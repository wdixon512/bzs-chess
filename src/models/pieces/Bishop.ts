import { isValidDiagonalMove } from "../../helpers/validMoveHelpers";
import { GameLocation } from "../GameLocation";
import { ChessColor, GamePiece } from "../GamePiece";
import { GameSquare } from "../GameSquare";

export class Bishop extends GamePiece {
  constructor(color: ChessColor) {
    super(
      "Bishop",
      color,
      3,
      color == "white"
        ? "/chess-pieces/W_Bishop.png"
        : "/chess-pieces/B_Bishop.png"
    );
  }

  isLegalMove(
    board: GameSquare[][],
    from: GameLocation,
    to: GameLocation
  ): boolean {
    if (!super.isLegalMove(board, from, to)) return false;
    // invalid diagonal move or not a diagonal move
    else if (!isValidDiagonalMove(board, from, to)) return false;

    return true;
  }
}
