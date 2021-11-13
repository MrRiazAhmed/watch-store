
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Menubar.css";

const Navbar = () => {
    const { user, logout } = useAuth()

    return (
        <div>
            <div className="navbar-container">
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="ms-3">
                                <h2 className="m-2 ms- fw-bold">Watch Store</h2>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="nav-items">
                                <div className="d-flex m-2 text-align-center justify-content-center">
                                    <p><Link className="items" to="/home">Home</Link> </p>
                                    <p><Link className="items" to="/products">Explore</Link> </p>
                                    <p><Link className="items" to="/dashboard">DashBoard</Link> </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className=" text-end m-3 me-5">

                                { 
                                    user?.email ?
                                    <span>
                                        <button onClick={logout} className="btn btn-outline-danger">
                                            LogOut
                                        </button>
                                        <p className="text-dark"> <span className="fw-bold text-primary"> WelCome: </span>  {user.email}</p></span>
                                        :
                                        <Link to="/login">
                                            <button className="btn btn-outline-dark">Log in</button>
                                        </Link>

                                }

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;