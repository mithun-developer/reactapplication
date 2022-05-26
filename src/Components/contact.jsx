import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Contact() {
  const [data, setData] = useState({
    country: "",
    sta: "",
  });

  let navigate = useNavigate();
  const [auth, setauth] = useState(false);
  if (auth) {
    navigate("/");
  }

  const { country, sta } = data;

  const change = (e) => {
    setData({
      country: e.target.value,
      sta: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <center>
          <h1>Contact Us</h1>
          <h3>
            {" "}
            Please select location and provide your contact details, our
            marketing team will call you soon
          </h3>
          <br />
          <br />
          <select value={country} onChange={change}>
            <option value="0">Select</option>
            <option value="1">India</option>
            <option value="2">USA</option>
            <option value="3">Australia</option>
          </select>
          <br />
          <br />
          <select value={sta}>
            <option value="0">Select</option>
            <option value="1">Hyderabad</option>
            <option value="2">Texas</option>
            <option value="3">Sydney</option>
          </select>
          <br />
          <br />
          <textarea style={{ height: 200, width: 400 }}></textarea> <br />
          <button>Submit</button> <br />
          <br />
          <button onClick={() => setauth(true)}>Back</button>
        </center>
      </form>
    </div>
  );
}

export default Contact;
