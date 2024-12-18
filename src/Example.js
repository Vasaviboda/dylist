import React, { useState } from 'react'
import   './Car.css'
function State() {
  
    const[bike, setbike] = useState(["Royal Enfield"])
    function Addbike(){
        let c1 = document.getElementById('inp').value
        if(c1!==''){
            setbike([...bike,c1])
            document.getElementById('inp').value=''
        }
        else{
            alert('please enter bike name')
        }  
    }
    function DeleteItem(){
        setbike(bike.slice(0,-1))
    }

  return (
    <div>
      <div className="component">
        <center>
        <input type='text' id='inp' placeholder='Enter Your Fav Bike'></input>
        <br />
        <br />
        <button onClick={Addbike}>Add Bike</button>
        <br />
   
        {bike.map((x,index)=> <li key={index}>{x}</li>)}
        <button onClick={DeleteItem} id="del">Delete</button>
        </center>
        </div>
         </div>

  )
}
export default State;