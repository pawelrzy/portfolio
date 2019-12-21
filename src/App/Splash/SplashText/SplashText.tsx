import React, { FC } from 'react';

import './SplashText.scss';

const SplashText: FC = () => {
    return (
        <div>
            <h1 className="title is-1">
                Hey, I'm Michael. <span role="img" aria-label="wave">👋🏽</span>
            </h1>
            <h2 className="subtitle">
                I like to build beautiful things for wonderful people. 
                <br/>
                I’m currently looking for internships for the Summer/Fall 2020 season.
            </h2>
        </div>
    );
}

export default SplashText;