import React, { FC } from 'react';
import Scroll from 'react-scroll';

import './NavItems.scss';

const ScrollLink = Scroll.Link;

const NavItems: FC = () => {
    return (
        <div className="navbar-end nav-items">
            <ScrollLink 
                to="about-me" 
                smooth
                className="navbar-item"
            >
                About Me
            </ScrollLink>  
            <ScrollLink 
                to="knowledge" 
                smooth
                className="navbar-item"
            >
                Knowledge
            </ScrollLink> 
            <ScrollLink 
                to="experience" 
                smooth
                className="navbar-item"
            >
                Experience
            </ScrollLink> 
            <ScrollLink 
                to="contact-me" 
                smooth
                className="navbar-item contact-button button"
            >
                Say Hello &nbsp;<span role="img" aria-label="wave">👋🏽</span>
            </ScrollLink>
        </div>
    )
};

export default NavItems;