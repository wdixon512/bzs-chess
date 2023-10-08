import { GamePiece } from "./GamePiece";
import { GameSquare } from "./GameSquare";
import { createBishop } from "./pieces/Bishop";
import { createKing } from "./pieces/King";
import { createKnight } from "./pieces/Knight";
import { createPawn } from "./pieces/Pawn";
import { createQueen } from "./pieces/Queen";
import { createRook } from "./pieces/Rook";

export type GameBoard = {
  pieces: GameSquare[][]; // 2d array of squares
};

export function createGameBoard(): GameBoard {
  const board: GameSquare[][] = [];
  for (let i = 0; i < 8; i++) {
    const row: GameSquare[] = [];
    for (let j = 0; j < 8; j++) {
      row.push(createGameSquare(i, j));
    }
    board.push(row);
  }
  return { pieces: board };
}

function createGameSquare(row: number, col: number): GameSquare {
  const color = (row + col) % 2 === 0 ? "white" : "black";
  const piece = getInitPiece(row, col);

  return {
    file: row,
    rank: col,
    color: color,
    piece,
  };
}

function getInitPiece(row: number, col: number): GamePiece | null {
  const color = row < 4 ? "white" : "black";

  if (row == 1 || row == 6) return createPawn(color);
  else if (row == 0 || row == 7) {
    switch (col) {
      case 0:
      case 7:
        return createRook(color);

      case 1:
      case 6:
        return createKnight(color);

      case 2:
      case 5:
        return createBishop(color);

      case 3:
        return createQueen(color);

      case 4:
        return createKing(color);
    }
  } else {
    return null;
  }
}
