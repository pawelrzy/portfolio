import React, { FC } from 'react';
import './NavItems.scss';

const NavItems: FC = () => {
    return (
        <div className="navbar-end nav-items">
            <a className="navbar-item" href="/#">
                Expertise
            </a>
            <a className="navbar-item" href="/#">
                Past Experiences
            </a>
            <div className="navbar-item contact-button button is-primary">
                Say Hello &nbsp;<span role="img" aria-label="wave">👋🏽</span>
            </div>
        </div>
    )
};

export default NavItems;