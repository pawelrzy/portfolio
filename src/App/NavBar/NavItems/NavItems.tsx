import React, { FC } from 'react';
import './NavItems.css';

const NavItems: FC = () => {
    return (
        <div className="navbar-end nav-items">
            <a className="navbar-item">
                Knowledge
            </a>
            <a className="navbar-item">
                Experiences
            </a>
            <div className="navbar-item contact-button button is-primary">
                Say Hello 👋🏽
            </div>
            {/* Switch */}
        </div>
    )
};

export default NavItems;