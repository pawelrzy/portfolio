import React, { FC } from 'react';

import withAnimation from '../../HOCs/withAnimation/withAnimation';
import withTitle from '../../HOCs/withTitle/withTitle';

import './Knowledge.scss';

const Knowledge: FC = () => {
    const languages = ['Python', 'TypeScript/JavaScript', 'C++', 'Go', 'SQL', 'Bash']
    const frontend = {
        design: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects'],
        tools: ['React', 'Redux', 'Vue', 'Vuex', 'Sass', 'JEST', 'Enzyme', 'Webpack', 'Babel', 'Bulma', 'Semantic UI', 'Lottie'],
    };
    const backend = ['Node', 'Express', 'ElasticSearch', 'Django', 'MongoDB', 'Apollo GraphQL'];
    const infrastructure = ['Docker', 'AWS', 'Firebase', 'PosgreSQL', 'MongoDB', 'MySQL', 'CircleCI', 'Jenkins'];
    const ml = {
        tools: ['TensorFlow', 'scikit-learn'],
        interests: ['Object Detection', 'Pathfinding']
    };
    return (
        <article className="column is-half is-offset-one-quarter">
            <div className="category">
                <h1 className="title is-size-4">Languages</h1>
                <div className="tags">
                    { languages.map((item, index) => (
                        <span key={index} className="tag is-info is-rounded is-light">{item}</span>
                    ))}
                </div>
            </div>
            <div className="category">
                <h1 className="title is-size-4">Front End</h1>
                <div>
                    <h1 className="title is-size-6 sub-category-title">Design</h1>
                    <div className="tags">
                        { frontend.design.map((item, index) => (
                            <span key={index} className="tag is-info is-rounded is-light">{item}</span>
                        ))}
                    </div>
                    <h1 className="title is-size-6 sub-category-title">Tools</h1>
                    <div className="tags">
                        { frontend.tools.map((item, index) => (
                            <span key={index} className="tag is-info is-rounded is-light">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="category">
                <h1 className="title is-size-4">Back End</h1>
                <div className="tags">
                    { backend.map((item, index) => (
                        <span key={index} className="tag is-info is-rounded is-light">{item}</span>
                    ))}
                </div>
            </div>
            <div className="category">
                <h1 className="title is-size-4">Infrastructure</h1>
                <div className="tags">
                    { infrastructure.map((item, index) => (
                        <span key={index} className="tag is-info is-rounded is-light">{item}</span>
                    ))}
                </div>
            </div>
            <div className="category">
                <h1 className="title is-size-4">Machine Learning</h1>
                <div>
                    <h1 className="title is-size-6 sub-category-title">Tools</h1>
                    <div className="tags">
                        { ml.tools.map((item, index) => (
                            <span key={index} className="tag is-info is-rounded is-light">{item}</span>
                        ))}
                    </div>
                    <h1 className="title is-size-6 sub-category-title">Specific Interests</h1>
                    <div className="tags">
                        { ml.interests.map((item, index) => (
                            <span key={index} className="tag is-info is-rounded is-light">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default withAnimation(withTitle('Knowledge', Knowledge));
