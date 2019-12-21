import React, { FC } from 'react';
import { Link } from 'react-scroll';

import AnimatedLogo from './AnimatedLogo/AnimatedLogo';
import NavItems from './NavItems/NavItems';

import './NavBar.scss';

const NavBar: FC = () => {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand logo-container">
                    <Link
                        to="splash"
                        smooth
                    >
                        <AnimatedLogo />
                    </Link>
                </div>

                <div className="navbar-menu">
                    <NavItems />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;