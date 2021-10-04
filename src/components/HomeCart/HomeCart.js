import React from 'react';
import { Card } from 'react-bootstrap';
import "./HomeCart.css"
const HomeCart = (props) => {
    const { img, name, description, duration, tuitionFee, applyDate, startDate } = props.course
    return (
        <Card className="home-cart m-2 shadow-lg p-3 mb-5 bg-body rounded border border-2 rounded" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <hr />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <hr />
                    <p><span>Description:</span>{description}</p>
                    <p><span>Duration:</span> {duration}</p>
                    <p><span>Tuition Fee:</span> ${tuitionFee}</p>
                    <p><span>DeadLine:</span> {applyDate}</p>
                    <p><span>Class Start:</span> {startDate}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default HomeCart;