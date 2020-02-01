import React from 'react';
import {Link} from 'gatsby';
import Header from '../Components/Header';

const Contact = () => {
    return (
        <div>
        <div style={{ color: "teal" }}>
        <Link to="/">Home</Link>
        <Header title="Contact" />
        <p>Send us a message!</p>
      </div>
        </div>
    );
};

export default Contact;