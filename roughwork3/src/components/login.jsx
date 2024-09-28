import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getuser } from "../components/actions";

import { useDispatch } from "react-redux";

import "../App/style.css";

function Login(props) {
  return (
    <diV>
      {props.name} <br />
      <Link to="/contact">Contact us</Link> {}
      <Link to="/registration">Registration</Link>
      <Credentials />
    </diV>
  );
}

export default Login;

export function Credentials() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [auth, setAuth] = useState(false);
  if (auth) {
    navigate("/home");
  }

  const { username, password } = data;

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
      <form onSubmit={submit}>
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
        <button
          onClick={() => {
            setAuth(true);
            dispatch(getuser(username));
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
