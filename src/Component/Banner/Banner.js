import React from 'react';
import "./Banner.css"
import img from "./Banner.jpg"
const Banner = () => {
    return (
        <div>
        <div className="row">
            <div className="col-md-6">
               <div className=" mt-5 pt-5 text-center justify-content-center">
               <h1 className="fw-bold font ">Welcome <br/> To <span className="text">Watch Store</span></h1>
               <h2 className="fw-bold text-primary">Save Your Time</h2>
               <br />
               <button className="btn btn-outline-dark">Explore</button>
               </div>
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

export default Banner;