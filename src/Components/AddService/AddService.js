import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='w-3/6 container mx-auto'>
        <h2>Please book your order</h2>
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      
    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      
    <textarea className='mb-2 bg-accent text-white' placeholder='Description' {...register("description")} />
      
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='Order Quantity' type="number" {...register("orderQuantity", { min: 120, max: 300 })} />
      

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input className='cursor-pointer btn btn-primary' type="submit" value="Book Order" />
    </form>
    </div>
  );
};

export default AddService;