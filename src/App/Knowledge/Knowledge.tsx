import React, { FC } from 'react';

import './Knowledge.scss';

const Knowledge: FC = () => {
    const languages = ['Python', 'TypeScript/JavaScript', 'C++', 'Go', 'SQL', 'Bash']
    const frontend = {
        design: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects'],
        tools: ['React', 'Redux', 'Vue', 'Vuex', 'Sass', 'JEST', 'Enzyme', 'Webpack', 'Babel', 'Bulma', 'Semantic UI', 'Lottie'],
    };
    const backend = ['Node', 'Express', 'ElasticSearch', 'Django', 'MongoDB', 'Apollo GraphQL'];
    const infrastructure = ['Docker', 'Firebase', 'PosgreSQL', 'MongoDB', 'MySQL', 'CircleCI', 'Jenkins'];
    const ml = {
        tools: ['TensorFlow', 'scikit-learn'],
        interests: ['Object Detection', 'Pathfinding']
    };
    return (
        <section className="container knowledge columns">
            <div className="column">
                <h1 className="title is-3">Knowledge</h1>
            </div>
            <article className="column">
                <div className="category">
                    <h1 className="title is-size-4">Languages</h1>
                    <div className="tags">
                        { languages.map(item => (
                            <span className="tag is-info is-rounded is-light">{item}</span>
                        ))}
                    </div>
                </div>
                <div className="category">
                    <h1 className="title is-size-4">Front End</h1>
                    <div>
                        <h1 className="title is-size-6 sub-category-title">Design</h1>
                        <div className="tags">
                            { frontend.design.map(item => (
                                <span className="tag is-info is-rounded is-light">{item}</span>
                            ))}
                        </div>
                        <h1 className="title is-size-6 sub-category-title">Tools</h1>
                        <div className="tags">
                            { frontend.tools.map(item => (
                                <span className="tag is-info is-rounded is-light">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="category">
                    <h1 className="title is-size-4">Back End</h1>
                    <div className="tags">
                        { backend.map(item => (
                            <span className="tag is-info is-rounded is-light">{item}</span>
                        ))}
                    </div>
                </div>
                <div className="category">
                    <h1 className="title is-size-4">Infrastructure</h1>
                    <div className="tags">
                        { infrastructure.map(item => (
                            <span className="tag is-info is-rounded is-light">{item}</span>
                        ))}
                    </div>
                </div>
                <div className="category">
                    <h1 className="title is-size-4">Machine Learning</h1>
                    <div>
                        <h1 className="title is-size-6 sub-category-title">Tools</h1>
                        <div className="tags">
                            { ml.tools.map(item => (
                                <span className="tag is-info is-rounded is-light">{item}</span>
                            ))}
                        </div>
                        <h1 className="title is-size-6 sub-category-title">Specific Interests</h1>
                        <div className="tags">
                            { ml.interests.map(item => (
                                <span className="tag is-info is-rounded is-light">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Knowledge;