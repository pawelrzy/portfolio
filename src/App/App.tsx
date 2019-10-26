import React, { FC } from 'react';
import './App.css';

import NavBar from './NavBar/NavBar';
import IntroHero from './IntroHero/IntroHero';
import Knowledge from './Knowledge/Knowledge';

const App: FC = () => {
    return (
        <div className="App">
            <NavBar />
            <IntroHero />
            <Knowledge />
            {/* <Experiences />
            <ContactMe /> 
            <Footer />
            */}

        </div>
    );
}

export default App;
