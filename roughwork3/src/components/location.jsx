import React, { useState } from "react";

function Loc() {
  const [data, setData] = useState({
    country: "",
    sta: "",
  });

  const { country, sta } = data;

  const change = (e) => {
    setData({
      country: e.target.value,
      sta: e.target.value,
    });
  };

  return (
    <div>
      <h3>Please select your location</h3>
      <select value={country} onChange={change}>
        <option value="0">Select</option>
        <option value="1">India</option>
        <option value="2">USA</option>
        <option value="3">Australia</option>
      </select>

      <br />
      {}
      <select value={sta}>
        <option value="0">Select</option>
        <option value="1">Hyderabad</option>
        <option value="2">Texas</option>
        <option value="3">Sydney</option>
      </select>

      <textarea style={{ height: "200" }}>subject</textarea>

      <input></input>
    </div>
  );
}

export default Loc;
