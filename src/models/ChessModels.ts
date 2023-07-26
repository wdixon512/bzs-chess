export type ChessColor = "black" | "white";

export type ChessPiece = {
  color: ChessColor;
  value: number;
  name: string;
  location: ChessLocation;
  image: string;
};

//type Owl = { nocturnal: true } & BirdType;
export type Knight = ChessPiece & {
  value: 3;
  name: "Knight";
  image: "";
};

export type ChessLocation = {
  file: number;
  rank: number;
  piece?: ChessPiece;
  color: ChessColor;
};

function movePiece(piece: ChessPiece, loc: ChessLocation): void {
  //handles actually updating the piece's location & the chessLocation's piece
  piece.location = loc;
  loc.piece = piece;
}

function moveKnight(piece: Knight, loc: ChessLocation): boolean {
  /// only stuff specific to knights
  if (isValidKnightMove(piece, loc)) {
    movePiece(piece, loc);
    return true;
  }

  return false;
}

function isValidKnightMove(knight: Knight, loc: ChessLocation): boolean {
  if (loc.piece.color === knight.color) {
    return false;
  }
  if (
    Math.abs(loc.file - knight.location.file) === 2 &&
    Math.abs(loc.rank - knight.location.rank) == 1
  ) {
    return true;
  } else if (
    Math.abs(loc.file - knight.location.file) === 1 &&
    Math.abs(loc.rank - knight.location.rank) == 2
  ) {
    return true;
  }
  // TODO: add check for if piece is pinned, or if king is in check

  return false;
}

function hasPiece(loc: ChessLocation): boolean {
  return loc.piece !== null;
}

// var chessLocation: ChessLocation;

// hasPiece(chessLocation);
