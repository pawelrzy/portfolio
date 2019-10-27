import React, { FC } from 'react';

import './Knowledge.scss';

const Knowledge: FC = () => {
    const languages = ['Typescript/Javascript', 'Python', 'SQL', 'Bash', 'Swift', 'C++'];
    const technologies = ['React', 'Redux', 'Vue', 'Sass', 'REST', 'GraphQL', 'Apollo', 'Node', 'Express', 'Django', 'PostgreSQL', 'Firebase', 'JEST', 'Webpack', 'Babel', 'Docker'];
    return (
        <section className="container knowledge">
            <h1 className="title">Interests</h1>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <h3 className="title is-6">Front-End Development</h3>
                        <div className="tags are-medium">
                            { languages.map(language => (
                                <span className="tag">
                                    {language}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <h3 className="title is-6">Back-End Development</h3>
                        <div className="tags are-medium">
                            { technologies.map(technology => (
                                <span className="tag">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <h3 className="title is-6">Machine Learning</h3>
                        <div className="tags are-medium">
                            { technologies.map(technology => (
                                <span className="tag">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Knowledge;