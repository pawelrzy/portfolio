import React, { Component } from 'react';

import withCenterFormatting from '../../HOCs/withCenterFormatting/withCenterFormatting';
import Recommendation from './Recommendation/Recommendation';

const recommendations = [
    {
        name: 'Renata Vaccaro',
        title: 'CTO at engineering.com & Co-founder of ProjectBoard',
        photo: 'renata.jpeg',
        body: `
                Michael was hired to work as a Developer and Community Manager. He not 
                only exceeded our expectations in these roles, but took on responsibilities 
                that were outside of his job description like social media promotion, creating 
                and managing email newsletters, marketing and copy writing. As a developer, Michael 
                was able to take on complex tasks and work independently to problem solve issues.
                We were also thrilled with how well Michael managed out community. Michael is an 
                excellent communicator, both written and verbal.
                <br />
                <br />
                One of the best qualities about Michael, is that you can ask him to do absolutely 
                any task or challenge and he does it with a smile and enthusiasm. He was a joy to 
                have in the office everyday and everyone on the team agrees that he'll be successful 
                in whatever it is he decides to do in life.
                <br />
                <br />
                Michael made a huge impact on me and is someone I would hire, even if I wasn’t hiring. 
                Any company would be very lucky to have him.
            `
    },
    {
        name: 'Warren K.P. Lamb',
        title: 'Blockchain Engineer at Grain Discovery',
        photo: 'warren.jpeg',
        body: `
                Michael was an exceptional employee during his time at Grain Discovery. 
                He performed all tasks effectively and consistently went above and beyond 
                in his execution. Michael needed very little management to excel in his 
                position here and I would highly recommend him to anyone looking for a 
                passionate, driven and skilled developer.
            `
    },
    {
        name: 'Patrick McCormack',
        title: 'Event Producer at FITC',
        photo: 'patrick.jpeg',
        body: `
                Friendly, professional, and comfortable under pressure - Michael 
                was an exemplary worker in every way. He's welcome to work with 
                me anytime!
            `
    }
];

class Recommendations extends Component {
    state = {
        index: 0,
        timer: 0
    };

    componentDidMount() {
        const timer = setInterval(this.togglePosition, 10000);
        this.setState({ timer: timer });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    togglePosition = () => {
        const index =
            this.state.index < recommendations.length - 1
                ? this.state.index + 1
                : 0;
        const element = document.querySelector('.testimonial');
        if (element) {
            element.classList.remove('fadeIn');
            setTimeout(() => {
                this.setState({ index: index });
                element.classList.add('fadeIn');
            }, 100);
        }
    };

    render() {
        const { index } = this.state;
        return <Recommendation recommendation={recommendations[index]} />;
    }
}

export default withCenterFormatting('Recommendations', Recommendations);
