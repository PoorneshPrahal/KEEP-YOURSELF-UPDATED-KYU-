import "./App.css";
import Home from "./Components/Home/home";
import News from "./Components/News/news";

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from "./Components/Navbar/Navbar.js";
import Sidebar from "./Components/Sidebar/Sidebar";

import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Comments from "./Components/Comments/Comments";
import Popup from "./Components/Popup/Popup";
import Advertise from "./Components/Advertise/Advertise";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Routes>

      <Route path="/" element={<Home/>}/>

      <Route path="/main" element={<Main/>}/>

      <Route path="/news" element={<News/>}/>

      <Route path="/login" element={<Login/>}/>

      <Route path="/signup" element={<Signup/>}/>

      <Route path="/comments" element={<Comments/>}/>

      <Route path="/popup" element={<Popup/>}/>

      <Route path="/advertise" element={<Advertise/>}/>


      </Routes>
      
      
      </BrowserRouter>


    </div>
  );
}

export default App;
