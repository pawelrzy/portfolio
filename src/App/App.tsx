import React, { FC } from 'react';
import './App.scss';

import Splash from './Splash/Splash';
import Knowledge from './Knowledge/Knowledge';
// import Experiences from './Experiences/Experiences';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';

const App: FC = () => {
    return (
        <div className="App">
            <Splash />
            <Knowledge />
            {/* <Experiences /> */}
            <ContactMe /> 
            <Footer />
           

        </div>
    );
}

export default App;
