import logo from "./logo.svg";
import "./App.css";
import Login from "./Component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Help from "./Component/Help";
import Details from "./Component/Details";
import Search from "./Component/Search";
import Registration from "./Component/Registration";

function App() {
  return (
    // <div className="App" style={{ backgroundColor: "#333333" }}>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/help" element={<Help />} />
      <Route path="/search" element={<Search />} />
      <Route path="/details" element={<Details />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/" element={<Login />} />
    </Routes>
    // </div>
  );
}

export default App;
