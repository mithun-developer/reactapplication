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

  const change = (e) => {
    setdata({
      leave: e.target.value,
    });
  };

  const [val, setvalue] = useState("");

  const changing = (e) => {
    setvalue({
      val: e.target.value,
    });
  };

  //Annual leave
  const [annualleavebalance, setAnnualLeaveBalance] = useState(24);
  const applyannual = () => {
    setAnnualLeaveBalance(annualleavebalance - Number(leave));
  };

  //personal leave
  const [personalleavebalance, setPersonalLeaveBalance] = useState(10);
  const applypersonal = () => {
    setPersonalLeaveBalance(personalleavebalance - Number(leave));
  };

  //sick leave
  const [sickleavebalance, setSickLeaveBalance] = useState(12);
  const applysick = () => {
    setSickLeaveBalance(sickleavebalance - Number(leave));
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
          <h4>Annual Leave balance is {annualleavebalance}</h4>
          <h4>Personal Leave balance is {personalleavebalance}</h4>
          <h4>Sick Leave balance is {sickleavebalance}</h4>
        </div>
        <div style={{ marginTop: "-12rem", marginLeft: "4rem" }}>
          <center>
            <h2 style={{ fontFamily: "fantasy" }}>Leave Application</h2>
            <select onChange={changing}>
              <option value="0">Select</option>
              <option value="1">Annual Leave</option>
              <option value="2">Personal Leave</option>
              <option value="3">Sick Leave</option>
            </select>{" "}
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
                if (val.val == "1") {
                  applyannual();
                } else if (val.val == "2") {
                  applypersonal();
                } else if (val.val == "3") {
                  applysick();
                }

                // switch(key){
                //   case "1":
                //     applyannual();
                //     case "2":
                //       applypersonal();
                //       case "3":
                //         applysick();
                //         default:

                //}

                console.log("mithun", val);

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
      <Nav.Link eventKey="link-1">Personal Leaves</Nav.Link>
      <Nav.Link eventKey="link-2">Sick Leaves</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Admin
      </Nav.Link>
    </Nav>
  );
}
