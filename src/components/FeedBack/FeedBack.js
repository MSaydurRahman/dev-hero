import React from 'react';
import "./FeedBack.css"
const Feedback = (props) => {
    const { email, body } = props.feedback
    return (
        <div className="review">
            <br />
            <hr className="m-4" />
            <h5><span className="text-bold">Email:</span> {email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Feedback;