import OutOfGrid from "./helper/OutOfGrid";
import Sleep from "./helper/Sleep";

const Spiral = async (
  row,
  col,
  destRow,
  destCol,
  gridValues,
  changeGridColor,
  updateTraversalCount,
  reactToastError
) => {
  console.log("Traversing Spiral from (" + row + "," + col + ") to (" + destRow + "," + destCol + ")");

  gridValues[row][col] = true;
  let square = 1;
  let stack_x = new Array();
  let stack_y = new Array();

  stack_x.push(row);
  stack_y.push(col);

  updateTraversalCount(square++);

  while (stack_x.length > 0 && stack_y.length > 0) {
    let currRow = stack_x.shift();
    let currCol = stack_y.shift();

    changeGridColor(currRow, currCol, "bg-darkOrange");

    if (currRow === destRow && currCol === destCol) {
      console.log("Found Answer: " + currRow + " " + currCol);
      return;
    }

    await Sleep(30);

    currRow++;
    if (!OutOfGrid(currRow, currCol) && gridValues[currRow][currCol] === "") {
      stack_x.push(currRow);
      stack_y.push(currCol);
      updateTraversalCount(square++);
      gridValues[currRow][currCol] = "path";
    }

    let nextRow = currRow;
    let nextCol = currCol + 1;

    while (!OutOfGrid(nextRow - 1, nextCol) && gridValues[nextRow - 1][nextCol] !== "") {
      if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
        stack_x.push(nextRow);
        stack_y.push(nextCol);
        updateTraversalCount(square++);
        gridValues[nextRow][nextCol] = "path";
      }
      nextCol++;
    }

    if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
      stack_x.push(nextRow);
      stack_y.push(nextCol);
      updateTraversalCount(square++);
      gridValues[nextRow][nextCol] = "path";
    }

    nextRow = nextRow - 1;

    while (!OutOfGrid(nextRow, nextCol - 1) && gridValues[nextRow][nextCol - 1] !== "") {
      if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
        stack_x.push(nextRow);
        stack_y.push(nextCol);
        updateTraversalCount(square++);
        gridValues[nextRow][nextCol] = "path";
      }
      nextRow--;
    }

    if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
      stack_x.push(nextRow);
      stack_y.push(nextCol);
      updateTraversalCount(square++);
      gridValues[nextRow][nextCol] = "path";
    }

    nextCol = nextCol - 1;

    while (!OutOfGrid(nextRow + 1, nextCol) && gridValues[nextRow + 1][nextCol] !== "") {
      if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
        stack_x.push(nextRow);
        stack_y.push(nextCol);
        updateTraversalCount(square++);
        gridValues[nextRow][nextCol] = "path";
      }
      nextCol--;
    }

    if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
      stack_x.push(nextRow);
      stack_y.push(nextCol);
      updateTraversalCount(square++);
      gridValues[nextRow][nextCol] = "path";
    }

    nextRow++;

    while (!OutOfGrid(nextRow, nextCol + 1) && gridValues[nextRow][nextCol + 1] !== "") {
      if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
        stack_x.push(nextRow);
        stack_y.push(nextCol);
        updateTraversalCount(square++);
        gridValues[nextRow][nextCol] = "path";
      }
      nextRow++;
    }

    if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
      stack_x.push(nextRow);
      stack_y.push(nextCol);
      updateTraversalCount(square++);
      gridValues[nextRow][nextCol] = "path";
    }

    nextCol++;

    while (!OutOfGrid(nextRow - 1, nextCol) && gridValues[nextRow - 1][nextCol] !== "") {
      if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
        stack_x.push(nextRow);
        stack_y.push(nextCol);
        updateTraversalCount(square++);
        gridValues[nextRow][nextCol] = "path";
      }
      nextCol++;
    }

    if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
      stack_x.push(nextRow);
      stack_y.push(nextCol);
      updateTraversalCount(square++);
      gridValues[nextRow][nextCol] = "path";
    }

    nextRow--;

    while (nextRow !== stack_x[0] && nextCol !== stack_y[0]) {
      if (!OutOfGrid(nextRow, nextCol) && gridValues[nextRow][nextCol] === "") {
        stack_x.push(nextRow);
        stack_y.push(nextCol);
        updateTraversalCount(square++);
        gridValues[nextRow][nextCol] = "path";
      }
      nextRow--;
    }

    console.log("ROW -> " + stack_x);
    console.log("COLUMNS -> " + stack_y);
  }

  reactToastError();
};

export default Spiral;
