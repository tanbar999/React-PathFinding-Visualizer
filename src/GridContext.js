import { createContext, useState } from "react";
import { toast } from "react-toastify";
import BFS from "./algorithmHelper/BFS";
import DFS from "./algorithmHelper/DFS";
import astar from "./algorithmHelper/Astar";
import Dijkstra from "./algorithmHelper/Dijkstra";
import Spiral from "./algorithmHelper/Spiral";

const gridContext = createContext();

export function GridProvider({ children }) {
  const rowSize = 21;
  const colSize = 40;

  const [grid, setGrid] = useState(Array.from({ length: rowSize }, () => Array.from({ length: colSize }, () => "")));
  const [traverseSquare, setTraverseSquare] = useState(0);

  const [backgroundColor, setBackgroundColor] = useState(
    Array.from({ length: rowSize }, () => Array.from({ length: colSize }, () => "bg-white"))
  );

  const createWalls = (row, col) => {
    console.log("Creating Wall...." + row + "  " + col);
    let updatedGrid = [...grid];
    updatedGrid[row][col] = "wall";
    setGrid(updatedGrid);
    changeGridColor(row, col, "bg-background");
  };

  const removeWalls = (row, col) => {
    console.log("Removing Wall...." + row + "  " + col);
    let updatedGrid = [...grid];
    updatedGrid[row][col] = "";
    setGrid(updatedGrid);
    changeGridColor(row, col, "bg-white");
  };

  const changeGridColor = (row, col, color) => {
    console.log("BG_COLOR .... " + row + " " + col + "changed to " + color);
    let updatedColor = [...backgroundColor];
    updatedColor[row][col] = color;
    setBackgroundColor(updatedColor);
  };

  const dragFunction = (row, col) => {
    console.log("Dragging...." + row + "  " + col);
    if (grid[row][col]) {
      removeWalls(row, col);
    } else {
      createWalls(row, col);
    }
    console.log(grid);
  };

  const updateTraversalCount = (val) => {
    setTraverseSquare(val);
  };

  const reactToastError = () => {
    toast.error("🦄 No Path found.....", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const startPathFinding = (startRow, startCol, destRow, destCol, algo) => {
    ResetPath();
    switch (algo) {
      case "DFS":
        DFS(startRow, startCol, destRow, destCol, grid, changeGridColor, updateTraversalCount, reactToastError);
        break;
      case "BFS":
        BFS(startRow, startCol, destRow, destCol, grid, changeGridColor, updateTraversalCount, reactToastError);
        break;
      case "Astar":
        astar(startRow, startCol, destRow, destCol, grid, changeGridColor, updateTraversalCount, reactToastError);
        break;
      case "Dijkstra":
        Dijkstra(startRow, startCol, destRow, destCol, grid, changeGridColor, updateTraversalCount, reactToastError);
        break;
      case "Spiral":
        Spiral(startRow, startCol, destRow, destCol, grid, changeGridColor, updateTraversalCount, reactToastError);
        break;
      default:
    }
  };

  const Reset = () => {
    console.log("Resetting the grid");
    setGrid(() => Array.from({ length: rowSize }, () => Array.from({ length: colSize }, () => "")));

    setBackgroundColor(() => Array.from({ length: rowSize }, () => Array.from({ length: colSize }, () => "bg-white")));
    setTraverseSquare(0);
  };

  const ResetPath = () => {
    console.log("Resetting the path");
    let updatedGrid = [...grid];
    let updatedColor = [...backgroundColor];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (updatedGrid[i][j] === "path") {
          updatedGrid[i][j] = "";
          updatedColor[i][j] = "bg-white";
        }
      }
    }
    setTraverseSquare(0);
    setGrid(updatedGrid);
    setBackgroundColor(updatedColor);
  };

  return (
    <gridContext.Provider
      value={{
        rowSize,
        colSize,
        grid,
        backgroundColor,
        startPathFinding,
        dragFunction,
        Reset,
        ResetPath,
        traverseSquare,
      }}
    >
      {children}
    </gridContext.Provider>
  );
}

export default gridContext;
