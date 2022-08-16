import OutOfGrid from "./helper/OutOfGrid";
import Sleep from "./helper/Sleep";

const DFS = async (row, col, destRow, destCol, gridValues, changeGridColor, updateTraversalCount, reactToastError) => {
  console.log("Traversing DFS from (" + row + "," + col + ") to (" + destRow + "," + destCol + ")");

  gridValues[row][col] = true;
  let square = 1;
  let stack_x = new Array();
  let stack_y = new Array();

  stack_x.push(row);
  stack_y.push(col);

  updateTraversalCount(square++);

  while (stack_x.length > 0 && stack_y.length > 0) {
    const currRow = stack_x.pop();
    const currCol = stack_y.pop();

    changeGridColor(currRow, currCol, "bg-darkOrange");

    if (currRow === destRow && currCol === destCol) {
      console.log("Found Answer: " + currRow + " " + currCol);
      return;
    }

    await Sleep(30);

    if (!OutOfGrid(currRow + 1, currCol) && gridValues[currRow + 1][currCol] === "") {
      stack_x.push(currRow + 1);
      stack_y.push(currCol);
      updateTraversalCount(square++);
      gridValues[currRow + 1][currCol] = "path";
    }

    if (!OutOfGrid(currRow, currCol + 1) && gridValues[currRow][currCol + 1] === "") {
      stack_x.push(currRow);
      stack_y.push(currCol + 1);
      updateTraversalCount(square++);
      gridValues[currRow][currCol + 1] = "path";
    }

    if (!OutOfGrid(currRow - 1, currCol) && gridValues[currRow - 1][currCol] === "") {
      stack_x.push(currRow - 1);
      stack_y.push(currCol);
      updateTraversalCount(square++);
      gridValues[currRow - 1][currCol] = "path";
    }

    if (!OutOfGrid(currRow, currCol - 1) && gridValues[currRow][currCol - 1] === "") {
      stack_x.push(currRow);
      stack_y.push(currCol - 1);
      updateTraversalCount(square++);
      gridValues[currRow][currCol - 1] = "path";
    }
  }

  reactToastError();
};

export default DFS;
