import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div className="Navbar">
            <div className="title">
                <h1>DevHero</h1>
            </div>
            <div>
                <Link to="./home">Home</Link>
                <Link to="./courses">Courses</Link>
                <Link to="./feedback">Student's Feedback</Link>
                <Link to="./about">About Us</Link>
            </div>
        </div>
    );
};

export default Header;