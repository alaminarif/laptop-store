import React from 'react';
import './MainContent.css';
import img from './laptop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';


const MainContent = () => {
    const [reviews, setReviews] = useReviews(3);
    return (
        <div>
            <section className='main-content'>
            <div className='main-cont-text'>
                <h1><span className='color-text'>La</span>ptop <span className='color-text'>S</span>tore</h1>
                <articl className='article'>Choosing A Laptop Computer That's Right For You 
                    Shouldn't Be Difficult. <br /> Whether You're A Gamer, A Designer, A Student, Or 
                    Simply Need A Laptop <br />For Everyday Tasks And Browsing, TechLand BD Makes It 
                    Easy To Search <br />And Compare Between Traditional Laptops And Convertible 2 In
                    1s,</articl>
            </div>
            <div className='main-cont-img'>
                <img src={img} alt="" />
            </div>
            </section>

            {/* customar reviews */}

            <section className='reviews'>
                <h1 className='reviews-text'>Customar Reviews <FontAwesomeIcon icon={faStreetView}></FontAwesomeIcon> ({reviews.length})</h1>
                <div className='review-container'>
                    {
                    reviews.map(review => <Review
                        key={review._id}
                        review = {review}
                    ></Review>)
                    }
                </div>
                <div className='link-see-all'>
                <Link to='/reviews'>See All Reviews<FontAwesomeIcon icon={faStreetView}></FontAwesomeIcon></Link>
                </div>
            </section>
        </div>
    );
};

export default MainContent;