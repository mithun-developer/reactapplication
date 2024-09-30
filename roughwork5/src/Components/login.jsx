import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getuser } from "../Components/actions";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const dispatch = useDispatch();

  const [auth, setAuth] = useState(false);
  let navigate = useNavigate();

  if (auth) {
    navigate("/home");
  }

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <marquee style={{ color: "red" }}>
        This site is under development. Please visit after some time
      </marquee>

      <form onSubmit={submit}>
        <center>
          <h1>Test Application</h1>
          <input
            name="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={change}
          />{" "}
          <br />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={change}
          />{" "}
          <br />
          <br />
          <button
            onClick={() => {
              setAuth(true);
              dispatch(getuser(username));
            }}
          >
            Login
          </button>
        </center>
      </form>
    </div>
  );
}

export default Login;
