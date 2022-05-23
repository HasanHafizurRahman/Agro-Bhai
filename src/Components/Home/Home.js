import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <br />
            <Review></Review>
        </div>
    );
};

export default Home;