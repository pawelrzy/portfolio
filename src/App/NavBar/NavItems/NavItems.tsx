import React, { FC } from 'react';
import Scroll from 'react-scroll';

import './NavItems.scss';

const ScrollLink = Scroll.Link;

const NavItems: FC = () => {
    return (
        <div className="navbar-end nav-items">
            <ScrollLink 
                to="my-story" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="navbar-item"
                // activeClass='some-active-class'
            >
                My Story
            </ScrollLink>  
            <ScrollLink 
                to="expertise" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="navbar-item"
            >
                Expertise
            </ScrollLink> 
            <ScrollLink 
                to="past-experience" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="navbar-item"
            >
                Past Experiences
            </ScrollLink> 
            <ScrollLink 
                to="contact-me" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="navbar-item contact-button button is-primary"
            >
                Say Hello &nbsp;<span role="img" aria-label="wave">👋🏽</span>
            </ScrollLink>
        </div>
    )
};

export default NavItems;