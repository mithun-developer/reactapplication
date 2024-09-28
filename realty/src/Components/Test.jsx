import React from 'react'

class Test extends React.Component{

    state = {
        a:10,
        b:5
       };
  //First Method
    setA =(e)=>{
          this.setState({
        a:parseInt(e.target.value)
    })
}
//Second Method
setB = (e)=>{
    this.setState({
        b:parseInt(e.target.value)
    })
    }
 render(){
return(
    <div>

{this.state.a + ',' + this.state.b}
<br/>

{'Add:' + (this.state.a +  this.state.b)}
<br/>

<br/>
        <input className='inputA' onChange={this.setA}></input> 
        <br/>
        <input className='inputB' onChange={this.setB}></input> <br/>
        <input value={this.state.a + this.state.b}></input>

        
        
       </div>
)
    }
}

export default Test


