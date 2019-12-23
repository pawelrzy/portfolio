import React, { FC, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import AnimatedLogo from './AnimatedLogo/AnimatedLogo';
import NavItems from './NavItems/NavItems';

import './NavBar.scss';

const NavBar: FC = () => {
    const [menuToggled, setMenuToggled] = useState(false);
    const [update, causeUpdate] = useState(false);
    const isMobile = window.innerWidth < 1024;
    
    useEffect(function setupListener() {
        function handleResize() {
            causeUpdate(!update);
        }
        window.addEventListener('resize', handleResize);

        return function cleanupListener() {
            window.removeEventListener('resize', handleResize);
        };
    });

    const toggleNav = () => {
        var nav = document.getElementById('michael');
        if (!nav) return;
        var className = nav.getAttribute('class');
        if (className === 'navbar-menu') {
            nav.className = 'navbar-menu is-active';
            setMenuToggled(true);
        } else {
            nav.className = 'navbar-menu';
            setMenuToggled(false);
        }
    };

    return (
        <nav
            className="navbar is-fixed-top animated fadeIn"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand logo-container">
                    <Link to="splash" smooth>
                        <AnimatedLogo update={update} />
                    </Link>
                    {isMobile && ( // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            role="button"
                            className="navbar-burger burger"
                            aria-label="menu"
                            aria-expanded="false"
                            onClick={toggleNav}
                        >
                            {!menuToggled ? (
                                <Fragment>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </Fragment>
                            ) : (
                                <div className="exit-icon">
                                    <i className="fas fa-times"></i>
                                </div>
                            )}
                        </a>
                    )}
                </div>

                <div id="michael" className="navbar-menu" onClick={toggleNav}>
                    <NavItems />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
