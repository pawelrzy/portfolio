import React from 'react';
import './withCenterFormatting.scss';

type ComponentType = React.ComponentClass | React.StatelessComponent;

const withCenterFormatting = (
    title: string,
    WrappedComponent: ComponentType
) => {
    return () => {
        return (
            <div className="column is-half is-offset-one-quarter with-title">
                <h1 className="title has-text-centered is-3">{title}</h1>
                <WrappedComponent />
            </div>
        );
    };
};

export default withCenterFormatting;
