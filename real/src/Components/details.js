import React from "react";

const Details = props => {
  return (
    <div onClick={props.clicked}>
      <h4>
        House in {props.area} {props.city} {Math.floor(Math.random() * 1000)}{" "}
        sqyards
        <button onClick={props.deleted}>Delete</button>
      </h4>
    </div>
  );
};
export default Details;
