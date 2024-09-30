import React from "react";

const Det = props => {
  return (
    <div onChange={props.changed}>
      <h4>
        House in {props.area} {props.city} {Math.floor(Math.random() * 1000)}{" "}
        sqyards
        <input onChange={props.changed} type="text" />
        
      </h4>
    </div>
  );
};
export default Det;
