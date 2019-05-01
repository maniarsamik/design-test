import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './gallary.css';
import Isotope from "isotope-layout/js/isotope";
import port1 from '../images/main-slider/portfolio/port_image1.jpg';
import port2 from '../images/main-slider/portfolio/port_image2.jpg';
import port3 from '../images/main-slider/portfolio/port_image3.jpg';
import port4 from '../images/main-slider/portfolio/port_image4.jpg';
class PortfolioGallary extends React.Component {
    constructor(props) {
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);

    }

    // Click Function
    onFilterChange = (newFilter) => {
        if (this.iso === undefined) {
            this.iso = new Isotope('#filter-container', {
                itemSelector: '.filter-item',
                layoutMode: "fitRows",
                fitRows: {
                    gutter: 10
                  }

            });
        }
        if (newFilter === '*') {
            this.iso.arrange({ filter: `*` });
        } else {
            this.iso.arrange({ filter: `.${newFilter}` });
        }
    }



    render() {
        
        return (
            <div>
                <div className="d-flex">
                    
                        <div className="card-title mr-auto"><span>My</span> portfolio</div>
                        <ul id="portfolio-flters">
                            <li data-filter="*" onClick={() => { this.onFilterChange("*") }}>All</li>
                            <li data-filter="filter-one" onClick={() => { this.onFilterChange("filter-one") }}>One</li>
                            <li data-filter="filter-two" onClick={() => { this.onFilterChange("filter-two") }}>Two</li>
                        </ul>
                    
                </div>
                <div id="filter-container" data-isotope='{ "itemSelector": ".filter-item", "layoutMode": "fitRows" }'>
                    <div className='filter-item filter-one'>
                        <div className="portfolio-box">
                            <div className="portfolio-item">
                                <img src={port1} alt="" />
                                <div className="desc">
                                    <div className="name">
                                        Wedding Phototgraphy
                                       </div>
                                    <div className="category">
                                        <span className="cat-divider">Photo  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='filter-item filter-two'>
                        <div className="portfolio-box">
                            <div className="portfolio-item">
                                <img src={port2} alt="" />
                                <div className="desc">
                                    <div className="name">
                                        Wedding Phototgraphy
                                       </div>
                                    <div className="category">
                                        <span className="cat-divider">Photo  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='filter-item filter-one'>
                        <div className="portfolio-box">
                            <div className="portfolio-item">
                                <img src={port3} alt="" />
                                <div className="desc">
                                    <div className="name">
                                        Wedding Phototgraphy
                                       </div>
                                    <div className="category">
                                        <span className="cat-divider">Photo  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='filter-item filter-two'>
                        <div className="portfolio-box">
                            <div className="portfolio-item">
                                <img src={port4} alt="" />
                                <div className="desc">
                                    <div className="name">
                                        Wedding Phototgraphy
                                       </div>
                                    <div className="category">
                                        <span className="cat-divider">Photo  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><div className='filter-item filter-one'>
                        <div className="portfolio-box">
                            <div className="portfolio-item">
                                <img src={port1} alt="" />
                                <div className="desc">
                                    <div className="name">
                                        Wedding Phototgraphy
                                       </div>
                                    <div className="category">
                                        <span className="cat-divider">Photo  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='filter-item filter-two'>
                        <div className="portfolio-box">
                            <div className="portfolio-item">
                                <img src={port2} alt="" />
                                <div className="desc">
                                    <div className="name">
                                        Wedding Phototgraphy
                                       </div>
                                    <div className="category">
                                        <span className="cat-divider">Photo  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioGallary