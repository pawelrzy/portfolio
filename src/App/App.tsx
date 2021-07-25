import React from 'react';
import { Element } from 'react-scroll';

import './App.scss';

import Splash from './Splash/Splash';
import Knowledge from './Knowledge/Knowledge';
import Projects from './Projects/Projects';
import Experience from './Experiences/Experiences';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import { NavBar } from './NavBar/NavBar';
import { AboutMe } from './AboutMe/AboutMe';

export const App = () => {
    const [hasScrolled, setHasScrolled] = React.useState(false);

    const handleScroll = React.useCallback(() => {
        if (window.scrollY > 0 && !hasScrolled) {
            setHasScrolled(true);
        } else if (window.scrollY === 0 && hasScrolled) {
            setHasScrolled(false);
        }
    }, [hasScrolled]);

    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <>
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
            <Element
                id="experience"
                name="experience"
                className="body-section"
            >
                <Experience />
            </Element>
            <Element id="projects" name="projects" className="body-section">
                <Projects />
            </Element>
            <Element
                id="contact-me"
                name="contact-me"
                className="body-section"
            >
                <ContactMe />
            </Element>
            <Footer />
        </>
    );
}
