import React from 'react';
import './withCenterFormatting.scss';

const withCenterFormatting = (title: string, WrappedComponent: any) => {
    //TODO: Fix
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
