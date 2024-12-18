import React, { useState } from 'react'
import   './Car.css'
function List() {
  
    const[car, setCar] = useState(["Virat"])
    function AddCar(){
        let c = document.getElementById('inp2').value
        if(c!==''){
            setCar([...car,c])
            document.getElementById('inp2').value=''
        }
        else{
            alert('please enter Player name')
        }  
    }
    function DeleteItem(){
        setCar(car.slice(0,-1))
    }

  return (
    <div>
        <div className="component">
        <center>
        <input type='text' id='inp2' placeholder='Enter  Your Fav Player'></input>
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
  

export default List;