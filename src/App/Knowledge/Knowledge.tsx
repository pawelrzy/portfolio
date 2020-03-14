import React, { FC } from 'react';

import withCenterFormatting from '../../HOCs/withCenterFormatting/withCenterFormatting';
import Tags from './Tags/Tags';

import './Knowledge.scss';

const Knowledge: FC = () => {
    const languages = [
        'TypeScript',
        'JavaScript',
        'Python',
        'C#',
        'Java',
        'Go',
        'SQL',
        'MATLAB',
        'HTML5',
        'Sass'
    ];
    const frontend = [
        'React',
        'Redux',
        'Vue',
        'Electron',
        'JEST',
        'Enzyme',
        'Webpack',
        'Babel',
        'Bulma',
        'Lottie',
        'Figma',
        'Gatsby',
        'Apollo GraphQL',
        'Semantic UI',
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Adobe After Effects'
    ];
    const backendAndInfrastructure = [
        'Express',
        '.NET Core',
        'AWS S3',
        'Firebase',
        'Docker',
        'Azure DevOps (Pipelines)',
        'CircleCI',
        'AWS EC2'
    ];
    const data = [
        'PostgreSQL',
        'MongoDB',
        'TensorFlow',
        'YOLO',
        'Elasticsearch',
        'Microsoft Cognitive Services (LUIS)'
    ];
    return (
        <div className="knowledge">
            <article>
                <div className="category">
                    <h1 className="title is-size-4">Languages</h1>
                    <Tags tags={languages} />
                </div>
                <div className="category">
                    <h1 className="title is-size-4">Front End</h1>
                    <Tags tags={frontend} />
                </div>
                <div className="category">
                    <h1 className="title is-size-4">
                        Back End + Infrastructure
                    </h1>
                    <Tags tags={backendAndInfrastructure} />
                </div>
                <div className="category">
                    <h1 className="title is-size-4">Data</h1>
                    <Tags tags={data} />
                </div>
            </article>
        </div>
    );
};

export default withCenterFormatting('Knowledge', Knowledge);
