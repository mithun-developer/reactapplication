import React from "react";
import './style.css' 

function Movies(props){
    return(
<div className="movie-card">

    <img src={props.banner}></img>
   <div>
   {props.likes} {props.name}
   </div>
    
</div>


    )
}

export default Movies
