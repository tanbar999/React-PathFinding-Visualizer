import { React, useContext, useState } from "react";
import gridContext from "../GridContext";
import Popup from "reactjs-popup";
import { FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar({ startRow, startCol, destRow, destCol }) {
  const [algo, setAlgo] = useState("DFS");
  const { startPathFinding, Reset, ResetPath } = useContext(gridContext);

  const changeAlgo = (newAlgo) => {
    setAlgo(newAlgo);
  };

  return (
    <div className="flex justify-between items-center w-full border-gray-900 border-solid drop-shadow-xl bg-headerColor">
      <div className="flex-none py-3 px-3 font-sans font-extrabold text-2xl font-pacifico">
        Pathfinding Visualizer
        <Popup
          trigger={
            <motion.button className="button px-1" animate={{ y: [-1, 1, -1] }} transition={{ repeat: Infinity }}>
              <FaLightbulb />
            </motion.button>
          }
          modal
        >
          <div className="border-2 border-solid border-black bg-slate-800 text-white rounded-lg p-1 w-[40rem]">
            <p className="text-center pb-4 text-xl font-bold">💁‍♂️💁‍♂️How to use💁‍♂️💁‍♂️</p>
            <p className="text-center text-md font-normal">
              {"💜 Using [W,A,S,D] can move the starting point marked by {S}."}
            </p>
            <p className="text-center text-md font-normal">
              {"💜 Using [⬆️,➡️,⬇️,⬅️] can move the starting point marked by {D}."}
            </p>
            <p className="text-center text-md font-normal">
              {
                "💜 Press Left mouse button and drag to create walls which would act like obstructions for pathfinding algorithms."
              }
            </p>
            <p className="text-center text-md font-normal">
              {"💜 Select the given path-finding algorithms and Hit Go."}
            </p>
            <p className="text-center text-md font-normal">
              {"💜 You can Reset just the Path that was caclculated and watch other pathfinding algorithms."}
            </p>
            <p className="text-center text-md font-normal">
              {"💜 You can Reset All  the Path and the walls i.e. CLEAN SLATE."}
            </p>
          </div>{" "}
        </Popup>
      </div>
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
        <Popup
          trigger={
            <motion.button className="button px-1" whileHover={{ scale: 1.1 }}>
              <FaLightbulb />
            </motion.button>
          }
          modal
        >
          <div className="border-2 border-solid border-black bg-slate-800 text-white rounded-lg p-1 w-[40rem]">
            <p className="text-center pb-4 text-xl font-bold">⛏️DFS⛏️</p>
            <p className="text-center text-md font-normal">
              {
                "DFS stands for Depth-First Search. This searches for destination in a straight path i.e first towards depth until it runs out of the spaces. Here In the grid, we are only moving towards 4 direction as 8 direction movement doesnt add any values in our case"
              }
            </p>
          </div>{" "}
        </Popup>
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
        <Popup
          trigger={
            <motion.button className="button px-1" whileHover={{ scale: 1.1 }}>
              <FaLightbulb />
            </motion.button>
          }
          modal
        >
          <div className="border-2 border-solid border-black bg-slate-800 text-white rounded-lg p-1 w-[40rem]">
            <p className="text-center pb-4 text-xl font-bold">🐟BFS🐟</p>
            <p className="text-center text-md font-normal">
              {
                "BFS stands for Breadth-First Search. This searches for destination in all the adjacent squares i.e first towards adjascent until it runs out of the spaces. Here In the grid, we are only moving towards 4 direction as 8 direction movement doesnt add any values in our case."
              }
            </p>
          </div>{" "}
        </Popup>
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
        <Popup
          trigger={
            <motion.button className="button px-1" whileHover={{ scale: 1.1 }}>
              <FaLightbulb />
            </motion.button>
          }
          modal
        >
          <div className="border-2 border-solid border-black bg-slate-800 text-white rounded-lg p-1 w-[40rem]">
            <p className="text-center pb-4 text-xl font-bold">😵‍💫Spiral😵‍💫</p>
            <p className="text-center text-md font-normal">
              {
                "Spiral Pathfinding is designed by me. The pathfinder moves in a spiral manner. It assumes that the grid is infinite. So, its unblocked by walls. This Algorithm can traverse outside the grid to find the nearest entrance to the grid. This is a brute approach like DFS and BFS."
              }
            </p>
          </div>{" "}
        </Popup>
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
        <Popup
          trigger={
            <motion.button className="button px-1" whileHover={{ scale: 1.1 }}>
              <FaLightbulb />
            </motion.button>
          }
          modal
        >
          <div className="border-2 border-solid border-black bg-slate-800 text-white rounded-lg p-1 w-[40rem]">
            <p className="text-center pb-4 text-xl font-bold">🌟A-star🌟</p>
            <p className="text-center text-md font-normal">
              {
                "A-star is the best pathfinding approach. It has heuristic function and destination function. Heuristic tells the cost to travel to certain square and Destination tells the distance. Adding these we get values for every adjacent squares and traverse that is smallest. In our heuristic function , we have made traversing the diagonals expensive."
              }
            </p>
          </div>{" "}
        </Popup>
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
        <Popup
          trigger={
            <motion.button className="button px-1" whileHover={{ scale: 1.1 }}>
              <FaLightbulb />
            </motion.button>
          }
          modal
        >
          <div className="border-2 border-solid border-black bg-slate-800 text-white rounded-lg p-1 w-[40rem]">
            <p className="text-center pb-4 text-xl font-bold">🌠Dijkstra's🌠</p>
            <p className="text-center text-md font-normal">
              {
                "Dijkstra's Algorithm is a greedy approach where it takes into consideration the distance from its destination and traverse to the square which has shortest distance value. In this case, traversing diagionals will cost more than other squares"
              }
            </p>
          </div>{" "}
        </Popup>
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
