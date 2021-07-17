import React, { FC, useEffect, useState } from 'react';
import './AboutMe.scss';

const AboutMe: FC = () => {
    // const isMobile = window.innerWidth < 1024;
    const [update, causeUpdate] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            causeUpdate(!update);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <div className="about-me container">
            <div className="about-me-photos">
                <div className="selfie" />
                {/* {!isMobile && <div className="cricket-photo" />} */}
            </div>

            <div className="about-me-text">
                <p>
                    I'm a <mark>Software Engineering Intern @ Snowflake</mark>
                </p>
                <br />
                <p>
                    I am also a fourth year <mark>Mechanical Engineering student @{' '}
                        <a href="https://uwaterloo.ca/">UWaterloo</a></mark>
                </p>
                <br />
                <p>
                    I'm a lover of cars, planes, cricket, and basketball. I
                    enjoy lifting weights, playing Werewolf with friends,
                    experimenting with new ideas and learning as much as I can
                    along the way.
                </p>
                <br />
                <p>Below are my projects and experiences, let me know what you think!</p>
                <br />
                <div className="sign-off">
                    <img
                        src={require(`../../assets/signature.png`)}
                        alt="signature"
                        className="signature"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
