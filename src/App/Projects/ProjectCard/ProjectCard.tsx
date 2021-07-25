import React from 'react';
import './ProjectCard.scss';

interface ProjectCardProps {
    project: {
        name: string;
        coverPhoto: string;
        date: string;
        body: string;
    };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    let descriptionRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        descriptionRef.current!.innerHTML = project.body;
    });

    return (
        <article className="message job-card">
            <div
                className="message-header cover-photo"
                style={{
                    backgroundImage: `url('${require(`../../../assets/${project.coverPhoto}`)}')`,
                }}
            />
            <div className="message-body">
                <div className="title-row">
                    <div className="project-name">
                        <div>
                            <h1 className="is-size-6">
                                <b>{project.name}</b>
                            </h1>
                        </div>
                        <p className="has-text-grey is-size-7">
                            {project.date}
                        </p>
                    </div>
                </div>
                <div ref={descriptionRef} />
            </div>
        </article>
    );
};
