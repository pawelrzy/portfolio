import React, { Component, Fragment } from 'react';
import { Element } from 'react-scroll';

import './App.scss';

import NavBar from './NavBar/NavBar';
import Splash from './Splash/Splash';
import AboutMe from './AboutMe/AboutMe';
import Knowledge from './Knowledge/Knowledge';
import Projects from './Projects/Projects';
import Experience from './Experiences/Experiences';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
// import Recommendations from './Recommendations/Recommendations';

interface AppState {
    hasScrolled: boolean;
}

class App extends Component<{}, AppState> {
    state: AppState = {
        hasScrolled: false,
    };

    componentDidMount() {
        document.addEventListener('scroll', this.checkScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.checkScroll);
    }

    checkScroll = () => {
        if (window.scrollY > 0 && !this.state.hasScrolled) {
            this.setState({ hasScrolled: true });
        } else if (window.scrollY === 0 && this.state.hasScrolled) {
            this.setState({ hasScrolled: false });
        }
    };

    render() {
        const { hasScrolled } = this.state;
        return (
            <Fragment>
                <NavBar hasScrolled={hasScrolled} />
                <Element id="splash" name="splash">
                    <Splash />
                </Element>
                <Element id="about-me" name="about-me" className="body-section">
                    <AboutMe />
                </Element>
                <Element
                    id="knowledge"
                    name="knowledge"
                    className="body-section"
                >
                    <Knowledge />
                </Element>
                <Element id="projects" name="projects" className="body-section">
                    <Projects />
                </Element>
                <Element
                    id="experience"
                    name="experience"
                    className="body-section"
                >
                    <Experience />
                </Element>
                {/* <Recommendations /> */}
                <Element
                    id="contact-me"
                    name="contact-me"
                    className="body-section"
                >
                    <ContactMe />
                </Element>
                <Footer />
            </Fragment>
        );
    }
}

export default App;
