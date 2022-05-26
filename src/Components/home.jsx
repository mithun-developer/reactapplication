import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import logo from "../images/mithun.jpeg";

import { useNavigate } from "react-router-dom";

import { UserContext } from "../App/App.js";

function Home() {
  let navigate = useNavigate;
  const [auth, setAuth] = useState(false);

  if (auth) {
    navigate("/");
  }
  return (
    <div>
      <h5>Welcome Mithun,</h5>
      <UserContext.Consumer>
        {(username) => <div>{username}</div>}
      </UserContext.Consumer>
      <Fetchhh />

      <button onClick={() => setAuth(true)}>Back</button>
    </div>
  );
}
export default Home;

export function Fetchhh() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setData(response.data));
  });

  return (
    <div>
      <img src={logo} />
      {data.map((value, id) => (
        <li key={value.id}>{value.title}</li>
      ))}
    </div>
  );
}
