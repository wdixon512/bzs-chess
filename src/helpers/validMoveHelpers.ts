import { GameLocation } from "../models/GameLocation";
import { GameSquare } from "../models/GameSquare";

export const isVerticalMove = (
  from: GameLocation,
  to: GameLocation
): boolean => {
  return to.rank == from.rank && to.file != from.file;
};

export const isHorizontalMove = (
  from: GameLocation,
  to: GameLocation
): boolean => {
  return to.rank != from.rank && to.file == from.file;
};

export const isDiagonalMove = (
  from: GameLocation,
  to: GameLocation
): boolean => {
  return Math.abs(to.rank - from.rank) == Math.abs(to.file - from.file);
};

export const isValidDiagonalMove = (
  board: GameSquare[][],
  from: GameLocation,
  to: GameLocation
): boolean => {
  // Check if it's a diagonal move
  if (!isDiagonalMove(from, to)) return false;

  // Check if there are any pieces in the way
  let rankDirection = to.rank > from.rank ? 1 : -1;
  let fileDirection = to.file > from.file ? 1 : -1;

  for (let i = 1; i < Math.abs(to.rank - from.rank); i++) {
    if (
      board[from.rank + i * rankDirection][from.file + i * fileDirection]
        .piece != null
    ) {
      return false;
    }
  }

  return true;
};

export const isValidVerticalMove = (
  board: GameSquare[][],
  from: GameLocation,
  to: GameLocation
): boolean => {
  if (!isVerticalMove(from, to)) return false;
  // Check if there are any pieces in the way
  let direction = to.rank > from.rank ? 1 : -1;

  for (let i = 1; i < Math.abs(to.rank - from.rank); i++) {
    if (board[from.rank + i * direction][from.file].piece != null) {
      return false;
    }
  }

  return true;
};

export const isValidHorizontalMove = (
  board: GameSquare[][],
  from: GameLocation,
  to: GameLocation
): boolean => {
  if (!isHorizontalMove(from, to)) return false;
  // Check if there are any pieces in the way
  let direction = to.file > from.file ? 1 : -1;

  for (let i = 1; i < Math.abs(to.file - from.file); i++) {
    if (board[from.rank][from.file + i * direction].piece != null) {
      return false;
    }
  }

  return true;
};

export const isValidKnightMove = (
  from: GameLocation,
  to: GameLocation
): boolean => {
  return (
    (Math.abs(to.rank - from.rank) == 2 &&
      Math.abs(to.file - from.file) == 1) ||
    (Math.abs(to.rank - from.rank) == 1 && Math.abs(to.file - from.file) == 2)
  );
};

/*
 * Does not check for first move 2 spaces.
 */
export const isValidPawnMove = (
  board: GameSquare[][],
  from: GameLocation,
  to: GameLocation
): boolean => {
  if (board[from.rank][from.file].piece.color == "white") {
    //white pawns can only move up in rank and can only move 1 space
    if (from.rank - to.rank > 0 || to.rank - from.rank > 1) return false;
  } else {
    //black pieces can only move down in rank and can only move 1 space
    if (from.rank - to.rank > 1 || to.rank - from.rank > 0) return false;
  }

  // pawns can only move diagonally 1 if it's capturing a piece
  if (
    Math.abs(to.file - from.file) > 1 ||
    (Math.abs(to.file - from.file) == 1 &&
      (board[to.rank][to.file].piece?.color ==
        board[from.rank][from.file].piece?.color ||
        board[to.rank][to.file].piece == undefined))
  ) {
    return false;
  }

  return true;
};

export const isValidKingMove = (
  board: GameSquare[][],
  from: GameLocation,
  to: GameLocation
): boolean => {
  if (
    (Math.abs(to.rank - from.rank) == 1 &&
      Math.abs(to.file - from.file) <= 1) ||
    (Math.abs(to.file - from.file) == 1 && Math.abs(to.rank - from.rank) <= 1)
  ) {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        // if there's a king of the opposite color in the squares surrounding "to"
        if (
          board[to.rank + i][to.file + j].piece?.name == "King" &&
          board[to.rank + i][to.file + j].piece?.color !=
            board[from.rank][from.file].piece?.color
        ) {
          return false;
        }
      }
    }

    return true;
  }
};

export const isValidPawnFirstMove = (
  from: GameLocation,
  to: GameLocation
): boolean => {
  if (from.rank == 1 || from.rank == 6) {
    return (
      Math.abs(to.rank - from.rank) <= 2 && Math.abs(to.file - from.file) == 0
    );
  }

  return false;
};

export const isPinned = (
  board: GameSquare[][],
  from: GameLocation
): boolean => {
  return false;
};

export const inCheck = (board: GameSquare[][], to: GameLocation): boolean => {
  return false;
};
