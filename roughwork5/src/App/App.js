import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../Components/login";
import Home from "../Components/home";

import Reg from "../Components/Registration";

import Cal from "../Components/cal";
import logo from "../Images/logo192.png";

import Contact from "../Components/contact";
import About from "../Components/about";

import Stamp from "../Components/stamp";
import Sample from "../Sample/Sample";
import MyTest from "../Sample/MyTest";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "grey" }}>
      <img src={logo} />

      {/* <header className="App-header"></header> */}

      <BrowserRouter>
        <Link to="/registration" style={{ float: "right" }}>
          Register
        </Link>{" "}
        <Link to="/contact" style={{ float: "right" }}>
          Contact us |
        </Link>
        <Link to="/cal">Cal</Link>
        <Link to="/about" style={{ float: "right" }}>
          About |
        </Link>
        <Link to="/stamp" style={{ float: "right" }}>
          Stamp |
        </Link>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Reg />} />
          <Route path="/cal" element={<Cal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/stamp" element={<Stamp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
