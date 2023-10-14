import "./App.css";
import Navbar from "./Navbar.js";
import Sidebar from "./Sidebar.js";
import SecondNav from "./SecondNav.js";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="toAdjust">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
