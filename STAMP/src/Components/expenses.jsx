import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import logo from "../images/pakricorn.png";

import Button from "react-bootstrap/Button";

function Expenses() {
  const [data, setdata] = useState({
    dom: {
      domestic:""
    },
    int: {
      international:""
    }
  });

  const { domestic, international } = data;

  const [image, setimage] = useState(null);

  const change = (e) => {
    setdata({
      domestic: e.target.value,
      international: e.target.value,
    });
  };

  const [auth, setauth] = useState(false);

  let navigate = useNavigate();
  if (auth) {
    navigate("/");
  }

  return (
    <div
      style={{ backgroundColor: "rgb(161, 192, 254) ", minHeight: " 100vh" }}
    >
      <div>
        <img src={logo} />
      </div>
      <marquee style={{ color: "red" }}>
        This page is under development. Please visit after some time
      </marquee>

      <center>
        <h1 style={{ fontFamily: "fantasy" }}>Claim Your Expenses</h1>
        <select value={domestic} onChange={change}>
          <option value="0">Select</option>

          <option value="1">Domestic</option>
          <option value="2">International</option>
        </select>
        {""} {""} {""}
        <select value={international}>
          <option>Select</option>

          <option>BOOKS & SUBSCRIPTIONS</option>
          <option>Car Rental</option>
          <option>Client Hotel</option>
          <option>Miscellaneous Expenses</option>
          <option>Professional Dues</option>

          <option>Postage & Courier Charges</option>
          <option>Telephone Charges - Mobile</option>
          <option>Internet Charges</option>
          <option>Miscellaneous Expenses</option>
          <option>Trainings/Seminars</option>
        </select>
        <br />
        <br />
        <input type="date" />
        <input type="file" onChange={(e) => setimage(e.target.files[0])} /> {""}{" "}
        {""}
        <Button variant="secondary" size="sm">
          Upload
        </Button>
        <br />
        <br />
        <Button variant="secondary" size="sm" onClick={() => setauth(true)}>
          Back
        </Button>
      </center>
    </div>
  );
}

export default Expenses;
