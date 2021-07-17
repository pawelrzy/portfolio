import React, { Component } from 'react';
import './Logo.scss';

import Name from './Name/Name';

interface LogoProps {
    update: boolean;
}

class Logo extends Component<LogoProps> {
    render() {
        const isDesktop = window.innerWidth > 1024;
        return (
            <div className="logo-container columns">
                <div className="column">
                    <div className="logo" />
                </div>
                {isDesktop && <Name />}
            </div>
        );
    }
}

export default Logo;
