import React, { FC } from 'react';

import './ContactMe.scss';

const ContactMe: FC = () => {
    return (
        <section className="container contact-me">
            <h1 className="title">Say Hello!</h1>
            <form 
                name="input"
                className="field"
                method="POST"
                action={'https://formspree.io/meqjzody'}
            >
                
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" name="Name" placeholder="Your name..." />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" name="_replyto" placeholder="Your email..." />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea name="message" className="textarea" placeholder="Type your message"></textarea>
                    </div>
                </div>

                <div className="field is-grouped send-button">
                    <div className="control">
                        <input className="button is-link" type="submit" value="Send 📬" />
                    </div>
                </div>

            </form>
        </section>
    );
};

export default ContactMe;