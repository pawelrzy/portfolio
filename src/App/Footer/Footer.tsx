import React, { FC } from 'react';

import './Footer.scss'

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    Made with <span role="img" aria-label="wave">❤️</span>, from Michael.
                </p>
            </div>
        </footer>
    );
};

export default Footer;