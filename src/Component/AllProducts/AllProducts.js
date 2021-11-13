import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './products.css'

const AllProducts = () => {

    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="body">
        <div className="">
            <h1 className="text-center text-primary fw-bold"> Our Products</h1>
            <hr />
        </div>


        <div className="container ">
            <div className="row">
                {
                    products.map(product => (

                        <div className="col-lg-4">
                            <div className="card m-3 pt-3 ">
                                <div className="  ms-3 ">
                                    <img className="h-75 w-75" src={product.img} alt="" />
                                </div>
                                <div className="text-center">
                                    <h1 className="text-primary">{product.name}</h1>
                                    <h4>Cost: $ {product.price}</h4>
                                    <Link to={`/details/${product._id}`}>
                                        <button className="btn btn-outline-success mb-3">Purchase</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>

    </div>
);
};



export default AllProducts;