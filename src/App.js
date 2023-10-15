import "./App.css";
import Home from "./Components/Home/home";
import News from "./Components/News/news";

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from "./Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <News/>

      

    </div>
  );
}

export default App;
