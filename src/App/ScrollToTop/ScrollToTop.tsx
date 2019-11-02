import React, { FC } from 'react';
import Scroll from 'react-scroll';

import './ScrollToTop.scss';
const ScrollLink = Scroll.Link;

const Splash: FC = () => {
    return (
        <ScrollLink 
            to="splash" 
            spy={true} 
            smooth={true} 
            duration={500}
            offset={-200}
            className="button is-primary scroll-button"
        >
            <i className="fas fa-arrow-up"></i>
        </ScrollLink>
    );
};

export default Splash;