import React from 'react';
import '../Components/styles.css'

class Reals extends React.Component{

    state={...realssss}

    constructor(props){
        super(props)
    }
  
    render(){
        return(
            <div className='house-card'>
            
    <img src={this.props.pic}></img>

    <label>{this.props.price}</label>
    <label>{this.props.location}</label>

    { 
  


    }

    </div>
        
        )
    }

    
}

export default Reals
