import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import './ManageOrders.css'
const ManageOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState();



    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {

        const confirmation = window.confirm('Are you sure,want to delete?');
        if (confirmation) {
            console.log(id);
            fetch(`http://localhost:5000/orders/${id}`, {
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
        <div className="orders-tb text-primary">
            <h1>My All orders</h1>
            <hr />

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr className="text-dark">
                            <th scope="col"># User Email</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders?.map(order => (
                                <tr key={order?._id}>
                                    <th className="text-dark" scope="row"><p>{user.email}</p></th>
                                    <td><h3 className="text-dark">{order?.name}</h3></td>
                                    <td className="text-dark">{order?.price}</td>
                                    <td><button className="btn btn-danger" onClick={() => handleDelete(order?._id)}>Delete</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>



            </div>




        </div>

    );
};

export default ManageOrders;