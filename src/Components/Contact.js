import React from 'react';
import ContactBanner from './Contact/ContactBanner.js';
import Form from './Contact/Form.js';
import MobileApp from './Home/MobileApp';

const Contact = () => {
    return (
        <>
            <ContactBanner />
            <Form />
            <MobileApp />
        </>
    );
};

export default Contact;
