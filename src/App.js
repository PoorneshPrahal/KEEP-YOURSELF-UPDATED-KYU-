import "./App.css";
import Home from "./Components/Home/home";
import News from "./Components/News/news";
import SpecificNews from "./Components/SpecificNews/SpecificNews.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Comments from "./Components/Comments/Comments";
import Summarize from "./Components/Summarize/Summarize";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/main" element={<Main />} />

      <Route path="/main" element={<Main/>}/>

          <Route path="/news" element={<News />} />

      <Route path="/login" element={<Login/>}/>

      <Route path="/signup" element={<Signup/>}/>

      <Route path="/comments" element={<Comments/>}/>

      <Route path="/summarize" element={<Summarize/>}/>


          <Route path="/specific" element={<SpecificNews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
