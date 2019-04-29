import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import HomeSlider from '../components/homeslider.jsx';
import bgimg1 from '../images/main-slider/bg-images/download.png';
import bgimg2 from '../images/main-slider/bg-images/cross.svg';
import bgimg3 from '../images/main-slider/bg-images/circle.svg';
import bgimg4 from '../images/main-slider/bg-images/half-square.svg';
import bgimg5 from '../images/main-slider/bg-images/design.png';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="main-container">
                <Navbar />
                <HomeSlider />
                <div className="shape1"><img src={bgimg1} alt="shape"/></div>
                <div className="shape2 rotateme"><img src={bgimg2} alt="shape"/></div>
                <div className="shape3"><img src={bgimg3} alt="shape"/></div>
                <div className="shape4"><img src={bgimg4} alt="shape"/></div>
                <div className="shape5"><img src={bgimg5} alt="shape"/></div>
                <div className="shape6 rotateme"><img src={bgimg4} alt="shape"/></div>
                <div className="shape7"><img src={bgimg4} alt="shape"/></div>
            </div>
        );
    }
}

export default Home