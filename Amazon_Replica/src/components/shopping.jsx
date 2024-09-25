import React, { useState } from "react";

import Data from "../components/items";

function Shopping() {
  const [data, setdata] = useState("");

  return (
    <div>
      <center>
        <h1>Shopping</h1>
        <input
          type="text"
          value={data}
          onChange={(e) => setdata(e.target.value)}
        />

        {Data.cardData
          .filter((items) => items.name.toLowerCase().includes(data))
          .map((items) => {
            return (
              <div>
                <img src={items.img}></img>
                {items.name}
              </div>
            );
          })}
      </center>
    </div>
  );
}

export default Shopping;
