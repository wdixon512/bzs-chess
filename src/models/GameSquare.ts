import { ChessColor, GamePiece } from "./GamePiece";

export type GameSquare = {
  file: number;
  rank: number;
  piece?: GamePiece | undefined;
  color: ChessColor;
};
