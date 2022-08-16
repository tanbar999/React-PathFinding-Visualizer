import OutOfGrid from "./helper/OutOfGrid";
import Sleep from "./helper/Sleep";

const BFS = async (
  startRow,
  startCol,
  destRow,
  destCol,
  gridValues,
  changeGridColor,
  updateTraversalCount,
  reactToastError
) => {
  console.log("Traversing BFS from (" + startRow + "," + startCol + ") to (" + destRow + "," + destCol + ")");
  let square = 1;
  const q_x = new Array();
  const q_y = new Array();

  q_x.push(startRow);
  q_y.push(startCol);

  gridValues[startRow][startCol] = true;

  updateTraversalCount(square++);

  while (q_x.length !== 0) {
    await Sleep(30);
    const row = q_x.shift();
    const col = q_y.shift();

    console.log("==> " + row + "," + col);

    changeGridColor(row, col, "bg-darkOrange");

    if (row === destRow && col === destCol) {
      console.log("found Answer");
      return;
    }

    if (!OutOfGrid(row + 1, col) && gridValues[row + 1][col] === "") {
      q_x.push(row + 1);
      q_y.push(col);
      updateTraversalCount(square++);
      gridValues[row + 1][col] = "path";
    }

    if (!OutOfGrid(row, col + 1) && gridValues[row][col + 1] === "") {
      q_x.push(row);
      q_y.push(col + 1);
      updateTraversalCount(square++);
      gridValues[row][col + 1] = "path";
    }

    if (!OutOfGrid(row - 1, col) && gridValues[row - 1][col] === "") {
      q_x.push(row - 1);
      q_y.push(col);
      updateTraversalCount(square++);
      gridValues[row - 1][col] = "path";
    }

    if (!OutOfGrid(row, col - 1) && gridValues[row][col - 1] === "") {
      q_x.push(row);
      q_y.push(col - 1);
      updateTraversalCount(square++);
      gridValues[row][col - 1] = "path";
    }

    console.log("==> row " + q_x);
    console.log("==> col " + q_y);
  }

  reactToastError();
};

export default BFS;
