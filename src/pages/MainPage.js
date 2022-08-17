import { React, useState, useEffect, useContext } from "react";
import FullGrid from "../components/FullGrid";
import Navbar from "../components/Navbar";
import gridContext from "../GridContext";
import { actionXMap, actionYMap, actionXMapD, actionYMapD } from "../algorithmHelper/helper/KeyboardInput";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaDev } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
      <div className="flex justify-center align-center pb-2">
        <span className="text-gray-400 font-semibold">Connect with me : </span>
        <a href="https://www.linkedin.com/in/taniskannpurna/">
          <FaLinkedin className="text-2xl text-gray-400 mx-2" />
        </a>
        <a href="https://twitter.com/TaniskAnnpurna">
          <FaTwitterSquare className="text-2xl text-gray-400 mx-2" />
        </a>
        <a href="mailto:tanbar999@gmail.com">
          <SiGmail className="text-2xl text-gray-400 mx-2" />
        </a>
        <a href="https://github.com/tanbar999">
          <FaGithubSquare className="text-2xl text-gray-400 mx-2" />
        </a>
        <a href="https://dev.to/taniskannpurna">
          <FaDev className="text-2xl text-gray-400 mx-2" />
        </a>
      </div>
    </div>
  );
}

export default MainPage;
