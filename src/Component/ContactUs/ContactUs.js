import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div>
        <div className="contact-container ">
            <h3 className='text-center pt-3 pb-5 fw-bold text-dark'><u>Contact With Us</u></h3>
            <div className='text-center'>
                <input className='m-1' type="Name" placeholder='Name' />
                <input className='m-1' type="text" placeholder='Email' />
                <input className='m-1' type="password" placeholder='Password' /><br />
                <textarea className='m-1 w-75 ' placeholder='Text' name="" id="" cols="30" rows="10"></textarea>
                <button className='btn btn-primary'>Submit</button>
                <h4 className='text-primary'>Phone</h4>
                <p>(88+) 8827 633354</p>
                <br />
                <h4 className='text-primary'>Email</h4>
                <p>support.mental-care.com</p>


            </div>
        </div>
    </div>
    );
};

export default ContactUs;