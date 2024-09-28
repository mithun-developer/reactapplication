import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login, { Credentials } from "../components/login";

import Contact from "../components/contact";

import Registration from "../components/registration";

import Fetchh from "../components/api";

import Loc from "../components/location";

import Home from "../components/home";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <center>
        <h1>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login name={"Test Application"} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/home" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>

          {/* <Credentials />

          <Loc />

         

          {/* <Fetchh /> */}
        </h1>
      </center>
    </div>
  );
}

export default App;
