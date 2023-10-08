import { isValidKnightMove } from "../../helpers/validMoveHelpers";
import { GameLocation } from "../GameLocation";
import { ChessColor, GamePiece } from "../GamePiece";
import { GameSquare } from "../GameSquare";

export class Knight extends GamePiece {
  constructor(color: ChessColor) {
    super(
      "Knight",
      color,
      3,
      color == "white"
        ? "/chess-pieces/W_Knight.png"
        : "/chess-pieces/B_Knight.png"
    );
  }

  isLegalMove(
    board: GameSquare[][],
    from: GameLocation,
    to: GameLocation
  ): boolean {
    if (!super.isLegalMove(board, from, to)) return false;
    // not a valid diagonal move
    else if (!isValidKnightMove(from, to)) return false;

    return true;
  }
}
