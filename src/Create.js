import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Create(){
        const [name, setName] = useState();
        const [age, setAge] = useState();
        const store = (e) =>{
            e.preventDefault();
            let Array1= JSON.parse(localStorage.getItem('x')) || [];
            let Array2 = {name:name,age:age};
            Array1.push(Array2);

            localStorage.setItem("x",JSON.stringify(Array1))

        }

        const move = () =>
        {
            window.location.href ='/';
        }

        
    return(
        <div className='bg-primary'>
            <h1 className='d-flex align-items-center justify-content-center text-white' >Create Your Details</h1>
            <form className='d-flex vh-100 align-items-center justify-content-center ' onSubmit={store}>
                <input type='text' placeholder='Enter Your Name' className='me-5 border-dark p-3' onInput={(e) =>setName(e.target.value)} value={name}></input>
                <input type='text' className='me-5 border-dark p-3' placeholder='Enter Your Age' onInput={(e) =>setAge(e.target.value)} value={age}></input>
                <button type='submit' className='btn btn-success p-3' onClick={move}>Submit</button>      
            </form>
        </div>
    )
}

export default Create;