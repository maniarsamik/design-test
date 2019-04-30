import React, { Component } from 'react';
import './homeslider.css';
import Slider from "react-slick";
import banner2 from '../images/main-slider/bg-images/about_bg-3.png';
import banner3 from '../images/main-slider/bg-images/slider_3_1.png';
import banner4 from '../images/main-slider/bg-images/banner-illustration-3.png';
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
                    <div className="container">
                        <div className="slider-inner">
                            <div className="row">
                                <div className="col-xl-6 banner-text">
                                    <div className="">
                                        <h4>what is</h4>
                                        <h2>We provide <br /> multiple services</h2>
                                        <p>With the combination of responsive design and parallax animations, this theme will provide an optimal viewing experience and will make your website look great on across wide range of devices and screen sizes.</p>
                                        <button type="submit" className="btn-one">Learn More</button>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <img src={banner3} alt="" className="up_animat" />
                                </div>
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
                                <button type="submit" className="btn-one">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-slider-3">
                    <div className="container">
                        <div className="slider-inner">
                            <div className="row">
                                <div className="col-xl-6 banner-text">
                                    <div className="">
                                        <h4>what is</h4>
                                        <h2>We provide <br /> multiple services</h2>
                                        <p>With the combination of responsive design and parallax animations, this theme will provide an optimal viewing experience and will make your website look great on across wide range of devices and screen sizes.</p>
                                        <button type="submit" className="btn-one">Learn More</button>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <img src={banner2} alt="" className="up_animat" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-slider-4">
                    <div className="container">
                        <div className="slider-inner">
                            <div className="row">
                                <div className="col-xl-6 banner-text">
                                    <div className="">
                                        <h4>what is</h4>
                                        <h2>We provide <br /> multiple services</h2>
                                        <p>With the combination of responsive design and parallax animations, this theme will provide an optimal viewing experience and will make your website look great on across wide range of devices and screen sizes.</p>
                                        <button type="submit" className="btn-one">Learn More</button>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <img src={banner4} alt="" className="up_animat" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}

export default HomeSlider