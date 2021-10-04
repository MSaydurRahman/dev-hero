import React from 'react';
import { Link } from 'react-router-dom';
import "./Course.css"
const Course = (props) => {
    const { img, name, description, duration, tuitionFee, applyDate, startDate } = props.alCourse
    const url = `/feedback`
    return (

        <div className="course-item shadow-lg">
            <div className="course-item-img">
                <img src={img} alt='' />
            </div>
            <hr />
            <h5>{name}</h5>
            <hr />
            <p><span>Description:</span>{description}</p>
            <p><span>Duration:</span> {duration}</p>
            <p><span>Tuition Fee:</span> ${tuitionFee}</p>
            <p><span>DeadLine:</span> {applyDate}</p>
            <p><span>Class Start:</span> {startDate}</p>
            <Link to={url}>Feedback</Link>
            <Link to="#">Enroll</Link>
        </div>

    );
};

export default Course;