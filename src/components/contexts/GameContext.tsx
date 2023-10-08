import { createContext, useState } from "react";
import { GameBoard, createGameBoard } from "../../models/GameBoard";
import { GamePiece } from "../../models/GamePiece";
import { GameLocation } from "../../models/GameLocation";

// This initializes the GameContext to "dummy initial values"
export const GameContext = createContext({
  // player1 is a property of the context, that we're setting to "null", but it CAN be a string OR null
  player1: null as string | null,
  // setPlayer1 is a member function of the context, that we're setting to "null"
  setPlayer1: (player1: string | null) => null,
  player2: null as string,
  setPlayer2: (player2: string | null) => null,
  movePiece: (from: GameLocation, to: GameLocation) => null,
  getPiece: (location: GameLocation): GamePiece | null => null,
});

// This creates
export const GameContextProvider = ({ children }) => {
  const [player1, setPlayer1] = useState<string | null>(null);
  const [player2, setPlayer2] = useState<string | null>(null);
  const [boardState, setBoardState] = useState<GameBoard>(createGameBoard());

  const movePiece = (from: GameLocation, to: GameLocation) => {};
  const getPiece = (location: GameLocation): GamePiece | null => {
    return boardState.pieces[location.rank][location.file]?.piece;
  };

  return (
    <GameContext.Provider
      value={{
        player1,
        setPlayer1,
        player2,
        setPlayer2,
        movePiece,
        getPiece,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
