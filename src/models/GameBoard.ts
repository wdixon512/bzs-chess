import { GamePiece } from "./GamePiece";
import { GameSquare } from "./GameSquare";
import { Bishop } from "./pieces/Bishop";
import { King } from "./pieces/King";
import { Knight } from "./pieces/Knight";
import { Pawn } from "./pieces/Pawn";
import { Queen } from "./pieces/Queen";
import { Rook } from "./pieces/Rook";

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

function getInitPiece(row: number, col: number): GamePiece | undefined {
  const color = row < 4 ? "white" : "black";

  if (row == 1 || row == 6) return new Pawn(color);
  else if (row == 0 || row == 7) {
    switch (col) {
      case 0:
      case 7:
        return new Rook(color);

      case 1:
      case 6:
        return new Knight(color);

      case 2:
      case 5:
        return new Bishop(color);

      case 3:
        return new Queen(color);

      case 4:
        return new King(color);
    }
  } else {
    return undefined;
  }
}
