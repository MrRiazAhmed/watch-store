import React from 'react';
import { useForm } from "react-hook-form";



const AddProduct = () => {
    const { register, handleSubmit } = useForm();
      const onSubmit = data => {
          
          fetch('https://young-brook-97502.herokuapp.com/products',{
              method:'POST',
              headers:{
                  'content-type': 'application/json'
              },
              body: JSON.stringify(data)              
                           
          })
         
         
        }
    return (
        <div >
            <h1 className="text-primary">Add A New Product Here</h1>            
            <br /><hr className="text-white" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                <input className="m-2" {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <br />
                <input className="m-2" {...register("des")} placeholder="Description"/>
                <br />
                <input className="m-2" {...register("img")} placeholder="Image link" />
                <br />
                <input className="m-2" type="number" {...register("price")} placeholder="Price"/>
                <br />
                </div>
                <input className="btn btn-outline-primary m-1 ps-5 pe-5" type="submit" />
                </form> 
            </div>
         </div>
        
    );
};

export default AddProduct;