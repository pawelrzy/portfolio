import React, { FC } from 'react';

import './Knowledge.scss';

const Knowledge: FC = () => {
    const fs = {
        languages: ['Typescript', 'Javascript', 'Python', 'SQL', 'Bash'],
        technologies: ['React', 'Redux', 'Vue', 'Vuex', 'Apollo GraphQL', 'Node.js', 'Express.js', 'PostgreSQL', 'Firebase', 'JEST', 'Docker'],
    }
    const ml = {
        languages: ['Python', 'Go', 'Scala'],
        technologies: ['TensorFlow', 'scikit-learn', 'numpy', 'pandas', 'Hadoop', 'Apache Spark']
    }
    return (
        <section className="container knowledge">
            <h1 className="title">Expertise</h1>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <div className="discipline-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h3 className="title is-4 discipline-title">Full Stack Development</h3>
                        <h3 className="title is-5">Languages</h3>
                        <div className="tags are-medium">
                            { fs.languages.map(language => (
                                <span className="tag">
                                    {language}
                                </span>
                            ))}
                        </div>
                        <h3 className="title is-5">Technologies</h3>
                        <div className="tags are-medium">
                            { fs.technologies.map(technology => (
                                <span className="tag">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <div className="discipline-icon">
                            <i className="fas fa-robot"></i>
                        </div>
                        <h3 className="title is-4 discipline-title">Machine Learning</h3>
                        <h3 className="title is-5">Languages</h3>
                        <div className="tags are-medium">
                            { ml.languages.map(language => (
                                <span className="tag">
                                    {language}
                                </span>
                            ))}
                        </div>
                        <h3 className="title is-5">Technologies</h3>
                        <div className="tags are-medium">
                            { ml.technologies.map(technology => (
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