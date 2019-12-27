import React, { Component, createRef } from 'react';
import './withAnimation.scss';

const withAnimation = (WrappedComponent: any) => { //TODO: Fix
    return class Animated extends Component {
        node = createRef();
        state = {
            element: document.getElementById('about-me'),
            isVisible: false,
        }

        componentDidMount () {
            const element = this.node;
            this.setState({ element: element }, () => this.checkVisible());
            document.addEventListener('scroll', this.checkVisible);
        }

        componentWillUnmount () {
            document.removeEventListener('scroll', this.checkVisible); //TODO may cause error
        }

        checkVisible = () => {
            const bounding = this.state.element!.getBoundingClientRect();
            const inViewPort = bounding.top <= 600;
            if (this.state.element && inViewPort) {
                this.startFade();
            }
        }

        startFade = () => {
            document.removeEventListener('scroll', this.checkVisible);
            this.setState({ isVisible: true });
            this.state.element!.classList.add('animated', 'fadeIn');
        }

        render () {
            const { isVisible } = this.state;
            return (
                <div className="animated-container" ref={(n: any) => this.node = n}>
                    {isVisible && <WrappedComponent  />}
                </div>
            );
        }
    };
}

export default withAnimation;