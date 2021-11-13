import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './product.css'
const Products = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const newProducts = products.slice(0, 6);

    return (
        <div className="body">
        <div className="">
            <h1 className="text-center text-primary fw-bold"> Our Products</h1>
            <hr />
        </div>


        <div className="container ">
            <div className="row">
                {
                    newProducts.map(product => (

                        <div className="col-lg-4">
                            <div className="card m-3 pt-3 ">
                                <div className="  ms-3 ">
                                    <img className="h-75 w-75" src={product.img} alt="" />
                                </div>
                                <div className="text-center">
                                    <h1 className="text-primary">{product.name}</h1>
                                    <h4>Cost: $ {product.price}</h4>
                                    <Link to={`/details/${product._id}`}>
                                        <button className="btn btn-outline-dark mb-3"  >Purchse</button>
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

export default Products;