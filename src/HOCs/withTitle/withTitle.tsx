import React from 'react';
import './withTitle.scss';

const withTitle = (title: string, WrappedComponent: any) => {
    //TODO: Fix
    return () => {
        return (
            <div className="container with-title">
                <h1 className="title has-text-centered is-3">{title}</h1>
                <WrappedComponent />
            </div>
        );
    };
};

export default withTitle;
