import React, { FC } from 'react';
import Scroll from 'react-scroll';

import ResumePath from '../../assets/resume.pdf';

import './Splash.scss'

const ScrollLink = Scroll.Link;

//TODO Animate Arrow and make clickable
const Splash: FC = () => {
    return (
        <section className="hero splash">
            <div className="hero-body body-container">
                <div className="container text-container">
                    <div className="selfie-container" />
                    <h1 className="title is-massive">
                        <span role="img" aria-label="wave">👋🏽</span> Hey, I'm Michael.
                    </h1>
                    <h1 className="subtitle">
                        I'm an engineering student at the University of Waterloo, a Full Stack Developer and Machine Learning enthousiast.
                    </h1>
                    <div className="buttons">
                        <a href={ResumePath} target="_blank" rel="noopener noreferrer" className="button">
                            View Resume
                        </a>
                        <ScrollLink 
                            to="contact-me" 
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            offset={-200} 
                            className="button is-primary"
                        >
                            Get in Touch&nbsp;<span role="img" aria-label="wave">👋🏽</span>
                        </ScrollLink>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/mikevyt/" rel="Github Profile">
                            <i className="fab fa-github social-icon"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mikevyt/" rel="LinkedIn Profile">
                            <i className="fab fa-linkedin-in social-icon"></i>
                        </a>
                        <a href="https://www.kaggle.com/mikevyt" rel="Kaggle Profile">
                            <i className="fab fa-kaggle social-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <ScrollLink
                to="contact-me" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="container icon"
                offset={-200}
            >
                <i className="fas fa-arrow-down"></i>
            </ScrollLink>

        </section>
    );
}

export default Splash;