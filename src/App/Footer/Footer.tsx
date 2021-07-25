import React from 'react';
import { Link } from 'react-scroll';

import './Footer.scss';

export const Footer = () => (
    <footer className="footer">
        <section className="container columns">
            <div className="column">
                <div className="columns">
                    <div className="social-media-links column">
                        <a
                            href="https://github.com/mikevyt/"
                            rel="Github Profile"
                        >
                            <i className="fab fa-github social-icon"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mikevyt/"
                            rel="LinkedIn Profile"
                        >
                            <i className="fab fa-linkedin social-icon"></i>
                        </a>
                    </div>
                </div>
                <p>© 2021 Michael Vytlingam. All Rights Reserved.</p>
            </div>
            <div className="column footer-right">
                <Link to="splash" smooth>
                    <i className="fas fa-arrow-up"></i>
                </Link>
            </div>
        </section>
    </footer>
);
