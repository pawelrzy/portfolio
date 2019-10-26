import React, { FC } from 'react';
import './App.css';

import NavBar from './NavBar/NavBar';
import IntroHero from './IntroHero/IntroHero';
import Knowledge from './Knowledge/Knowledge';
// import Experiences from './Experiences/Experiences';
import ContactMe from './ContactMe/ContactMe';

const App: FC = () => {
    return (
        <div className="App">
            <NavBar />
            <IntroHero />
            <Knowledge />
            {/* <Experiences /> */}
            <ContactMe /> 
            {/* <Footer /> */}
           

        </div>
    );
}

export default App;
