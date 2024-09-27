import React, { useState } from "react";
import Login from "../Components/login.jsx";

import Annual from "../Components/annualleave";

import Personal from "../Components/personalleave";

import Sick from "../Components/sickleave";

import Stamp from "../Components/stamp";

import Terms from "../Components/terms";

import Expenses from "../Components/expenses";

import Privacy from "../Components/privacy";

import Leave from "../Components/leave";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/stamp" element={<Stamp />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/annual" element={<Annual />} />

          <Route path="/personal" element={<Personal />} />

          <Route path="/sick" element={<Sick />} />

          <Route path="/expenses" element={<Expenses />} />

          <Route path="/leave" element={<Leave />} />

          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
