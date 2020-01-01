import React, { FC } from 'react';
import './AboutMe.scss';

import withCenterFormatting from '../../HOCs/withCenterFormatting/withCenterFormatting';

const AboutMe: FC = () => {
    return (
        <div>
            <div className="cricket-photo" />
            <article className="message">
                <div className="message-body">
                    <p>
                        Hi, I'm Michael Vytlingam. I am a full stack developer
                        and machine learning enthusiast from Toronto, CA. I am
                        in my second year as a mechanical engineering student at
                        the University of Waterloo.
                    </p>
                    <br />
                    <p>
                        In my personal time, I love to watch cricket (Go
                        Windies! &nbsp;
                        <span role="img" aria-label="cricket and palm tree">
                            🏏🌴
                        </span>
                        ) and enjoy playing pickup with just about any sport
                        available. I love reaching new PRs at the gym, hitting
                        insane shots in pool, and practicing my trick-shots in
                        Rocket League.
                    </p>
                    <br />
                    <p>
                        I'm particularly interested in machine learning as I
                        want to bridge the gap between the human brain and a
                        computer. I believe there are more important things for
                        humans to be doing rather than say, driving for hours,
                        reading spam emails, or handling customer support
                        issues. Why not give these tasks to a machine?
                    </p>
                    <br />
                    <p>
                        Below are my projects and experience. Let me know what
                        you think!
                    </p>
                    <br />
                    <div className="sign-off">
                        <img
                            src={require(`../../assets/signature.png`)}
                            alt="signature"
                            className="signature"
                        />
                        <p>Michael Vytlingam</p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default withCenterFormatting('About Me', AboutMe);
