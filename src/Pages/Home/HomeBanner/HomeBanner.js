import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../Images/Home-Banner.png';
import './HomeBanner.css';
const HomeBanner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 carosol-img"
                    src="https://al-health-care.web.app/static/media/slider-3.98b11c37.jpg"
                    alt="First slide"
                />
                <div className='carosol-poster'></div>
                <Carousel.Caption>
                    <h5 className='text-white'>Health Is Wealth</h5>
                    <p className='text-info'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carosol-img"
                    src="https://al-health-care.web.app/static/media/slider-2.ce7c4b6b.jpg"
                    alt="Second slide"
                />
                <div className='carosol-poster'></div>
                <Carousel.Caption>
                    <h5 className='text-white'>Everyday Is Life</h5>
                    <p className='text-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carosol-img"
                    src="https://al-health-care.web.app/static/media/slider-1.120eb73a.jpg"
                    alt="Third slide"
                />
                <div className='carosol-poster'></div>
                <Carousel.Caption>
                    <h5 className='text-white'>At this moment</h5>
                    <p className='text-info'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeBanner;