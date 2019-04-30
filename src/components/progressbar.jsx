import React, { Component } from 'react';
import './progressbar.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

class ProgressBar1 extends Component {
    render() {
        return (
            <div>
                <ProgressBar animated now={this.props.test} />
            </div>
        );
    }
}

export default ProgressBar1