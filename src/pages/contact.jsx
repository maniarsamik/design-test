import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import './contact.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Contact extends Component {
    render() {
        return (
            <div className="main-container">
                <Navbar />
                <div className="inner-container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 content-part ">
                                <div className="about-text">
                                    <div className="headertext-bg">Contact</div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-sm-12">
                                        test
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-sm-6 about-banner"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact