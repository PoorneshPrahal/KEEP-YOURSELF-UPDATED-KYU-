import "./App.css";
import Home from "./Components/Home/home";

import Navbar from "./Navbar.js";
import Sidebar from "./Sidebar.js";
import SecondNav from "./SecondNav.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
