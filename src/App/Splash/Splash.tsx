import React, { FC } from 'react';
import NavBar from '../NavBar/NavBar';

import './Splash.scss'

//TODO Animate Arrow and make clickable
const Splash: FC = () => {
    return (
        <section className="hero splash">
            <NavBar />
            <div className="hero-body body-container">
                <div className="container text-container">
                    <h1 className="title is-massive">
                        <span role="img" aria-label="wave">👋🏽</span>
                    </h1>
                    <h1 className="title is-massive">
                        Hey, I'm Michael.
                    </h1>
                    <h1 className="subtitle">
                        I'm an engineering student at the University of Waterloo with a passion for quality software.
                    </h1>
                    <div className="buttons">
                        <div className="button">
                            View Resume
                        </div>
                        <div className="button is-primary">
                            Contact Me
                        </div>
                    </div>
                </div>
            </div>
            <div className="container icon">
                <i className="fas fa-arrow-down"></i>
            </div>
        </section>
    );
}

export default Splash;