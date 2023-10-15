import "./App.css";
import Home from "./Components/Home/home";

import Navbar from "./Navbar.js";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        {/* <Home /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
