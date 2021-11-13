import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="pt-5 footer">
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mt-5 text-light">
                                <h5>Privacy And Policy</h5>
                                 <h5>Terms And Condition</h5>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h1 className="text-primary">Useful Links</h1>
                                <Link className="link" to="/home"> <p>Home</p></Link>
                                <Link className="link" to="/services"><p>Services</p></Link>
                                <Link className="link" to="/about"><p>About Us</p></Link>
                                <Link className="link" to="/contact"><p>Contact Us</p></Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h1 className="text-primary">Contact Us</h1>
                                <small className="mt-5">Office:  Fake Street,Dhaka</small>
                                <br />
                                <small className="mt-3">Phone: (08) 8827 633354</small>
                                <br />
                                <small className="mt-3">Fax: 08) 08 4752 1499</small>
                                <br />
                                <small className="mt-3">Mail: support.mental-care.com</small>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="botton text-center">
                        <small>© 2021 All Rights Reserved By <span className="text-primary">Watch Store</span>.</small>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Footer;