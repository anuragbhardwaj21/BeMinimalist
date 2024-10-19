import { Toaster } from "react-hot-toast";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <AllRoutes />
      <Toaster />
    </>
  );
}

export default App;
