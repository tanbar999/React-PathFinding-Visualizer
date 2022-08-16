import { React } from "react";
import { GridProvider } from "./GridContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import MainPage from "./pages/MainPage";
import "./index.css";

function App() {
  return (
    <div className="bg-background">
      <GridProvider>
        <MainPage />
      </GridProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
