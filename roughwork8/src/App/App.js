import Login from "../components/login";
import Hoc from "../components/hoc";

import Home from "../components/home";

import Stamp from "../components/stamp";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/stamp" element={<Stamp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Hoc(App);
