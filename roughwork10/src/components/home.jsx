import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Home() {
  const initial = [
    {
      projectid: "",
      day1: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
      day6: "",
      day7: "",
      day8: "",
      day9: "",
      day10: "",
      day11: "",
      day12: "",
      day13: "",
      day14: "",
      day15: "",
    },
  ];

  const [data, setdata] = useState(initial);

  let navigate = useNavigate();
  const [auth, setauth] = useState(false);

  if (auth) {
    navigate("/");
  }

  return (
    <div>
      <center>
        <h1> STAMP</h1>

        {data.map((val, key) => (
          <div key={key}></div>
        ))}
        <button onClick={() => setauth(true)}>Back</button>
      </center>
    </div>
  );
}
export default Home;
