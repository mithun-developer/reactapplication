import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

import { useNavigate, Link } from "react-router-dom";
import { getuser } from "./action";

import { Navbar, Container, Nav } from "react-bootstrap";

import { Button } from "react-bootstrap";

function Login() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const [auth, setAuth] = useState(false);
  let navigate = useNavigate();

  if (auth) {
    navigate("/stamp");
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
      <Navbar bg="primary" variant="dark">
        <Container style={{ marginLeft: "0rem" }}>
          <Nav className="me-auto">
            <Nav.Link style={{ float: "right" }} href="/leave">
              Apply Leave
            </Nav.Link>
            <Nav.Link href="/expenses">Claim Expenses</Nav.Link>

            <Nav.Link href="https://pakricorn.com/">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <form onSubmit={submit}>
        <center>
          <h1 style={{ fontFamily: "fantasy" }}>Stamp</h1>
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
          <Button
            onClick={() => {
              setAuth(true);
              dispatch(getuser(username));
            }}
            as="input"
            type="submit"
            value="Login"
          />{" "}
        </center>
      </form>
      <></>
    </div>
  );
}

export default Login;
