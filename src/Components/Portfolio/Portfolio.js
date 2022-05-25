import React from 'react';

const Portfolio = () => {
    return (
        <div className='grid grid-cols-1 justify-center px-60'>
            <img style={{ height: '200px', width: '200px'}} src="https://i.ibb.co/Wk4Qv0X/272811477-1325570237888493-696041810761609588-n.jpg" alt="" />
            <h2 className='text-3xl font-bold'>Name: Hasan Hafizur Rahman</h2>
            <h3 className='text-2xl text-primary font-bold'>Education: B.A.(Hons), 4th year - 2nd semister, Islamic Studies, Jagannath University, Dhaka</h3>
            <h3 className='text-2xl'><span className='text-secondary font-bold'>Email:</span> hasanshanto922@gmail.com</h3>
            <h3 className='text-2xl'><span className='text-neutral font-bold'>Technologies I know:</span> Html, Css, Javascript, Reactjs, Bootstrap , React-bootsrap, Tailwind, Daisy-Ui, Mongodb, Nodejs, ExpressJs, Firebase etc.</h3>
            <p className='text-primary font-bold'>Few of my live sites:
            
            https://sparkly-gecko-c2362b.netlify.app 
            
             </p>
        </div>
    );
};

export default Portfolio;