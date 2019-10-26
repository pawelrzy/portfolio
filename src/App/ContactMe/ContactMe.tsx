import React, { FC } from 'react';

const ContactMe: FC = () => {
    return (
        <section className="container">
            <h1 className="title">Contact Me</h1>
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

                <div className="field is-grouped">
                    <div className="control">
                        <input className="button is-link" type="submit" value="Submit" />
                    </div>
                </div>

            </form>
        </section>
    );
};

export default ContactMe;