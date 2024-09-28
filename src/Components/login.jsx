import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

import { useNavigate, Link } from "react-router-dom";
import { getuser } from "../Components/action";

import { Navbar, Container, Nav } from "react-bootstrap";

import { Button } from "react-bootstrap";

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
      <Navbar bg="primary" variant="dark">
        <Container style={{ marginLeft: "0rem" }}>
          <Nav className="me-auto">
            <Nav.Link style={{ float: "right" }} href="/leave">
              Apply Leave
            </Nav.Link>
            <Nav.Link href="/stamp">Stamp</Nav.Link>
            <Nav.Link href="/cal">Pricing</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
            <Nav.Link href="/registration">Register</Nav.Link>
            <Nav.Link href="/shopping">Shopping</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/registration" style={{ float: "right" }}>
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
      </Link> */}
      <form onSubmit={submit}>
        <center>
          <h1 style={{ fontFamily: "fantasy" }}>Test Application</h1>
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
