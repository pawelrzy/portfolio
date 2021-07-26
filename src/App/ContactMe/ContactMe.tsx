import React from 'react';

import withCenterFormatting from '../../HOCs/withCenterFormatting/withCenterFormatting';
import { ThemeContext } from '../App';
import './ContactMe.scss';

const ContactMe = () => {
    const isDarkTheme = React.useContext(ThemeContext);

    return (
        <div className="contact-me">
            <article className={`message ${isDarkTheme && 'dark-layer-1'}`}>
                <div className="message-body">
                    <form
                        name="input"
                        className="field"
                        method="POST"
                        action={'https://formspree.io/meqjzody'}
                    >
                        <div className="field">
                            <label className={`label ${isDarkTheme && 'dark-text'}`}>Name</label>
                            <div className="control">
                                <input
                                    className={`input ${isDarkTheme && 'has-background-dark has-text-primary-light'}`}
                                    type="text"
                                    name="Name"
                                    placeholder="Your name..." />
                            </div>
                        </div>

                        <div className="field">
                            <label className={`label ${isDarkTheme && 'dark-text'}`}>Email</label>
                            <div className="control">
                                <input
                                    className={`input ${isDarkTheme && 'has-background-dark has-text-primary-light'}`}
                                    type="email"
                                    name="_replyto"
                                    placeholder="Your email..." />
                            </div>
                        </div>

                        <div className="field">
                            <label className={`label ${isDarkTheme && 'dark-text'}`}>Message</label>
                            <div className="control">
                                <textarea
                                    name="message"
                                    className={`textarea ${isDarkTheme && 'has-background-dark has-text-primary-light'}`}
                                    placeholder="Type your message"
                                ></textarea>
                            </div>
                        </div>

                        <div className="field is-grouped send-button">
                            <div className="control">
                                <input
                                    className="button"
                                    type="submit"
                                    value="Send 📬" />
                            </div>
                        </div>
                    </form>
                </div>
            </article>
        </div>
    );
};

export default withCenterFormatting('Contact Me', ContactMe);
