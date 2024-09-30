import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Stamp() {
  const initial = [
    {
      project: "",
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
  const [data, setData] = useState(initial);

  const change = (index, e) => {
    const values = [...data]; // list of stamp items, stamp item = all textboxes, button

    values[index][e.target.name] = e.target.value; //updating a specific element in the object
    setData(values); // setting the values again to data
  };

  const addRows = () => {
    setData([...data, initial]);
  };

  const delrows = (index) => {
    const values = [...data];
    values.splice(index, 1);
    setData(values);
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://roughwork3-6caae-default-rtdb.firebaseio.com/register.json",
        data
      )
      .then(() => alert("Submitted"));
  };

  const [total, setTotal] = useState();

  const save = () => {
    let res = 0;
    for (let i = 0; i < data.length; i++) {
      // console.log("Rama----", Object.keys(data[i]));
      // console.log("Rama2----", typeof (1 + 1 + "2"));
      // Object.keys(data[i]).forEach((e, i) => {
      //   console.log("---", data[i][`${e}`]);
      //   // console.log(e, data[i][""]);
      //   // res = res + Number(data[i][e]);
      // });
      res =
        res +
        Number(data[i].day1) +
        Number(data[i].day2) +
        Number(data[i].day3) +
        Number(data[i].day4) +
        Number(data[i].day5) +
        Number(data[i].day6) +
        Number(data[i].day7) +
        Number(data[i].day8) +
        Number(data[i].day9) +
        Number(data[i].day10) +
        Number(data[i].day11) +
        Number(data[i].day12) +
        Number(data[i].day13) +
        Number(data[i].day14) +
        Number(data[i].day15);
    }

    setTotal(res);
  };

  const [auth, setAuth] = useState(false);
  let navigate = useNavigate();

  if (auth) {
    navigate("/");
  }

  return (
    <div className="body">
      <form onSubmit={submit}>
        <center>
          <div style={{ display: "inline-flex" }}>
            <h1>STAMP- </h1>

            <GetDateMonth />
          </div>
          <h4 style={{ float: "right" }}>{total}</h4>
          <br />
          {data.map((val, index) => (
            <div key={index}>
              <input
                type="number"
                name="project"
                style={{ width: 150 }}
                value={val.project}
                onChange={(event) => change(index, event)}
                placeholder="Project ID"
              />{" "}
              <input
                type="number"
                name="day1"
                style={{ width: 50 }}
                value={val.day1}
                onChange={(event) => change(index, event)}
                placeholder="Sun"
              />{" "}
              <input
                type="number"
                name="day2"
                style={{ width: 50 }}
                value={val.day2}
                onChange={(event) => change(index, event)}
                placeholder="Mon"
              />{" "}
              <input
                type="number"
                name="day3"
                style={{ width: 50 }}
                value={val.day3}
                onChange={(event) => change(index, event)}
                placeholder="Tue"
              />{" "}
              <input
                type="number"
                name="day4"
                style={{ width: 50 }}
                value={val.day4}
                onChange={(event) => change(index, event)}
                placeholder="Wed"
              />{" "}
              <input
                type="number"
                name="day5"
                style={{ width: 50 }}
                value={val.day5}
                onChange={(event) => change(index, event)}
                placeholder="Thu"
              />{" "}
              <input
                type="number"
                name="day6"
                style={{ width: 50 }}
                value={val.day6}
                onChange={(event) => change(index, event)}
                placeholder="Fri"
              />{" "}
              <input
                type="number"
                name="day7"
                style={{ width: 50 }}
                value={val.day7}
                onChange={(event) => change(index, event)}
                placeholder="Sat"
              />{" "}
              <input
                type="number"
                name="day8"
                style={{ width: 50 }}
                value={val.day8}
                onChange={(event) => change(index, event)}
                placeholder="Sun"
              />{" "}
              <input
                type="number"
                name="day9"
                style={{ width: 50 }}
                value={val.day9}
                onChange={(event) => change(index, event)}
                placeholder="Mon"
              />{" "}
              <input
                type="number"
                name="day10"
                style={{ width: 50 }}
                value={val.day10}
                onChange={(event) => change(index, event)}
                placeholder="Tue"
              />{" "}
              <input
                type="number"
                name="day11"
                style={{ width: 50 }}
                value={val.day11}
                onChange={(event) => change(index, event)}
                placeholder="Wed"
              />{" "}
              <input
                type="number"
                name="day12"
                style={{ width: 50 }}
                value={val.day12}
                onChange={(event) => change(index, event)}
                placeholder="Thu"
              />{" "}
              <input
                type="number"
                name="day13"
                style={{ width: 50 }}
                value={val.day13}
                onChange={(event) => change(index, event)}
                placeholder="Fri"
              />{" "}
              <input
                type="number"
                name="day14"
                style={{ width: 50 }}
                value={val.day14}
                onChange={(event) => change(index, event)}
                placeholder="Sat"
              />{" "}
              <input
                type="number"
                name="day15"
                style={{ width: 50 }}
                value={val.day15}
                onChange={(event) => change(index, event)}
                placeholder="Sun"
              />{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addRows();
                }}
              >
                +
              </button>{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  delrows();
                }}
              >
                -
              </button>
            </div>
          ))}
          <br />
          <br />
          <button onClick={() => setAuth(true)}>Back</button>{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              setData(initial);
            }}
          >
            Clear
          </button>{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              save();
            }}
          >
            Save
          </button>{" "}
          <br />
          <br />
          <button>Submit</button>
        </center>
      </form>
    </div>
  );
}

export default Stamp;

export function GetDateMonth() {
  const getmonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date();
  return (
    <React.Fragment>
      <h1>{getmonths[d.getMonth()]}</h1>
    </React.Fragment>
  );
}
