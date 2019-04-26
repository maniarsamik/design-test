import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import HomeSlider from '../components/homeslider.jsx';

import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="main-container">
                <Navbar />
                <HomeSlider />
            </div>
        );
    }
}

export default Home