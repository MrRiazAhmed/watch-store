import React, { useState } from 'react';
import "./makeadmin.css"

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [adminAdd, setAdminAdd] = useState(false);
    

    const handleEmail = e =>{
    setEmail(e.target.value);
    };

    const handleSubmit = e =>{ 
        const user = {email} ;      
        fetch('https://young-brook-97502.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)              
                         
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)
                setAdminAdd(true);
                setEmail("")
                }
        })

        e.preventDefault();
    };

    return (
        <div className="adminn">
            <h1 className=" text-primary text-center fw-bolder">Make An Admin Here</h1>
            <form onSubmit={handleSubmit} >
            <input className="m-1 mb-5  p-1 pe-5" onBlur={handleEmail} type="Email" placeholder="Email" /> 
          
            <input className="btn btn-outline-primary" type="submit" value="Submit" />
            </form>
           
            {
                adminAdd
                &&
                <div className="alert alert-success" role="alert">
                Admin Add Successfully
               </div>
            }
         
        </div>
    );
};

export default MakeAdmin;