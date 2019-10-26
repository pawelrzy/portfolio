import React, { Component } from 'react';
import './AnimatedLogo.css'

import logo from '../../../logo.jpg';

class AnimatedLogo extends Component {
    render () {
        return (
            <div>
                <img src={logo} className="logo" alt="logo" />
            </div>
        );
    }
}

export default AnimatedLogo;