import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const change = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.targer.value,
    });
  };

  let navigate = useNavigate();
  const [auth, setauth] = useState(false);
  if (auth) {
    navigate("/home");
  }
  return (
    <div>
      <Link to="/stamp">Stamp</Link>
      <center>
        <h1>Login Page</h1>
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
        <button onClick={() => setauth(true)}>Login</button>
      </center>
    </div>
  );
}

export default Login;
