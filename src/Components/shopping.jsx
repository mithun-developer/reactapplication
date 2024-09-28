import React, { useState } from "react";
import Data from "../Components/items";

function Shopping() {
  const [data, setdata] = useState("");

  const change = (e) => {
    setdata(e.target.value);
  };

  return (
    <div>
      <center>
        <h1 style={{ fontFamily: "fantasy" }}>Shopping Cart</h1>
        <input type="text" value={data} onChange={change} />

        {Data.cardData
          .filter((items) => items.name.toLowerCase().includes(data))
          .map((items) => {
            return (
              <div>
                {items.name}
                <img src={items.img}></img>
              </div>
            );
          })}
      </center>
    </div>
  );
}

export default Shopping;
