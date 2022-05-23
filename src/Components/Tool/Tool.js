import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css'
const Tool = ({tool}) => {
    const {name, id, img, price, description, minOrder, available} = tool;
    const navigate = useNavigate()
    const navigateTool = id =>{
        navigate(`/tool/${id}`)
    }
    
    return (
        // <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
          <div className='p-3'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img style={{height: '200px', width: '200px'}} src={img} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p><small>{description}</small></p>
    <p>Price: {price}</p>
    <p>Minimum Order: {minOrder}</p>
    <p>Available Order: {available}</p>
    <div class="card-actions justify-end">
      <button onClick={() => navigateTool(id)} class="btn btn-primary text-white">Purchase {name}</button>
    </div>
  </div>
</div>
</div>
    
    );
};

export default Tool;