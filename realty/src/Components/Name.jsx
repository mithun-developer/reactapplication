import React,{useState} from 'react'

const Name =() =>{

   
        const[data,setData]=useState({
            name:'mithun',
            age:'25'
        })

        const {name,age}=data;
    

    

        return(
            <div>
<h1>name: {name} {age}</h1>
            </div>
        )
    }


export default Name