import React, { Component, Fragment } from 'react';
import { Element } from 'react-scroll';
import './App.scss';

import NavBar from './NavBar/NavBar';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Splash from './Splash/Splash';
import AboutMe from './AboutMe/AboutMe';
import Knowledge from './Knowledge/Knowledge';
// import Experiences from './Experiences/Experiences';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';

interface AppState {
    hasScrolled: boolean
}

class App extends Component<{}, AppState> {
    state: AppState = {
        hasScrolled: false
    };

    componentDidMount () {
        document.addEventListener('scroll', this.checkScroll);
    }

    componentWillUnmount () {
        document.removeEventListener('scroll', this.checkScroll);
    }

    checkScroll = () => {
        if (window.scrollY > 0 && !this.state.hasScrolled) {
            this.setState({ hasScrolled: true });
        } else if (window.scrollY === 0 && this.state.hasScrolled) {
            this.setState({ hasScrolled: false });
        }
    }

    render () {
        const { hasScrolled } = this.state;

        return (
            <Fragment>
                <NavBar/>
                <div className="App">
                    <Element id='splash' name='splash'>
                        <Splash />
                    </Element>
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
                    { hasScrolled && <ScrollToTop /> }
                </div>
            </Fragment>
        );
    }
}

export default App;
