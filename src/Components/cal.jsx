import React, { useState } from "react";

function Cal() {
  const [data, setData] = useState();
  const [val, setVal] = useState();

  const change = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <center>
        <h3>Calulator</h3>
        <input type="text" value={data} name="input1" onChange={change} />{" "}
        <br />
        <br />
        {}
        <button onClick={() => setVal(eval(data))}>Result</button>
        <h5>Result is: {val}</h5>
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "1")}
        >
          1
        </button>
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "2")}
        >
          2
        </button>
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "3")}
        >
          3
        </button>
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "+")}
        >
          +
        </button>{" "}
        <br />
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "4")}
        >
          4
        </button>
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "5")}
        >
          5
        </button>
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "6")}
        >
          6
        </button>
        <button
          style={{ padding: 11, borderradius: 5 }}
          onClick={() => setData(data + "-")}
        >
          -
        </button>{" "}
        <br />
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "7")}
        >
          7
        </button>
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "8")}
        >
          8
        </button>
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "9")}
        >
          9
        </button>
        <button
          style={{ padding: 10, borderradius: 5 }}
          onClick={() => setData(data + "*")}
        >
          x
        </button>{" "}
        <br />
        <button
          style={{ padding: 9, borderradius: 5 }}
          onClick={() => setData(data + "%")}
        >
          %
        </button>
        <button
          style={{ padding: 9, borderradius: 5 }}
          onClick={() => setData(data + ".")}
        >
          .
        </button>
        <button
          style={{ padding: 9, borderradius: 5 }}
          onClick={() => setData(data + "0")}
        >
          0
        </button>
        <button
          style={{ padding: 9, borderradius: 5 }}
          onClick={() => setData("")}
        >
          clr
        </button>
      </center>
    </div>
  );
}

export default Cal;
