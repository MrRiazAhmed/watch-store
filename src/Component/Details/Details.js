import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import useAuth from '../../hooks/useAuth';
import './Details.css'

const Details = () => {
    const { id } = useParams();
    const { user } = useAuth()

    const [allProducts, setAllProducts] = useState([]);
    const [singleProduct , setSingleProduct] = useState({})


    useEffect(() => {
        fetch('https://young-brook-97502.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))

    }, []);

    useEffect(()=>{
        const matchedOne = allProducts.find(product=>product._id===id)
        setSingleProduct(matchedOne)
        
    },[allProducts])
    

    const handleAddToCart = () => {
        console.log(user.email);
        const data = singleProduct;
        data.email = user.email;


        fetch('https://young-brook-97502.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })

    };


    return (
        <div>
        <div className="place-order">
        <div className="container">
             <img className="w-25" src={singleProduct?.img} />
         </div>
         <div className="text-center mt-5 ">
             <h1 className="text-primary">Name: {singleProduct?.name}</h1>
             <hr />
             <hr />
             
            <div > 
                <h4 className="text-center mt-5"> {singleProduct?.des}</h4>
            </div>
             {/* <Link to ='/myOrders'>  */}
             <button  onClick={handleAddToCart} className="mt-5 btn btn-outline-success">Add To Cart</button>
              {/* </Link> */}
         </div>
     </div>
 </div>
    );
};

export default Details;