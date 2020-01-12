import React, { Component } from 'react';
import './Logo.scss';

import AnimatedName from './AnimatedName/AnimatedName';

interface AnimatedLogoProps {
    update: boolean;
}

class Logo extends Component<AnimatedLogoProps> {
    render() {
        const isDesktop = window.innerWidth > 1024;
        return (
            <div className="logo-container columns">
                <div className="column">
                    <div className="logo" />
                </div>
                {isDesktop && <AnimatedName />}
            </div>
        );
    }
}

export default Logo;
