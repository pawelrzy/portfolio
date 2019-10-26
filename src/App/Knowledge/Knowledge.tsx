import React, { FC } from 'react';

const Knowledge: FC = () => {
    const languages = ['Typescript/Javascript', 'Python', 'Go', 'SQL', 'Bash', 'MATLAB', 'Swift', 'C#', 'C++'];
    return (
        <section className="container">
            <h1 className="title">Knowledge</h1>
            <div className="level">
                <div className="level-left">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="title is-4">Languages</h3>
                            <div className="tags are-medium">
                                { languages.map(language => (
                                    <span className="tag">
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="level-right">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="title is-4">Technologies</h3>
                            <div className="tags are-medium">
                                { languages.map(language => (
                                    <span className="tag">
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Knowledge;