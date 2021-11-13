import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetch('https://young-brook-97502.herokuapp.com/allproducts')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[product.length])

    // Delete Service 
    const handleDelete = id => {

        const confirmation = window.confirm('Are you sure,want to delete?');
        if (confirmation) {
            console.log(id);
            fetch(`https://young-brook-97502.herokuapp.com/allproducts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Products Deleted")
                        const remaining = product.filter(pd => pd._id !== id)
                        setProduct(remaining)
                    }
                })
        }

    }


    return (
        <div>
        <h1 className="text-primary">All Services</h1>

    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Service Name</th>
                <th scope="col">Price</th> 
                <th scope="col">Action</th>                    
            </tr>
        </thead>
    <tbody>
        {
        product.map(pd => (
                <tr key={pd._id}>
                    <th scope="row">#</th>
                        <td><h3>{pd.name}</h3></td>
                        <td>{pd.price}</td>
                        <td><button className="btn btn-danger" onClick={()=>handleDelete(pd._id)}>Delete</button></td>
                </tr>
        ))
        }
    </tbody>
    </table>

</div>

    );
};

export default ManageProducts;