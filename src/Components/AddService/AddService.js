import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `http://localhost:5000/tool`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      console.log(result);
    })
  };
  return (
    <div className="login-container">
        <h2 className='text-2xl text-center font-bold text-neutral'>Please book your order!</h2>
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      
    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
    <br />
      
    <textarea className='mb-2 pl-px' placeholder='Description' {...register("description")} />
      
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='Order Quantity' type="number" {...register("orderQuantity", { min: 120, max: 300 })} />
      

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input style={{ color: 'white', background: '#f6d860', height: '40px', borderRadius: '20px', cursor: 'pointer', fontWeight: '900', boxShadow: '3px 3px 3px #cbced1, -3px -3px 3px #beaef4', transition: '0.5s', marginTop: '19px' }} type="submit" value="Book Order" />
    </form>
    </div>
  );
};

export default AddService;