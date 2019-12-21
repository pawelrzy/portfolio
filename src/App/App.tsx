import React, { Component, Fragment } from 'react';
import { Element } from 'react-scroll';

import Splash from './Splash/Splash';
import AboutMe from './AboutMe/AboutMe';

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
        return (
            <Fragment>
                <Element id="splash" name="splash">
                    <Splash />
                </Element>
                <Element id="about-me" name="about-me">
                    <AboutMe />
                </Element>
            </Fragment>
        );
    }
}

export default App;
