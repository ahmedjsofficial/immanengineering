import React from 'react';
import About from './Home/About.js';
import AdBanners1 from './Home/AdBanners1.js';
import Advertise from './Home/Advertise.js';
import Banner from './Home/Banner.js';
import Banner2 from './Home/Banner2.js';
import Brand from './Home/Brand.js';
import Energy from './Home/Energy.js';
import MobileApp from './Home/MobileApp.js';
import Portfolio from './Home/Portfolio.js';
import SolarWorks from './Home/SolarWorks.js';
import WhyPeople from './Home/WhyPeople.js';

const Home = () => {
    return (
        <>
            <Banner />
            <Brand />
            <About />
            <WhyPeople />
            <SolarWorks />
            <Advertise />
            <Energy />
            <AdBanners1 />
            <Portfolio />
            <Banner2 />
            <MobileApp />
        </>
    );
};

export default Home;
