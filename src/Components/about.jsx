import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setData(response.data));
  });

  const [auth, setAuth] = useState(false);
  let navigate = useNavigate();

  if (auth) {
    navigate("/");
  }

  return (
    <div>
      <center>
        <h1>What we do</h1> <br />
        <br />
        <button onClick={() => setAuth(true)}>Back</button>
      </center>
      {data.map((value) => (
        <li key={value.id}>{value.title}</li>
      ))}
    </div>
  );
}

export default About;
