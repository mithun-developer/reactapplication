import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

import { useNavigate, Link } from "react-router-dom";
import { getuser } from "./action";

function Login() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  // const [val, setval] = useState({
  //   username: "",
  // });

  // const changename = (e) => {
  //   setval({
  //     username: e.target.value,
  //   });
  // };

  const { username, password } = data;

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
      <Link to="/registration" style={{ float: "right" }}>
        Register
      </Link>{" "}
      <Link to="/contact" style={{ float: "right" }}>
        Contact us |
      </Link>
      <Link to="/cal">Cal</Link>
      <Link to="/about" style={{ float: "right" }}>
        About |
      </Link>
      <Link to="/stamp" style={{ float: "right" }}>
        Stamp |
      </Link>
      <Link to="/leave" style={{ float: "right" }}>
        Apply Leave |
      </Link>
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
