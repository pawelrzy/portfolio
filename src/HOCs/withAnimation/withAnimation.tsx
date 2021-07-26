import React, { Component, ComponentType, createRef } from 'react';
import './withAnimation.scss';

const withAnimation = <P extends {}>(WrappedComponent: ComponentType<P>) => {
    return class Animated extends Component<P> {
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
            return <div
                className="animated-container"
                ref={(n: any) => (this.node = n)}
            >
                {isVisible && <WrappedComponent {...this.props} />}
            </div>
        }
    };
};

export default withAnimation;
