import React, { FC } from 'react';
import './AboutMe.scss';

const AboutMe: FC = () => {
    return (
        <section className="container about-me columns">
            <div className="column">
                <h1 className="title is-3">About Me</h1>
                <div className="cricket-photo" />
            </div>
            <div className="column">
                <article className="message">
                    <div className="message-body about-me-content">
                        <p>
                            Hi, I'm Michael Vytlingam. I am a <b>Full Stack 
                            Developer</b> and <b>Machine Learning</b> enthusiast from Toronto, CA. 
                            I am in my second year as a mechanical engineering student
                            at the University of Waterloo.
                        </p>
                        <br/>
                        <p>
                            In my personal time, I love watching cricket (Go Windies! 🏏🌴)
                            and enjoy playing pickup with just about any sport 
                            available. I love reaching new PRs at the gym, hitting insane shots 
                            in pool, and practicing trick-shots in Rocket League.
                        </p>
                        <br/>
                        <p>
                            Apart from full stack, I'm particularly interested in machine learning as I want to bridge 
                            the gap between the human brain and a computer. I believe there are 
                            more important things for humans to be doing rather than say, 
                            driving for hours, reading spam emails, or handling customer support 
                            issues. Why not give these tasks to a machine?
                        </p>
                        <br/>
                        <p>
                            Below are my projects and experience. Let me know what you think!
                        </p>
                        <br/>
                        <p>
                            - Michael
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default AboutMe;