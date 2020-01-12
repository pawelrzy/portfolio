import React, { FC } from 'react';
import './Recommendation.scss';

interface RecommendationProps {
    recommendation: {
        name: string;
        title: string;
        photo: string;
        body: string;
    };
}

const Recommendation: FC<RecommendationProps> = (
    props: RecommendationProps
) => {
    const { recommendation } = props;
    return (
        <div className="testimonial animated">
            <img
                src={require(`../../../assets/${recommendation.photo}`)}
                alt={recommendation.name}
                className="photo"
            />
            <p className="has-text-centered title is-5">
                {recommendation.name}
            </p>
            <p className="has-text-centered subtitle is-6">
                {recommendation.title}
            </p>
            <p
                className="has-text-weight-semibold is-italic has-text-centered"
                dangerouslySetInnerHTML={{ __html: recommendation.body }}
            />
        </div>
    );
};

export default Recommendation;
