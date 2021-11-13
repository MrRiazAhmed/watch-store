import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import "./MyOrders.css"

const MyOrders = () => {
    const { user } = useAuth();
    const email = user.email;
    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch(`https://young-brook-97502.herokuapp.com/myorders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])


    const handleDelete = id => {

        const confirmation = window.confirm('Are you sure,want to delete?');
        if (confirmation) {
            console.log(id);
            fetch(`https://young-brook-97502.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Order Deleted")
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }

    }

    return (
        <div className="odr">
            <div>
                <h1 className="text-primary">My orders</h1>
                <hr />
                <div>
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
                                orders?.map(order => (
                                    <tr key={order?._id}>
                                        <th scope="row">#</th>
                                        <td><h3>{order?.name}</h3></td>
                                        <td>{order?.price}</td>
                                        <td><button className="btn btn-danger" onClick={() => handleDelete(order?._id)}>Delete</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;