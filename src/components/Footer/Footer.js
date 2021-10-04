import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFax } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    const element = <FontAwesomeIcon icon={faFax} />
    return (
        <div className="footer">
            <small>{element} TermsFeed © 2012-2021</small>
        </div>
    );
};

export default Footer;