import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getuser } from "../components/actions";

import Button from "react-bootstrap/Button";

function Login() {
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;
  const change = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  let navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  if (auth) {
    navigate("/stamp");
  }
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/search" style={{ float: "right" }}>
        | Order Food
      </Link>

      <Link to="/searchpersons" style={{ float: "right" }}>
        | Search Employee
      </Link>

      <Link to="/country" style={{ float: "right" }}>
        | Search Country
      </Link>

      <Link to="/shopping" style={{ float: "right" }}>
        Shopping
      </Link>

      <center>
        <h1>Amazon Replica</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={change}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={change}
        />{" "}
        <br />
        <br />
        <Button
          onClick={() => {
            setAuth(true);
            dispatch(getuser(username));
          }}
          href="#"
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default Login;
