import React from 'react';
import { useState, useEffect } from 'react'
import HomeCart from '../HomeCart/HomeCart';
import "./Home.css"
const Home = () => {
    const [courses, setCourses] = useState([])
    const cartSlice = courses.slice(-4)
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="">
            <div className="nav-text p-4">
                <div className="container">
                    <h1 className="text-white">LEARN FROM THE BEST</h1>
                    <h3 className="text-white bg-dark p-4 m-4">Get Ahead, Improve Your Skill with DevHero Training Academy</h3>
                    <h5 className="text-white ">
                        Get Hands On Experience in Real World Software Development from Industry Experts Through Practical and Real World Courses.
                    </h5>
                </div>
            </div>
            <hr className="container mt-4" />
            <h2 className="mt-4 mb-4">Choose Your Course</h2>
            <div className=" d-flex justify-content-around container">
                {
                    cartSlice.map(course => <HomeCart
                        key={course.name}
                        course={course}
                    ></HomeCart>)
                }
            </div>
        </div>
    );
};

export default Home;