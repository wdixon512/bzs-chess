import { Grid, GridItem } from "@chakra-ui/react";
import ChessSquare from "./ChessSquare";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const ChessBoard = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Grid
        templateColumns="repeat(8, 1fr)"
        w="80vw"
        h="80vw"
        maxW={{ base: "100vh", md: "80vh" }}
        maxH={{ base: "100vh", md: "80vh" }}
        margin="auto"
      >
        {Array(8)
          .fill("")
          .map((_, i) =>
            Array(8)
              .fill("")
              .map((_, j) => <ChessSquare key={i * 8 + j} row={i} column={j} />)
          )}
      </Grid>
    </DndProvider>
  );
};

export default ChessBoard;
