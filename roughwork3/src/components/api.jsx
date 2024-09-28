import React, { useEffect, useState } from "react";

import axios from "axios";

function Fetchh() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
      response.json().then((json) => setData(json))
    );
  });

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => setData(response.data));
  // });

  return (
    <div>
      <h5>
        {data.map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}
      </h5>
    </div>
  );
}

export default Fetchh;
