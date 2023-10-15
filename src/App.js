import "./App.css";
import Home from "./Components/Home/home";
import News from "./Components/News/news";

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from "./Navbar.js";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
