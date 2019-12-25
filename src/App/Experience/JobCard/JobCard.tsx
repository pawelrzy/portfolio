import React, { FC } from 'react';
import './JobCard.scss';

interface JobCardProps {
    job: any //TODO
}

const JobCard: FC<JobCardProps> = (props: JobCardProps) => {
    const { job } = props;
    return (
        <article className="message job-card">
            {job.hasOwnProperty('coverPhoto') && 
                <div 
                    className="message-header cover-photo"
                    style={{backgroundImage: `url('${require(`../../../assets/${job.coverPhoto}`)}')`}} />
            }
            <div className="message-body">
                <div className="title-row">
                    <img 
                        src={require(`../../../assets/${job.logo}`)} 
                        alt={`${job.company} logo`}
                        className="company-logo"
                    />
                    <div className="company-name">
                        <div>
                            <h1 className="is-size-6"><b>{job.company} /</b>&nbsp;{job.position}</h1>
                        </div>
                        <p className="has-text-grey is-size-7">{job.location} | {job.date}</p>
                    </div>
                </div>
                <p dangerouslySetInnerHTML={{__html: job.body}}></p>
            </div>
        </article>
    );
}

export default JobCard;