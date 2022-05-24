import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tool')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            
            {
                tools.slice(0, 6).map(tool => <Tool
                key={tool._id}
                tool={tool}
                ></Tool>)
            }
        </div>
       
    );
};

export default Tools;