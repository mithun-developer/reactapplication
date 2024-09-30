import React from "react";

const Info = props => {
  return (
    <div>
      <h4>
        Villa in {props.area} {props.city} {Math.floor(Math.random() * 1000)}{" "}
        sqyards <button onClick={props.rem}>Delete</button>
      </h4>
    </div>
  );
};
export default Info;
