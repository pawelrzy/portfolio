import React, { FC } from 'react';
import ResumePath from '../../assets/resume.pdf';

const ResumeBanner: FC = () => {
    return (
        <section className="hero is-light">
            <div className="hero-body">
                <div className="container columns">
                    <div className="column">
                        <h1 className="title">
                            Check out my full resume here.
                        </h1>
                    </div>
                    <div className="column">
                        <a href={ResumePath} target="_blank" rel="noopener noreferrer" className="button">
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ResumeBanner;