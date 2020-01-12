import React, { FC } from 'react';

import withCenterFormatting from '../../HOCs/withCenterFormatting/withCenterFormatting';
import Tags from './Tags/Tags';

import './Knowledge.scss';

const Knowledge: FC = () => {
    const languages = [
        'TypeScript/JavaScript',
        'Python',
        'C++',
        'Go',
        'SQL',
        'Bash'
    ];
    const frontend = {
        design: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects'],
        tools: [
            'React',
            'Redux',
            'Vue',
            'Vuex',
            'Sass',
            'JEST',
            'Enzyme',
            'Webpack',
            'Babel',
            'Bulma',
            'Semantic UI',
            'Lottie'
        ]
    };
    const backend = [
        'Node',
        'Express',
        'ElasticSearch',
        'Django',
        'Apollo GraphQL'
    ];
    const infrastructure = [
        'Docker',
        'Firebase',
        'PosgreSQL',
        'MySQL',
        'CircleCI'
    ];
    const ml = {
        tools: ['TensorFlow', 'scikit-learn', 'numpy', 'pandas'],
        interests: ['Object Detection', 'Pathfinding']
    };
    return (
        <div className="knowledge">
            <article>
                <div className="category">
                    <h1 className="title is-size-4">Languages</h1>
                    <Tags tags={languages} />
                </div>
                <div className="category">
                    <h1 className="title is-size-4">Front End</h1>
                    <div>
                        <h1 className="title is-size-6 sub-category-title">
                            Design
                        </h1>
                        <Tags tags={frontend.design} />
                        <h1 className="title is-size-6 sub-category-title">
                            Tools
                        </h1>
                        <Tags tags={frontend.tools} />
                    </div>
                </div>
                <div className="category">
                    <h1 className="title is-size-4">Back End</h1>
                    <Tags tags={backend} />
                </div>
                <div className="category">
                    <h1 className="title is-size-4">Infrastructure</h1>
                    <Tags tags={infrastructure} />
                </div>
                <div className="category">
                    <h1 className="title is-size-4">Machine Learning</h1>
                    <div>
                        <h1 className="title is-size-6 sub-category-title">
                            Tools
                        </h1>
                        <Tags tags={ml.tools} />
                        <h1 className="title is-size-6 sub-category-title">
                            Specific Interests
                        </h1>
                        <Tags tags={ml.interests} />
                    </div>
                </div>
            </article>
        </div>
    );
};

export default withCenterFormatting('Knowledge', Knowledge);
