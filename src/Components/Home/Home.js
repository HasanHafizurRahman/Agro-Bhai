import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Summery from '../Summery/Summery';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <br />
            <Review></Review>
            <br />
            <Summery></Summery>
            
        </div>
    );
};

export default Home;