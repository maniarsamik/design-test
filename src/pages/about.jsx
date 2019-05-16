import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import { Link } from 'react-router-dom';
import ProgressBar1 from '../components/progressbar.jsx';
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

                            <div className="col-sm-6 content-part ">
                                <div class="lighttitle-text">
                                    <div class="headertext-bg">About</div>
                                </div>
                                <div className="about-text">
                                    <p><span>Hello, I’m a Patrick,</span> web-developer based on Paris.<br></br>
                                        I have rich experience in web site design & building<br></br>
                                        and customization. Also I am good at html, css,<br></br>
                                        wordpress, php, jquery, bootstrap.
                                     </p>
                                    <Link href="#" className="btn-one">Download CV</Link>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-sm-6">
                                        <div className="card-items">
                                            <div className="card-title"><span>My</span> Experience</div>
                                            <div className="card-box">
                                                <div className="card-item">
                                                    <div className="name">Web Development</div>
                                                    <div className="date">2013-Present<span> | </span>Facebook Inc.</div>
                                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                                </div>
                                                <div className="card-item">
                                                    <div className="name">Front-end Developer</div>
                                                    <div className="date">2013-Present<span> | </span>Facebook Inc.</div>
                                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                                </div>
                                                <div className="card-item">
                                                    <div className="name">Senior Developer</div>
                                                    <div className="date">2013-Present<span> | </span>Facebook Inc.</div>
                                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card-items">
                                            <div className="card-title"><span>My</span> Education</div>
                                            <div className="card-box">
                                                <div className="card-item">
                                                    <div className="name">Art University</div>
                                                    <div className="date">2013-Present<span> | </span>Facebook Inc.</div>
                                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                                </div>
                                                <div className="card-item">
                                                    <div className="name">Programming Course</div>
                                                    <div className="date">2013-Present<span> | </span>Facebook Inc.</div>
                                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                                </div>
                                                <div className="card-item">
                                                    <div className="name">Web Design Course</div>
                                                    <div className="date">2013-Present<span> | </span>Facebook Inc.</div>
                                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card-items">
                                            <div className="card-title"><span>Professional</span> Skills</div>
                                            <div className="card-box">
                                                <div className="card-item">
                                                    <div className="name">Web Development</div>
                                                    <ProgressBar1 test="98" />
                                                </div>
                                                <div className="card-item">
                                                    <div className="name">Web Development</div>
                                                    <ProgressBar1 test="90" />
                                                </div>
                                                <div className="card-item">
                                                    <div className="name">Web Development</div>
                                                    <ProgressBar1 test="95" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card-items">
                                            <div className="card-title"><span>Personal</span> Skills</div>
                                            <div className="card-box">
                                                <div className="card-item">
                                                    <div className="name">Web Development</div>
                                                    <ProgressBar1 test="90" />
                                                </div>
                                                <div className="card-item">
                                                    <div className="name">Web Development</div>
                                                    <ProgressBar1 test="98" />
                                                </div>
                                                <div className="card-item">
                                                    <div className="name">Web Development</div>
                                                    <ProgressBar1 test="80" />
                                                </div>
                                            </div>
                                        </div>
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

export default About