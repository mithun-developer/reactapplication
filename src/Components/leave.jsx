import React, { useState } from "react";

function Leave() {
  const [data, setdata] = useState({
    leave: "",
  });
  const { leave } = data;
  const change = (e) => {
    setdata({
      leave: e.target.value,
    });
  };

  let leavebalance = 10;

  const [val, setval] = useState();
  const apply = () => {
    setval(leavebalance - Number(data.leave));
  };

  const [oldleavebalance, setNewleavebalance] = useState();
  const checkleavebalance = () => {
    setNewleavebalance(val);
  };

  return (
    <div>
      <center>
        <h2>Leave Application</h2>
        <h4>leave balance is {oldleavebalance}</h4>
        <input
          type="number"
          name="leave"
          placeholder="Number Of Leaves"
          value={leave}
          onChange={change}
        ></input>{" "}
        <br /> <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            apply();
          }}
        >
          Apply
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            checkleavebalance();
          }}
        >
          Check Leaves
        </button>
        {val}
        <br />
        {oldleavebalance}
      </center>
    </div>
  );
}

export default Leave;
