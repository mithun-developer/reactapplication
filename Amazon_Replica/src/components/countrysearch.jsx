import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Data from "../components/countries.json";

function Country() {
  const [data, setdata] = useState("");

  return (
    <div>
      <center>
        <input
          type="text"
          value={data}
          onChange={(e) => setdata(e.target.value)}
        />
        {Data.filter((country) =>
          country.name.toLowerCase().includes(data)
        ).map((country) => {
          return (
            <div
              style={{
                border: "1px solid black",

                maxWidth: "80px",
              }}
            >
              {country.name}
            </div>
          );
        })}
        <Condition />
      </center>
    </div>
  );
}
export default Country;

function Condition() {
  const [data, setdata] = useState({
    country: "",
    sta: "",
  });

  const { country, sta } = data;

  let navigate = useNavigate();
  const [auth, setauth] = useState(false);
  if (auth) {
    navigate("/");
  }

  const change = (e) => {
    setdata({
      country: e.target.value,
      sta: e.target.value,
    });
  };

  return (
    <div>
      <center>
        <h3>Please Select your country</h3>
        <select value={country} onChange={change}>
          <option value="0">India</option>
          <option value="1">America</option>
          <option value="2">Australia</option>
          <option value="3">New zealand</option>
        </select>{" "}
        <br />
        <br />
        <select value={sta}>
          <option value="0">Delhi</option>
          <option value="1">Washington</option>
          <option value="2">Sydney</option>
          <option value="3">Wellington</option>
        </select>{" "}
        <br />
        <br />
        <button onClick={() => setauth(true)}>Back</button>
      </center>
    </div>
  );
}
