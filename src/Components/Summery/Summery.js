import React from 'react';
import { FaSalesforce } from 'react-icons/fa';
import { FcRating, FcCustomerSupport } from 'react-icons/fc';
import './summery.css'
const Summery = () => {
    return (
        <div>
        <h2 className='text-5xl font-bold text-center text-primary'>Our Business Summery!</h2>
        <br />
        <div className='grid grid-cols-1 lg:grid-cols-3 px-2 gap-2'>
            <div className='flex bg-accent text-white p-3'>
                <div class="avatar">
                    <div class="w-16 rounded">
                    <FaSalesforce className='text-5xl mt-3' />
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl'>100M Annual sale!</h3>
                    <p>We earned more than 100M revenue.</p>
                </div>
            </div>
            <div className='flex bg-primary text-white p-3'>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <FcRating className='text-5xl mt-3' />
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl'>30k+ Review!</h3>
                    <p>We served more than 10k customer all around the globe.</p>
                </div>
            </div>
            <div className='flex bg-secondary text-white p-3'>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <FcCustomerSupport className='text-5xl mt-3' />
                    </div>
                </div>
                <div>
                <h3 className='text-3xl'>10k+ customer</h3>
                    <p>We served more than 10k customer all around the globe.</p>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Summery;