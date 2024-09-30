import React from "react";

const Det = props => {
  const { id, area, city, remove } = props;
  return (
    <div>
      <h5>
        {" "}
        {id}.House in {area} {city} - {Math.floor(Math.random() * 1000)} sqyards
        <button onClick={remove}>Delete</button>
      </h5>
    </div>
  );
};
export default Det;
