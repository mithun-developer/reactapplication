import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const change = (e) => {
    setdata({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };

  let navigate = useNavigate();
  const [auth, setauth] = useState(false);

  if (auth) {
    navigate("/home");
  }
  return (
    <div>
      <center>
        <h1>Test Application</h1>
        <input
          name="username"
          type="text"
          value={username}
          placeholder="username"
          onChange={change}
        ></input>
        <br />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={change}
        ></input>
        <br />
        <button onClick={() => setauth(true)}>Login</button>
      </center>
    </div>
  );
}

export default Login;
