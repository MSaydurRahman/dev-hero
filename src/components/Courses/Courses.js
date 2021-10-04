import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import "./Courses.css"
const Courses = () => {
    const [alCourses, setAllcourses] = useState([])
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setAllcourses(data))
    }, [])
    return (
        <div>
            <h1 className="text-danger mt-4">Courses</h1>
            <hr className="m-4" />
            <div className="alCourse-cart">
                {
                    alCourses.map(alCourse => <Course
                        alCourse={alCourse}
                    ></Course>)
                }
            </div>

        </div>
    );
};

export default Courses;