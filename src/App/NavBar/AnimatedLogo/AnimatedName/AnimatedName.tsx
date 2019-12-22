
import React, { Component } from 'react';
import './AnimatedName.scss';

const POSITIONS = ['Full Stack Developer', 'Machine Learning Enthusiast'];

class AnimatedName extends Component {
    state = {
        position: 0,
        timer: 0,
    };
    
    componentDidMount() {
        const timer = setInterval(this.togglePosition, 3000);
        this.setState({ timer: timer });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    togglePosition = () => {
        const position = this.state.position ? 0 : 1;
        this.setState({ position: position });
        const element =  document.querySelector('.position-text');
        if (element) {
            element.classList.add( position ? 'fadeIn' : 'flash');
            element.classList.remove( position ? 'flash' : 'fadeIn');
        }
    }

    render () {
        const { position } = this.state;

        return (
            <div>
                <div className="name-text">
                    Michael Vytlingam
                </div>
                <div className="position-text animated">
                    {POSITIONS[position]}
                </div>
            </div>
        );
    }
}

export default AnimatedName;