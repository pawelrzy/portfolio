import React, { Component, createRef } from 'react';
import './withAnimation.scss';

type ComponentType = React.ComponentClass | React.StatelessComponent;

const withAnimation = (WrappedComponent: ComponentType) => {
    return class Animated extends Component {
        node = createRef();
        state = {
            element: document.getElementById('about-me'),
            isVisible: false
        };

        componentDidMount() {
            const element = this.node;
            this.setState({ element: element }, () => this.checkVisible());
            document.addEventListener('scroll', this.checkVisible);
        }

        componentWillUnmount() {
            document.removeEventListener('scroll', this.checkVisible);
        }

        checkVisible = () => {
            const bounding = this.state.element!.getBoundingClientRect();
            const inViewPort = bounding.top <= 600;
            if (this.state.element && inViewPort) {
                this.startFade();
            }
        };

        startFade = () => {
            document.removeEventListener('scroll', this.checkVisible);
            this.setState({ isVisible: true });
            this.state.element!.classList.add('animated', 'fadeIn');
        };

        render() {
            const { isVisible } = this.state;
            return (
                <div
                    className="animated-container"
                    ref={(n: any) => (this.node = n)}
                >
                    {isVisible && <WrappedComponent />}
                </div>
            );
        }
    };
};

export default withAnimation;
