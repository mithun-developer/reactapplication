import React, { useEffect, useState } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function Home() {
  const { username } = useSelector((state) => state.app);
  let navigate = useNavigate;
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);
  return (
    <div>
      <h5>Welcome {username},</h5>
      {(username) => <div>{username}</div>}
      <button onClick={() => setAuth(true)}>Back</button>
      <Fetchhh />
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
      {data.map((value, id) => (
        <li key={value.id}>{value.title}</li>
      ))}
    </div>
  );
}
