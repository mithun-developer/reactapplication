import React, { useState } from "react";
import Login from "../Components/login";
import Home from "../Components/home";

import Reg from "../Components/Registration";

import Cal from "../Components/cal";

import Contact from "../Components/contact";
import About from "../Components/about";

import Stamp from "../Components/stamp";

import Terms from "../Components/terms";

import Privacy from "../Components/privacy";

import Leave from "../Components/leave";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          {/* <UserContext.Provider value={Login.username}> */}
          <Route path="/home" element={<Home />} />
          {/* </UserContext.Provider> */}
          <Route path="/registration" element={<Reg />} />

          <Route path="/cal" element={<Cal />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/stamp" element={<Stamp />} />

          <Route path="/terms" element={<Terms />} />

          <Route path="/leave" element={<Leave />} />

          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
