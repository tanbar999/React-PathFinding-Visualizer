import OutOfGrid from "./helper/OutOfGrid";
import Sleep from "./helper/Sleep";
import Node from "./helper/Nodes";
import PriorityQueue from "./helper/PriorityQueue";

const heuristic = (row, col, destRow, destCol) => {
  const dx = Math.abs(col - destCol);
  const dy = Math.abs(row - destRow);

  return Math.min(dx, dy);
};

const Dijkstra = async (
  startRow,
  startCol,
  destRow,
  destCol,
  gridValues,
  changeGridColor,
  updateTraversalCount,
  reactToastError
) => {
  console.log("Traversing A* from (" + startRow + "," + startCol + ") to (" + destRow + "," + destCol + ")");
  let square = 1;
  const node = new Node(startRow, startCol);
  const PQ = new PriorityQueue();
  PQ.enqueue(node, heuristic(startRow, startCol, destRow, destCol));

  gridValues[startRow][startCol] = true;
  updateTraversalCount(square++);

  while (!PQ.isEmpty()) {
    await Sleep(30);

    const { row, col } = PQ.dequeue().element;

    console.log("==> " + row + "," + col);

    changeGridColor(row, col, "bg-darkOrange");

    if (row === destRow && col === destCol) {
      console.log("found Answer");
      return;
    }

    if (!OutOfGrid(row + 1, col) && gridValues[row + 1][col] === "") {
      PQ.enqueue(new Node(row + 1, col), heuristic(row + 1, col, destRow, destCol));
      updateTraversalCount(square++);

      gridValues[row + 1][col] = "path";
    }

    // if (!OutOfGrid(row + 1, col + 1) && gridValues[row + 1][col + 1] === "") {
    //   PQ.enqueue(new Node(row + 1, col + 1), 1 + heuristic(row + 1, col + 1, destRow, destCol));
    //   gridValues[row + 1][col + 1] = "path";
    // }

    if (!OutOfGrid(row, col + 1) && gridValues[row][col + 1] === "") {
      PQ.enqueue(new Node(row, col + 1), heuristic(row, col + 1, destRow, destCol));
      updateTraversalCount(square++);

      gridValues[row][col + 1] = "path";
    }

    // if (!OutOfGrid(row - 1, col + 1) && gridValues[row - 1][col + 1] === "") {
    //   PQ.enqueue(new Node(row - 1, col + 1), 1 + heuristic(row - 1, col + 1, destRow, destCol));
    //   gridValues[row - 1][col + 1] = "path";
    // }

    if (!OutOfGrid(row - 1, col) && gridValues[row - 1][col] === "") {
      PQ.enqueue(new Node(row - 1, col), heuristic(row - 1, col, destRow, destCol));
      updateTraversalCount(square++);

      gridValues[row - 1][col] = "path";
    }

    // if (!OutOfGrid(row - 1, col - 1) && gridValues[row - 1][col - 1] === "") {
    //   PQ.enqueue(new Node(row - 1, col - 1), 1 + heuristic(row - 1, col - 1, destRow, destCol));
    //   gridValues[row - 1][col - 1] = "path";
    // }

    if (!OutOfGrid(row, col - 1) && gridValues[row][col - 1] === "") {
      PQ.enqueue(new Node(row, col - 1), heuristic(row, col - 1, destRow, destCol));
      updateTraversalCount(square++);

      gridValues[row][col - 1] = "path";
    }

    // if (!OutOfGrid(row + 1, col - 1) && gridValues[row + 1][col - 1] === "") {
    //   PQ.enqueue(new Node(row + 1, col - 1), 1 + heuristic(row + 1, col - 1, destRow, destCol));
    //   gridValues[row + 1][col - 1] = "path";
    // }
  }

  reactToastError();
};

export default Dijkstra;
