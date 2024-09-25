import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../components/login";
import Stamp from "../components/stamp";

import Search from "../components/search";

import Searchpersons from "../components/searchpersons";

import Country from "../components/countrysearch";

import Shopping from "../components/shopping";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/stamp" element={<Stamp />}></Route>

          <Route path="/search" element={<Search />}></Route>
          <Route path="/searchpersons" element={<Searchpersons />}></Route>

          <Route path="/country" element={<Country />}></Route>

          <Route path="/shopping" element={<Shopping />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
