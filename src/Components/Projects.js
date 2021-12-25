import React from 'react';
import MobileApp from './Home/MobileApp.js';
import PBanner from './Projects/PBanner.js';
import ProjectPoto from './Projects/ProjectPoto.js';

const Projects = () => {
    return (
        <>
            <PBanner />
            <ProjectPoto />
            <MobileApp />
        </>
    );
};

export default Projects;
