import React from 'react';
import './Review.css'


const Review = (props) => {
    const { name, picture, desc, ratting } = props.review;
    return (
        <div className='review-detl'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h5>{desc}</h5>
            <h4>Ratting: {ratting} </h4>
        </div>
    );
};

export default Review;