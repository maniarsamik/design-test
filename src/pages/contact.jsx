import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import ContactForm from '../components/contactform.jsx';
import ContactMap from '../components/contactmap.jsx';

import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Contact extends Component {
    render() {
        return (
            <div className="main-container">
                <Navbar />
                <div className="inner-container contactdetail">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 content-part">
                                <div className="lighttitle-text">
                                    <div className="headertext-bg">Contact</div>
                                </div>
                                <div className="card-items">
                                    <div className="row">
                                        <div className="card-title"><span>Get</span> in Touch</div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-sm-6">
                                            <div className="contactbox card-box">
                                                <div className="icon">
                                                    <FontAwesomeIcon icon="map-marker-alt" />
                                                </div>
                                                <div className="contactinform">
                                                    <div className="name">Address</div>
                                                    <p>Ahmedabad, Gujarat</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="contactbox card-box">
                                                <div className="icon">
                                                <FontAwesomeIcon icon="mobile-alt" />
                                                </div>
                                                <div className="contactinform">
                                                    <div className="name">Phone</div>
                                                    <p>Ahmedabad, Gujarat</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-sm-6">
                                            <div className="contactbox card-box">
                                                <div className="icon">
                                                    <FontAwesomeIcon icon="envelope" />
                                                </div>
                                                <div className="contactinform">
                                                    <div className="name">Email</div>
                                                    <p>Ahmedabad, Gujarat</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="contactbox card-box">
                                                <div className="icon">
                                                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                                                </div>
                                                <div className="contactinform">
                                                    <div className="name">Address</div>
                                                    <p>Ahmedabad, Gujarat</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card-title"><span>Contact</span> Form</div>
                                    <div className="col-sm-12">
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 no-gutters main-map">
                                <ContactMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact