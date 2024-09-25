import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Data from "../components/food.json";

import { Button } from "react-bootstrap";

function Search() {
  const [data, setdata] = useState("");

  const [auth, setAuth] = useState(false);
  let navigate = useNavigate();

  if (auth) {
    navigate("/");
  }

  return (
    <div>
      <center>
        <h3>Search for your food</h3>
        <input
          type="text"
          value={data}
          onChange={(e) => setdata(e.target.value)}
        />

        {Data.filter((food) => food.name.includes(data)).map((food) => {
          const name = food.name;
          return (
            <div
              key={food.id}
              style={{
                border: "1px solid black",
                padding: "2px",
                margin: "2px",
                maxWidth: "100px",
              }}
              onClick={(e) => {
                setdata(name);
              }}
            >
              {food.name}
            </div>
          );
        })}
        <>
          <Button
            onClick={() => setAuth(true)}
            as="input"
            type="button"
            value="Back"
          />{" "}
        </>
      </center>
    </div>
  );
}

export default Search;
