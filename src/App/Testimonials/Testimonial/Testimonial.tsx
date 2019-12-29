import React, { FC } from 'react';
import './Testimonial.scss';

interface TestimonialProps {
    testimonial: any; //TODO
}

const Testimonial: FC<TestimonialProps> = (props: TestimonialProps) => {
    const { testimonial } = props;
    return (
        <div className="testimonial animated">
            <img
                src={require(`../../../assets/${testimonial.photo}`)}
                alt={testimonial.name}
                className="photo"
            />
            <p className="has-text-centered title is-5">{testimonial.name}</p>
            <p className="has-text-centered subtitle is-6">
                {testimonial.title}
            </p>
            <p
                className="has-text-weight-semibold is-italic has-text-centered"
                dangerouslySetInnerHTML={{ __html: testimonial.body }}
            />
        </div>
    );
};

export default Testimonial;
