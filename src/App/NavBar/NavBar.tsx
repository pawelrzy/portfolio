import React from 'react';
import { Link } from 'react-scroll';

import NavItems from './NavItems/NavItems';

import './NavBar.scss';

interface NavBarProps {
    hasScrolled: boolean;
}

export const NavBar = ({ hasScrolled }: NavBarProps) => {
    const [menuToggled, setMenuToggled] = React.useState(false);
    const [update, causeUpdate] = React.useState(false);

    const isMobile = window.innerWidth < 1024;

    const handleResize = () => causeUpdate(!update);

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    const toggleNav = () => {
        var nav = document.getElementById('nav-items') as HTMLElement;
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
            className={`navbar is-fixed-top animated fadeIn ${hasScrolled &&
                'drop-shadow'}`}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className={`navbar-brand logo-container animated fadeIn ${hasScrolled &&
                    'make-visible'}`}>
                    <Link to="splash" smooth>
                        <Logo />
                    </Link>
                    {isMobile && (
                        <button
                            className="navbar-burger burger"
                            aria-label="menu"
                            aria-expanded="false"
                            onClick={toggleNav}
                        >
                            {!menuToggled ? (
                                // Burger Icon
                                <>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </>
                            ) : (
                                <div className="exit-icon">
                                    <i className="fas fa-times"></i>
                                </div>
                            )}
                        </button>
                    )}
                </div>
                <div id="nav-items" className="navbar-menu" onClick={toggleNav}>
                    <NavItems />
                </div>
            </div>
        </nav>
    );
};

const Logo = () => {
    const isDesktop = window.innerWidth > 1024;
    return (
        <div className="logo-container columns">
            <div className="column">
                <div className="logo" />
            </div>
            {isDesktop && <Name />}
        </div>
    );
}

const Name = () => (
    <div>
        <div className="name-text">Michael Vytlingam</div>
        <div className="position-text">
            Full Stack Developer
        </div>
    </div>
);