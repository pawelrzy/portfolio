import React, { FC } from 'react';

import AnimatedLogo from './AnimatedLogo/AnimatedLogo';
import NavItems from './NavItems/NavItems';

import './NavBar.css';

const NavBar: FC = () => {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <AnimatedLogo />
                </div>

                <div className="navbar-menu">
                    <NavItems />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;