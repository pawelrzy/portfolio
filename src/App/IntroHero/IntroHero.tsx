import React, { FC } from 'react';

import './IntroHero.css'

const IntroHero: FC = () => {
    return (
        <section className="hero is-info">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-massive">
                        👋🏽
                    </h1>
                    <h1 className="title is-massive">
                        Hey, I'm Michael.
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
        </section>
    );
}

export default IntroHero;