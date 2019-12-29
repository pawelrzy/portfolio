import React, { Component, Fragment } from 'react';
import { Element } from 'react-scroll';

import NavBar from './NavBar/NavBar';
import Splash from './Splash/Splash';
import AboutMe from './AboutMe/AboutMe';
import Knowledge from './Knowledge/Knowledge';
import Experience from './Experience/Experience';
import Testimonials from './Testimonials/Testimonials';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';

interface AppState {
    hasScrolled: boolean;
}

class App extends Component<{}, AppState> {
    render() {
        return (
            <Fragment>
                <NavBar />
                <Element id="splash" name="splash">
                    <Splash />
                </Element>
                <Element id="about-me" name="about-me">
                    <AboutMe />
                </Element>
                <Element id="knowledge" name="knowledge">
                    <Knowledge />
                </Element>
                <Element id="experience" name="experience">
                    <Experience />
                </Element>
                <Testimonials />
                <Element id="contact-me" name="contact-me">
                    <ContactMe />
                </Element>
                <Footer />
            </Fragment>
        );
    }
}

export default App;
