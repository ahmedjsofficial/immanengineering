import React from 'react';
import ABBanner from './About/ABBanner.js';
import Mission from './About/Mission.js';
import Owner1 from './About/Owner1.js';
import Owner2 from './About/Owner2.js';
import Energy from './Home/Energy.js';
import MobileApp from './Home/MobileApp.js';

const About = () => {
    return (
        <>
            <ABBanner />
            <Energy />
            <Mission />
            <Owner1 />
            <Owner2 />
            <MobileApp />
        </>
    );
};

export default About;
