import React, { useState } from 'react'
import   './Car.css'
function StateList() {
  
    const[car, setCar] = useState(["Ferrari"])
    function AddCar(){
        let c = document.getElementById('inp1').value
        if(c!==''){
            setCar([...car,c])
            document.getElementById('inp1').value=''
        }
        else{
            alert('please enter car name')
        }  
    }
    function DeleteItem(){
        setCar(car.slice(0,-1))
    }

  return (
    <div>
        <div className="component">
        <center>
        <input type='text' id='inp1' placeholder='Enter Your Fav Car'></input>
        <br />
        <br />
        <button onClick={AddCar}>Add Car</button>
        <br />

        {car.map((x,index)=> <li key={index}>{x}</li>)}
        <button onClick={DeleteItem} id="del">Delete</button>
        </center>
        </div>
         </div>

  )
}
  

export default StateList;