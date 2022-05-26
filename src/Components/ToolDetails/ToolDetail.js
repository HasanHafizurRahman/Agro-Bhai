import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ToolDetail = () => {
    const {toolId} = useParams();
    const [tool, setTool] = useState({});

    useEffect(() =>{
        const url = `http://localhost:5000/tool/${toolId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTool(data))
    },[])
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Your tool: {tool.name}, is ready!</h2>
            <h5 className='text-2xl text-center font-bold'><span className='text-primary underline text-4xl'><Link to='/addtool'>Click here</Link></span> to process your purchasing.</h5>
        </div>
    );
};

export default ToolDetail;