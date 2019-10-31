import React, { FC } from 'react';

import AnimatedLogo from './AnimatedLogo/AnimatedLogo';
import NavItems from './NavItems/NavItems';

import './NavBar.scss';

const NavBar: FC = () => {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand logo-container">
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