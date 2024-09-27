import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo from "../images/pakricorn.png";

function Leave() {
  const [data, setdata] = useState({
    leave: "",
  });
  const { leave } = data;

  //annual leave
  const [annualleave, setannualleave] = useState(24);
  const applyannual = () => {
    setannualleave(annualleave - Number(leave));
  };

  //personal leave
  const [personalleave, setpersonalleave] = useState(10);
  const applypersonal = () => {
    setpersonalleave(personalleave - Number(leave));
  };

  //Sick leave
  const [sickleave, setsickleave] = useState(12);
  const applysick = () => {
    setsickleave(sickleave - Number(leave));
  };

  const change = (e) => {
    setdata({
      leave: e.target.value,
    });
  };

  const [val, setval] = useState("");
  const changing = (e) => {
    setval({
      val: e.target.value,
    });
  };

  let navigate = useNavigate();
  const [auth, setauth] = useState(false);
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
      <div style={{ marginTop: "2rem" }}>
        <div>
          <StackedExample />
          <h4>Annual Leave balance is {annualleave}</h4>
          <h4>Personal Leave balance is {personalleave}</h4>
          <h4>Sick Leave balance is {sickleave}</h4>
        </div>
        <div style={{ marginTop: "-12rem", marginLeft: "4rem" }}>
          <center>
            <h2 style={{ fontFamily: "fantasy" }}>Leave Application</h2>
            <select onChange={changing}>
              <option value="0">Select</option>
              <option value="1">Annual Leave</option>
              <option value="2">Personal Leave</option>
              <option value="3">Sick Leave</option>
            </select>
            <input
              type="number"
              name="leave"
              placeholder="Number Of Days"
              value={leave}
              onChange={change}
            ></input>{" "}
            <br /> <br />
            <Button
              onClick={(e) => {
                e.preventDefault();
                if (val.val === "1") {
                  applyannual();
                } else if (val.val === "2") {
                  applypersonal();
                } else if (val.val === "3") {
                  applysick();
                }
                alert("Leave applied");
              }}
              as="input"
              type="submit"
              value="Apply"
            />{" "}
            <Button
              onClick={() => {
                setauth(true);
              }}
              as="input"
              type="submit"
              value="Back"
            />
          </center>
        </div>
      </div>
    </div>
  );
}

export default Leave;

function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/annual">Annual Leaves</Nav.Link>
      <Nav.Link href="/personal">Personal Leaves</Nav.Link>
      <Nav.Link href="/sick">Sick Leaves</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Admin
      </Nav.Link>
    </Nav>
  );
}
