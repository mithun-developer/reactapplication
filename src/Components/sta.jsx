import { style } from "@mui/system";
import react, { useState } from "react";

function Sta() {
  const initial = [
    {
      project: "",
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
      day5: "",
    },
  ];

  const [data, setData] = useState(initial);

  const change = (index, e) => {
    const values = [...data];
    values[index][e.target.name] = e.target.value;
    setData(values);
  };

  //   const addrows = () => {
  //     [...data], [...initial];
  //   };

  const addRows = () => {
    const x = [...data, initial];
    setData(x);
  };

  const delrows = (index) => {
    const values = [...data];
    values.splice(index, 1);

    setData(values);
  };

  return (
    <div>
      {data.map((index, val) => (
        <div>
          <input
            style={{ width: 150 }}
            type="number"
            name="project"
            placeholder="Project ID"
            value={val.project}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day1"
            placeholder="Sun"
            value={val.day1}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day2"
            placeholder="Mon"
            value={val.day2}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day3"
            placeholder="Tue"
            value={val.day3}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day4"
            placeholder="Wed"
            value={val.day4}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day5"
            placeholder="Thu"
            value={val.day5}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day6"
            placeholder="Fri"
            value={val.day6}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day7"
            placeholder="Sat"
            value={val.day7}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day8"
            placeholder="Sun"
            value={val.day8}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day9"
            placeholder="Mon"
            value={val.day9}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day10"
            placeholder="Tue"
            value={val.day10}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day11"
            placeholder="Wed"
            value={val.day11}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day12"
            placeholder="Thu"
            value={val.day12}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day13"
            placeholder="Fri"
            value={val.day13}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day14"
            placeholder="Sat"
            value={val.day14}
            onChange={(eve) => change(index, eve)}
          />
          <input
            style={{ width: 50 }}
            type="number"
            name="day15"
            placeholder="Sat"
            value={val.day15}
            onChange={(eve) => change(index, eve)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addRows();
            }}
          >
            +
          </button>{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              delrows();
            }}
          >
            -
          </button>{" "}
          <br />
        </div>
      ))}
    </div>
  );
}

export default Sta;
