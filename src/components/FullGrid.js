import { React, useContext } from "react";
import gridContext from "../GridContext";
import { motion } from "framer-motion";

function FullGrid({ startRow, startCol, destRow, destCol }) {
  const { rowSize, colSize, backgroundColor, dragFunction } = useContext(gridContext);

  const onClick = (row, col) => {
    dragFunction(row, col);
  };

  const createInnerGrid = (rows, cols) => {
    let innerRows = [];
    for (let j = 0; j < cols; j++) {
      let className = `border-2 border-solid border-boundaryColor p-1 text-center ${backgroundColor[rows][j]} row-${rows} cols-${j} w-[38px] h-[24px] cursor-cell`;
      innerRows.push(
        <motion.td
          className={className}
          key={10 * rows + j}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          animate={
            backgroundColor[rows][j] === "bg-white"
              ? { backgroundColor: "#fff" }
              : backgroundColor[rows][j] === "bg-background"
              ? { backgroundColor: "#264653" }
              : { backgroundColor: ["#dc2f02", "#00f5d4"] }
          }
          onDragEnter={() => onClick(rows, j)}
          onClick={() => onClick(rows, j)}
        >
          {PositionStartandEnd(rows, j)}
        </motion.td>
      );
    }
    return innerRows;
  };

  const createFullGrid = (rows, cols) => {
    let val = [];
    for (let i = 0; i < rows; i++) {
      val.push(<tr key={i}>{createInnerGrid(i, cols)}</tr>);
    }
    return val;
  };

  const PositionStartandEnd = (row, col) => {
    if (startRow === row && startCol === col) return "S";

    if (destRow === row && destCol === col) return "D";

    return "";
  };

  return (
    <div>
      <div className="flex justify-center px-[20px] pb-[10px]">
        <table className="table-fixed">
          <tbody>{createFullGrid(rowSize, colSize)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default FullGrid;
