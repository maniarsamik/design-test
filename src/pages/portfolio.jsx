import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import PortfolioGallary from '../components/gallary.jsx';
import './portfolio.css';
class Portfolio extends Component {
    render() {
        return (
            <div className="main-container">
                <Navbar />
                <div className="inner-container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 content-part">
                                <div className="about-text">
                                    <div className="headertext-bg">portfolio</div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-sm-12 portfolio-part">
                                        <PortfolioGallary />
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-6 portfolio-banner"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio