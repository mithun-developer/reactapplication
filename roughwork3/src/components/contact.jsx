import React, { useState } from "react";

import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h2>Contact us</h2>
      <Loc />
      <Subject />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Contact;

export function Loc() {
  const [data, setData] = useState({
    country: "",
    sta: "",
  });

  const { country, sta } = data;

  const change = (e) => {
    setData({
      ...data,
      country: e.target.value,
      sta: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <h6>
        Please select your location and post your query with mail id,we will get
        back to you
      </h6>
      <form onSubmit={submit}>
        <select value={country} onChange={change}>
          <option value="0">Select</option>
          <option name="India" value="1">
            India
          </option>
          <option name="USA" value="2">
            USA
          </option>
          <option name="Australia" value="3">
            Australia
          </option>
        </select>
        <br />
        <select value={sta}>
          <option value="0">Select</option>
          <option name="Hyderabad" value="1">
            Hyderabad
          </option>
          <option name="Texas" value="2">
            Texas
          </option>
          <option name="Sydney" value="3">
            Sydney
          </option>
        </select>{" "}
        <br />
      </form>
    </div>
  );
}

export function Subject() {
  const [data, setData] = useState({
    subj: "",
  });
  const { subj } = data;

  const change = (e) => {
    setData({
      subj: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <textarea
          value={subj}
          style={{ height: 200, width: 400 }}
          onChange={change}
        ></textarea>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
