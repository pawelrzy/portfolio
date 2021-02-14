import React, { FC } from 'react';

import './Tags.scss';

interface TagsProps {
    tags: string[];
}

const Tags: FC<TagsProps> = (props: TagsProps) => (
    <div className="tags">
        {props.tags.map((tag, index) => (
            <span key={index} className="tag is-info is-rounded is-light skill">
                {tag}
            </span>
        ))}
    </div>
);

export default Tags;
