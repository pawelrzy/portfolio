import React, { FC } from 'react';
import Scroll from 'react-scroll';
import { ThemeContext } from '../../App';

import './NavItems.scss';

const ScrollLink = Scroll.Link;

const NavItems: FC = () => {
    const isDarkTheme = React.useContext(ThemeContext);
    return (
        <div className="navbar-end nav-items">
            <ScrollLink to="about-me" smooth className={`navbar-item ${isDarkTheme && 'dark-text'}`}>
                About Me
            </ScrollLink>
            <ScrollLink to="knowledge" smooth className={`navbar-item ${isDarkTheme && 'dark-text'}`}>
                Knowledge
            </ScrollLink>
            <ScrollLink to="experience" smooth className={`navbar-item ${isDarkTheme && 'dark-text'}`}>
                Experience
            </ScrollLink>
            <ScrollLink to="projects" smooth className={`navbar-item ${isDarkTheme && 'dark-text'}`}>
                Projects
            </ScrollLink>
            <ScrollLink
                to="contact-me"
                smooth
                className={`navbar-item contact-button button ${isDarkTheme && 'is-light'}`}
            >
                Say Hello &nbsp;
                <span role="img" aria-label="wave">
                    👋🏽
                </span>
            </ScrollLink>
        </div>
    );
};

export default NavItems;
