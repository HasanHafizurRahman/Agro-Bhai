import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ToolDetail = () => {
    const {toolId} = useParams();
    return (
        <div>
            <h2 className='text-3xl font-bold'>Welcome to{toolId} </h2>
            <h5 className='text-2xl font-bold'><span className='text-primary'><Link to='/checkout'>Click here</Link></span> to process your purchasing.</h5>
        </div>
    );
};

export default ToolDetail;