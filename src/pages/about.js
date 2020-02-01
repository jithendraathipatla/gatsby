import React from 'react';
import {Link} from 'gatsby';
import Header from '../Components/Header';

const about = () => {
    return (
        <div style={{ color: `teal` }}>
        <Link to="/Contact">Contact</Link>
    <Header title="This is from the Header"/>
    <Header title="This is Pretty cool"/>
    <p>Such wow. Very React.</p>
  </div>
    );
};

export default about;