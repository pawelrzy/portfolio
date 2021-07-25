import React from 'react';
import { Link } from 'react-scroll';
import { SocialIcons } from '../../components/SocialIcons';

import './Footer.scss';

export const Footer = () => (
    <footer className="footer">
        <section className="container columns">
            <div className="column">
                <SocialIcons />
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
