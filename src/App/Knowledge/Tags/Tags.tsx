import React, { FC } from 'react';

interface TagsProps {
    tags: string[];
}

const Tags: FC<TagsProps> = (props: TagsProps) => (
    <div className="tags">
        {props.tags.map((tag, index) => (
            <span key={index} className="tag is-info is-rounded is-light">
                {tag}
            </span>
        ))}
    </div>
);

export default Tags;
