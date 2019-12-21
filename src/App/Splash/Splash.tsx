import React, { FC } from 'react';
import './Splash.scss';

import SplashText from './SplashText/SplashText';
import Portrait from './Portrait/Portrait';

const Splash: FC = () => {
    return (
        <section className="container splash">
            <div className="splash-content">
                <SplashText />
                <Portrait />
            </div>
            <div className="arrow-down">
                <i className="fas fa-chevron-down"></i>
            </div>
        </section>
    );
}

export default Splash;