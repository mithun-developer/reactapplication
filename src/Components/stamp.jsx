import React, { useState } from "react";

import axios from "axios";

import "../styles/styles.css";

import logo from "../images/pakricorn.png";

import { useNavigate, Link } from "react-router-dom";

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
    const x = [...data, ...initial];
    console.log("---", x);
    setData(x);
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
      <img src={logo} />
      <form onSubmit={submit} className="content-wrap">
        <center>
          <div style={{ display: "inline-flex" }}>
            <h1>STAMP- </h1>
            <GetDateMonth />

            <p style={{ paddingLeft: "7rem", paddingTop: "1rem" }}>{total}</p>
          </div>
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
      <Footer />
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

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row" style={{ display: "flex" }}>
          {/*column1*/}
          <div className="col">
            <h4>PAKRICORN USA</h4>
            <ul className="list-unstyled" type="none">
              <li>342-420-6969</li>
              <li>Dallas, Texas</li>
              <li>Frisco County North</li>
            </ul>
          </div>
          {/*column2*/}
          <div className="col">
            <h4>PAKRICORN IND</h4>
            <ul className="list-unstyled" type="none">
              <li>040-23554542</li>
              <li>Hyderabad, Telangana</li>
              <li>Jubilee Hills East</li>
            </ul>
          </div>
          {/*column3*/}
          <div className="row">
            <h4>PAKRICORN AUS</h4>
            <ul className="list-unstyled" type="none">
              <li>61-285-564551</li>
              <li>Liverpool, Sydney</li>
              <li>New South Wales West</li>
            </ul>
          </div>

          {/*column4*/}
          <div className="row">
            <h4>PAKRICORN FRANCE</h4>
            <ul className="list-unstyled" type="none">
              <li>33-285-952584</li>
              <li>Parc Bellevue, Limoges</li>
              <li>France South</li>
            </ul>
          </div>

          {/*column5*/}
          <div className="row">
            <h4>PAKRICORN MALAYSIA</h4>
            <ul className="list-unstyled" type="none">
              <li>60-534-647885</li>
              <li>Mount Kiara, Kuala Lumpur</li>
              <li>Malaysia West</li>
            </ul>
          </div>

          {/*column6*/}
          <div className="row">
            <h4>PAKRICORN SINGAPORE</h4>
            <ul className="list-unstyled" type="none">
              <li>60-205-505001</li>
              <li>Bishan, Mary Mount</li>
              <li>Singapore East</li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="row">
          <p className="col-small">
            <center>
              &copy;{new Date().getFullYear()} PAKRICORN TECHNO SOLUTIONS | All
              Rights Reserved | <Link to="/terms">Terms Of Service</Link> |
              <Link to="/privacy"> Privacy </Link>
            </center>
          </p>
        </div>
      </div>
    </div>
  );
}
