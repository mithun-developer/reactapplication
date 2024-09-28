import React from 'react'
import '../Components/styles.css'

function Real(props){
    return(
        <div className='house-card'>
            
    <img src={props.pic}></img>

    <label>{props.price}</label>
    <label>{props.location}</label>

    </div>
    )
}

export default Real
   