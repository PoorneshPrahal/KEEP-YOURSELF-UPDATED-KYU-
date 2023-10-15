import "./App.css";
import Home from "./Components/Home/home";
import News from "./Components/News/news";

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from "./Components/Navbar/Navbar.js";
import Sidebar from "./Components/Sidebar/Sidebar";

import Main from "./Components/Main/Main";
import { SkeletonTheme } from "react-loading-skeleton";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Routes>

      <Route path="/" element={<Home/>}/>

      <Route path="/main" element={<Main/>}/>

      <Route path="/news" element={<News/>}/>



      </Routes>
      
      
      </BrowserRouter>


    </div>
  );
}

export default App;
