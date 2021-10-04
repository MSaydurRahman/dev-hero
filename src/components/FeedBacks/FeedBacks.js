import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeedBack from '../FeedBack/FeedBack';

const FeedBacks = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch('./comments.JSON')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <div>
            <div>
                {
                    feedbacks.map(feedback => <FeedBack
                        feedback={feedback}
                    >

                    </FeedBack>)
                }
            </div>
        </div>
    );
};

export default FeedBacks;