import React, { FC } from 'react';
import { Element } from 'react-scroll';
import './App.scss';

import Splash from './Splash/Splash';
import AboutMe from './AboutMe/AboutMe';
import Knowledge from './Knowledge/Knowledge';
// import Experiences from './Experiences/Experiences';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';

const App: FC = () => {
    return (
        <div className="App">
            <Splash />
            <Element id='my-story' name='my-story'>
                <AboutMe />
            </Element>
            <Element id='expertise' name='expertise'>
                <Knowledge />
            </Element>
            <Element id='contact-me' name='contact-me'>
                <ContactMe />
            </Element>
            <Footer />
           

        </div>
    );
}

export default App;
