import { React, useContext, useState } from "react";
import gridContext from "../GridContext";

function Navbar({ startRow, startCol, destRow, destCol }) {
  const [algo, setAlgo] = useState("DFS");
  const { startPathFinding, Reset, ResetPath } = useContext(gridContext);

  const changeAlgo = (newAlgo) => {
    setAlgo(newAlgo);
  };

  return (
    <div className="flex justify-between items-center w-full border-gray-900 border-solid drop-shadow-xl bg-headerColor">
      <div className="flex-none py-3 px-3 font-sans font-extrabold text-2xl font-pacifico">Pathfinding Visualizer</div>
      <div className="px-4">
        <button
          className={
            algo === "DFS"
              ? "border-2 rounded-2xl p-1 px-4 font-semibold text-md bg-blue-700 border-black hover:bg-blue-200"
              : "border-2 rounded-2xl p-1 px-4 font-semibold text-md bg-blue-200 border-black hover:bg-blue-700"
          }
          onClick={() => changeAlgo("DFS")}
        >
          DFS
        </button>
      </div>
      <div className="px-4">
        <button
          className={
            algo === "BFS"
              ? "border-2 rounded-2xl p-1 px-4 font-semibold text-md bg-blue-700 border-black hover:bg-blue-200"
              : "border-2 rounded-2xl p-1 px-4 font-semibold text-md bg-blue-200 border-black hover:bg-blue-700"
          }
          onClick={() => changeAlgo("BFS")}
        >
          BFS
        </button>
      </div>
      <div className="px-4">
        <button
          className={
            algo === "Spiral"
              ? "border-2 rounded-2xl p-1 px-4 font-semibold text-md bg-blue-700 border-black hover:bg-blue-200"
              : "border-2 rounded-2xl p-1 px-4 font-semibold text-md bg-blue-200 border-black hover:bg-blue-700"
          }
          onClick={() => changeAlgo("Spiral")}
        >
          Spiral
        </button>
      </div>
      <div className="px-4">
        <button
          className={
            algo === "Astar"
              ? "border-2 rounded-2xl p-1 px-4 font-semibold text-md bg-blue-700 border-black hover:bg-blue-200"
              : "border-2 rounded-2xl p-1 px-4 font-semibold text-md bg-blue-200 border-black hover:bg-blue-700"
          }
          onClick={() => changeAlgo("Astar")}
        >
          A-star
        </button>
      </div>
      <div className="px-4">
        <button
          className={
            algo === "Dijkstra"
              ? "border-2 rounded-2xl p-1 px-4 font-semibold text-md bg-blue-700 border-black hover:bg-blue-200"
              : "border-2 rounded-2xl p-1 px-4 font-semibold text-md bg-blue-200 border-black hover:bg-blue-700"
          }
          onClick={() => changeAlgo("Dijkstra")}
        >
          Dijkstra
        </button>
      </div>
      <div className="px-4">
        <button
          className="border-2 rounded-md p-1 px-4 font-semibold text-md bg-green-600 border-black hover:bg-green-900"
          onClick={() => startPathFinding(startRow, startCol, destRow, destCol, algo)}
        >
          Go
        </button>
      </div>
      <div className="px-4">
        <button
          className="border-2 rounded-md p-1 px-2 font-semibold text-md bg-red-600 border-black hover:bg-red-900"
          onClick={() => ResetPath()}
        >
          Reset Path
        </button>
      </div>
      <div className="px-4">
        <button
          className="border-2 rounded-md p-1 px-2 font-semibold text-md bg-red-600 border-black hover:bg-red-900"
          onClick={() => Reset()}
        >
          Reset All
        </button>
      </div>
    </div>
  );
}

export default Navbar;
