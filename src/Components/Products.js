import React from 'react';
import MobileApp from './Home/MobileApp';
import SolarWorks from './Home/SolarWorks.js';
import Detail from './Products/Detail.js';
import ProductBanner from './Products/ProductBanner.js';

const Products = () => {
    return (
        <>
            <ProductBanner />
            <Detail />
            <SolarWorks />
            <MobileApp />
        </>
    );
};

export default Products;
