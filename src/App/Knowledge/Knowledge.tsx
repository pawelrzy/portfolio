import React, { FC } from 'react';

import withCenterFormatting from '../../HOCs/withCenterFormatting/withCenterFormatting';
import Tags from './Tags/Tags';

import './Knowledge.scss';

const Knowledge: FC = () => {
    const skills = [
        {
            title: 'Languages',
            tags: [
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
            ]
        },
        {
            title: 'Front End',
            tags: [
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
            ]
        },
        {
            title: 'Back End + Infrastructure',
            tags: [
                'Express',
                '.NET Core',
                'AWS S3',
                'Firebase',
                'Docker',
                'Azure DevOps (Pipelines)',
                'CircleCI',
                'AWS EC2'
            ]
        },
        {
            title: 'Data',
            tags: [
                'PostgreSQL',
                'MongoDB',
                'TensorFlow',
                'YOLO',
                'Elasticsearch',
                'Microsoft Cognitive Services (LUIS)'
            ]
        }
    ];

    return (
        <div className="knowledge">
            <article>
                {skills.map(skill => (
                    <div className="category">
                        <h1 className="title is-size-4">{skill.title}</h1>
                        <Tags tags={skill.tags} />
                    </div>
                ))}
            </article>
        </div>
    );
};

export default withCenterFormatting('Knowledge', Knowledge);
