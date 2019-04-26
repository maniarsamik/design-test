import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import './about.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class About extends Component {
    render() {
        return (
            <div className="main-container">
                <Navbar />
                <div className="inner-container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col content-part">
                                <div className="about-title">
                                    <p>Hello, I’m a Patrick, web-developer based on Paris.<br></br>
                                        I have rich experience in web site design & building<br></br>
                                        and customization. Also I am good at html, css,<br></br>
                                        wordpress, php, jquery, bootstrap.
                                </p>
                                    <a href="#" className="btn-one"><i class="icon la la-download"></i>Download CV</a>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div class="detail-title"><span>My</span> Experience</div>
                                        <div class="sec-resume resumee dfpad ">
                                            <div class="resume-items card-box">
                                                <div class="resume-item">
                                                    <div class="name">Web Development</div>
                                                    <div class="date">2013-Present<span> | </span>Facebook Inc.</div>
                                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col"></div>
                                </div>
                            </div>
                            <div className="col about-banner"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About