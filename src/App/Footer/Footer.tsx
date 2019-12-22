import React, { FC } from 'react';

import './Footer.scss'

const Footer: FC = () => {
    return (
        <footer className="footer">
            <section className="container columns">
                <div className="column">
                    <div className="social-media-links">
                        <a href="https://github.com/mikevyt/" rel="Github Profile">
                            <i className="fab fa-github social-icon"></i>
                        </a>
                        <a href="https://medium.com/@michael.vytlingam" rel="Medium Profile">
                            <i className="fab fa-medium social-icon"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mikevyt/" rel="LinkedIn Profile">
                            <i className="fab fa-linkedin social-icon"></i>
                        </a>
                        <a href="https://www.kaggle.com/mikevyt" rel="Kaggle Profile">
                            <i className="fab fa-kaggle social-icon"></i>
                        </a>
                    </div>
                    <p>© 2019 Michael Vytlingam. All Rights Reserved.</p>
                </div>
            </section>
            
        </footer>
    );
};

export default Footer;