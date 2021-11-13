import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import img from "./register.jpg"

const Register = () => {
    const { registerUser } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };


    const handleLoginSubmit = e => {
        registerUser(email, password)
        e.preventDefault();

    }

    return (


        <div>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleLoginSubmit} className="text-center">
                        <h1 className="p-5 fw-bolder text-primary">Register your Account</h1>
                        <input className="m-3" type="email" name="email" onChange={handleEmail} placeholder="Type Your Email" /><br />
                        <input className=" mb-3" type="password" name="Password" onChange={handlePassword} placeholder="Password" /><br />
                        <button type="submit" className="btn btn-outline-info mb-4">Register</button>
                        <p className="fw-bold text-primary">AlReady Register? Please <Link to="/login"> <button className="btn btn-outline-info mt-1">Login</button> </Link> </p>
                    </form>
                </div>

                <div className="col-md-6">
                    <div className="img-logo">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;