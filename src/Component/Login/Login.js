import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from "./login.jpg"
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {user} = useAuth();
    
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || "/home";


    const { handleGoogleLogin, isLoading, loginUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");


    // getting  email,password
    const handleEmail = (e) => {
        setEmail(e.target.value);

    };
    const handlePassword = (e) => {
        setPassword(e.target.value);

    };

    const handleLoginSubmit = e => {
        loginUser(email, password, location, history);

        e.preventDefault();

    }



    const handleGoogle = (e) => {
        handleGoogleLogin();
        e.preventDefault();
    }


    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleLoginSubmit} className="text-center">
                        <h1 className="p-5 fw-bolder text-primary">Log In your Account</h1>
                        <input className="m-3" type="email" name="email" onChange={handleEmail} placeholder="Type Your Email" /><br />
                        <input className=" mb-2" type="password" name="Password" onChange={handlePassword} placeholder="Password" /><br />
                        <button type="submit" className="btn btn-outline-info mb-4">Log in</button>
                        <p className="fw-bold text-primary">New User ? <Link to="/register"> <button className="btn btn-outline-info mt-1">Register</button> </Link> </p>
                        
                        <button type="submit" className="btn btn-outline-info mb-4" onClick={handleGoogle}>LoginWithGoogle</button>
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

export default Login;