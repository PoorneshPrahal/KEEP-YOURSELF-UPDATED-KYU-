import "./App.css";
import Home from "./Components/Home/home";
import News from "./Components/News/news";
import SpecificNews from "./Components/SpecificNews/SpecificNews.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/main" element={<Main />} />

          <Route path="/news" element={<News />} />

          <Route path="/specific" element={<SpecificNews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
