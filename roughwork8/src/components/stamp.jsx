import React, { useState } from "react";

function Stamp() {
  const initial = [
    {
      projectid: "",
      day1: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
      day6: "",
      day7: "",
      day8: "",
      day9: "",
      day10: "",
      day11: "",
      day12: "",
      day13: "",
      day14: "",
      day15: "",
    },
  ];

  const [data, setdata] = useState(initial);

  const change = (e, index) => {
    const values = [...data];
    values[index][e.target.name] = e.target.value;
    setdata(values);
  };

  const addrows = () => {
    const x = [...data, ...initial];
    setdata(x);
  };

  const delrows = (index) => {
    const values = [...data];
    values.splice(index, 1);
    setdata(values);
  };

  const [total, setTotal] = useState();
  const save = () => {
    let res = 0;
    for (let i = 0; i < data.length; i++) {
      res =
        res +
        Number(data[i].day1) +
        Number(data[i].day2) +
        Number(data[i].day3) +
        Number(data[i].day4) +
        Number(data[i].day5) +
        Number(data[i].day6) +
        Number(data[i].day7) +
        Number(data[i].day8) +
        Number(data[i].day9) +
        Number(data[i].day10) +
        Number(data[i].day11) +
        Number(data[i].day12) +
        Number(data[i].day13) +
        Number(data[i].day14) +
        Number(data[i].day15);
    }
    setTotal(res);
  };

  return (
    <div>
      <h4>{total}</h4>
      {data.map((val, index) => (
        <div key={index}>
          <input
            style={{ width: 150 }}
            type="number"
            name="projectid"
            placeholder="project id"
            value={val.projectid}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day1"
            placeholder="Sun"
            value={val.day1}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day2"
            placeholder="Mon"
            value={val.day2}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day3"
            placeholder="Tue"
            value={val.day3}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day4"
            placeholder="Wed"
            value={val.day4}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day5"
            placeholder="Thu"
            value={val.day5}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day6"
            placeholder="Fri"
            value={val.day6}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day7"
            placeholder="Sat"
            value={val.day7}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day8"
            placeholder="Sun"
            value={val.day8}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day9"
            placeholder="Mon"
            value={val.day9}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day10"
            placeholder="Tue"
            value={val.day10}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day11"
            placeholder="Wed"
            value={val.day11}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day12"
            placeholder="Thu"
            value={val.day12}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day13"
            placeholder="Fri"
            value={val.day13}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day14"
            placeholder="Sat"
            value={val.day14}
            onChange={(e) => change(e, index)}
          />
          <input
            style={{ width: 60 }}
            type="number"
            name="day15"
            placeholder="Sun"
            value={val.day15}
            onChange={(e) => change(e, index)}
          />
          <button onClick={() => addrows()}>+</button>{" "}
          <button onClick={() => delrows()}>-</button>
        </div>
      ))}

      <button
        onClick={(e) => {
          e.preventDefault();
          save();
        }}
      >
        Save
      </button>
    </div>
  );
}
export default Stamp;
