import { inCheck, isPinned } from "../helpers/validMoveHelpers";
import { GameLocation } from "./GameLocation";
import { GameSquare } from "./GameSquare";

export type ChessColor = "black" | "white";

export class GamePiece {
  name: string;
  color: ChessColor;
  value: number;
  image: string;
  hasMoved: boolean;

  constructor(name: string, color: ChessColor, value: number, image: string) {
    this.name = name;
    this.color = color;
    this.value = value;
    this.image = image;
    this.hasMoved = false;
  }

  /*
   * This function contains base conditions for a legal move for any piece.
   */
  isLegalMove(
    board: GameSquare[][],
    from: GameLocation,
    to: GameLocation
  ): boolean {
    // moving to the same square
    if (from.file == to.file && from.rank == to.rank) return false;
    // moving to a square with a piece of the same color
    if (board[to.rank][to.file].piece?.color == this.color) return false;
    // if the piece we're moving is pinned
    if (isPinned(board, from)) return false;
    // if the move would put us in check, or keep us in check
    if (inCheck(board, to)) return false;

    return true;
  }
}
