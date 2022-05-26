import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Reg() {
  const [data, setData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  });

  const { username, firstname, lastname, password, confirmpassword } = data;

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://roughwork3-6caae-default-rtdb.firebaseio.com/register.json",
        data
      )
      .then(() => alert("success"));
  };
  let navigate = useNavigate();

  const [auth, setAuth] = useState(false);

  if (auth) {
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={submit}>
        <center>
          <h2>Registration</h2>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={change}
          />
          <br />
          <br />
          <input
            type="text"
            name="firstname"
            placeholder="firstname"
            value={firstname}
            onChange={change}
          />
          <br />
          <br />
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            value={lastname}
            onChange={change}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={change}
          />
          <br />
          <br />
          <input
            type="password"
            name="confirmpassword"
            placeholder="confirm password"
            value={confirmpassword}
            onChange={change}
          />
          <br />
          <br />
          {password != confirmpassword ? (
            <p style={{ color: "red" }}>passwords are not same</p>
          ) : null}
          <button>Submit</button>
          <br /> <br />
          <button onClick={() => setAuth(true)}>Back</button>
        </center>
      </form>
    </div>
  );
}
export default Reg;
