import React, { Component } from 'react';
import './homeslider.css';
import Slider from "react-slick";

class HomeSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false            
        };
        return (
            <Slider {...settings}>
                <div className="main-slider-1">
                    <div className="container-fluid">
                        <div className="slider-inner">
                            <div className="slide-content">
                                <h4>what is</h4>
                                <h2>Your Story</h2>
                                <p>With the combination of responsive design and parallax animations, this theme will provide an optimal viewing experience and will make your website look great on across wide range of devices and screen sizes.</p>
                                <button type="submit" className="btn-one style-one radi">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-slider-2">
                <div className="container-fluid">
                    <div className="slider-inner">
                        <div className="slide-content">
                            <h4>what is</h4>
                            <h2>Your Story</h2>
                            <p>With the combination of responsive design and parallax animations, this theme will provide an optimal viewing experience and will make your website look great on across wide range of devices and screen sizes.</p>
                            <button type="submit" className="btn-one style-one radi">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-slider-3">
                    <div className="container-fluid">
                        <div className="slider-inner">
                            <div className="slide-content">
                                <h4>what is</h4>
                                <h2>Your Story</h2>
                                <p>With the combination of responsive design and parallax animations, this theme will provide an optimal viewing experience and will make your website look great on across wide range of devices and screen sizes.</p>
                                <button type="submit" className="btn-one style-one radi">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-slider-4">
                    <div className="container-fluid">
                        <div className="slider-inner">
                            <div className="slide-content">
                                <h4>what is</h4>
                                <h2>Your Story</h2>
                                <p>With the combination of responsive design and parallax animations, this theme will provide an optimal viewing experience and will make your website look great on across wide range of devices and screen sizes.</p>
                                <button type="submit" className="btn-one style-one radi">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}

export default HomeSlider