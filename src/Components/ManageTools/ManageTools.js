import React from 'react';
import useTools from '../../hooks/useTools';

const ManageTools = () => {
    const [tools, setTools] = useTools();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                const remaining = tools.filter(tool => tool._id !== id);
                setTools(remaining)
            })
        }
    }
    return (
        <div>
            <h2>Manage Your Tools.</h2>
            {
                tools.map(tool => <div
                key={tool._id}
                ><h4 className='text-xl'>{tool.name} <button className='btn btn-accent' onClick={handleDelete}>Delete</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageTools;