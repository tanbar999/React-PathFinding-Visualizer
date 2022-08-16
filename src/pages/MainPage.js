import { React, useState, useEffect, useContext } from "react";
import FullGrid from "../components/FullGrid";
import Navbar from "../components/Navbar";
import gridContext from "../GridContext";
import { actionXMap, actionYMap, actionXMapD, actionYMapD } from "../algorithmHelper/helper/KeyboardInput";

function MainPage() {
  const { rowSize, colSize, traverseSquare } = useContext(gridContext);

  const [startRow, setStartRow] = useState(0);
  const [startCol, setStartCol] = useState(0);
  const [destRow, setDestRow] = useState(rowSize - 1);
  const [destCol, setDestCol] = useState(colSize - 1);

  function handleKeyPress(e) {
    const actionX = actionXMap[e.key];
    const actionY = actionYMap[e.key];
    const actionXD = actionXMapD[e.key];
    const actionYD = actionYMapD[e.key];
    actionX && setDestCol(actionX);
    actionY && setDestRow(actionY);
    actionXD && setStartCol(actionXD);
    actionYD && setStartRow(actionYD);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div onKeyPress={handleKeyPress}>
      <Navbar startRow={startRow} startCol={startCol} destRow={destRow} destCol={destCol} />
      <div className="text-center my-4 font-bold text-white">
        <p>Number of Squares traversed : {traverseSquare}</p>
      </div>
      <FullGrid startRow={startRow} startCol={startCol} destRow={destRow} destCol={destCol} />
    </div>
  );
}

export default MainPage;
