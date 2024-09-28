import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function Reg() {
  return (
    <div>
      <h2>Registration Page</h2>

      <Details />

      <br />

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Reg;
export function Details() {
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    password: "",
    confirmpassword: "",
  });

  let navigate = useNavigate();

  const { FirstName, LastName, UserName, password, confirmpassword } = data;
  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const [auth, setAuth] = useState(false);

  if (auth) {
    navigate("/");
  }

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://roughwork3-6caae-default-rtdb.firebaseio.com/register.json",
        data
      )
      .then(() => alert("data submitted successfully"));
  };

  const validation = () => {
    if (
      FirstName.length &&
      LastName.length &&
      UserName.length &&
      password.length &&
      confirmpassword.length <= 1
    ) {
      alert("please enter");
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          value={FirstName}
          placeholder="FirstName"
          name="FirstName"
          onChange={change}
        />{" "}
        <br />
        <input
          type="text"
          value={LastName}
          placeholder="LastName"
          name="LastName"
          onChange={change}
        />{" "}
        <br />
        <input
          type="text"
          value={UserName}
          placeholder="UserName"
          name="UserName"
          onChange={change}
        />{" "}
        <br />
        <input
          type="password"
          value={password}
          placeholder="password"
          name="password"
          onChange={change}
        />{" "}
        <br />
        <input
          type="password"
          value={confirmpassword}
          placeholder="confirmpassword"
          name="confirmpassword"
          onChange={change}
        />{" "}
        {password !== confirmpassword ? (
          <p style={{ color: "red" }}>passwords not matching</p>
        ) : null}{" "}
        <br />
        {/* <div>
          <input type="radio" name="yes"></input>
          <label>male</label>
        </div>
        <div>
          <input type="radio" name="yes"></input>
          <label>female</label>
        </div> */}
        <br />
        <button type="submit">Submit</button> <br />
        <button onClick={() => setAuth(true)}>Back to Home</button> <br />
      </form>
    </div>
  );
}
