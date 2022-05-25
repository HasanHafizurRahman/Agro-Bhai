import React from 'react';
import Banner from '../Banner/Banner';
import GoogleMap from '../GoogleMap/GoogleMap';
import Review from '../Review/Review';
import Summery from '../Summery/Summery';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl text-primary font-bold text-center"> Explore Our Agro Tools!</h2>
            <Tools></Tools>
            <br />
            <Review></Review>
            <br />
            <Summery></Summery>
            <br />
            <h2 className="text-5xl text-secondary font-bold text-center"> Our Location!</h2>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Home;