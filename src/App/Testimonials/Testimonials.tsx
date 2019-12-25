import React, { Component } from 'react';

import Testimonial from './Testimonial/Testimonial';

const testimonials = [
        {
            name: "Renata Vaccaro",
            title: "CTO at engineering.com & Co-founder of ProjectBoard",
            photo: "https://media.licdn.com/dms/image/C5603AQGor7Qph0cFNQ/profile-displayphoto-shrink_100_100/0?e=1582761600&v=beta&t=CE4hVD61Y3xJlBP7lnOP-8CRVCbOgOgdy5GWHyWwkk0",
            body: `
                It is my absolute pleasure to write this recommendation for Michael.
                <br />
                <br />
                Michael and I worked together at Engineering.com for his Fall 2018 
                Co-op term. I very much enjoyed working with him and he quickly became
                 a valuable asset to the team.
                <br />
                <br />
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
            name: "Warren K.P. Lamb",
            title: "Blockchain Engineer at Grain Discovery",
            photo: "https://media.licdn.com/dms/image/C5603AQFC8EKKUZG2sg/profile-displayphoto-shrink_100_100/0?e=1582761600&v=beta&t=wQW6XFth8ELOwYsGnqjqOoqwuOL7i_SAmbHyhWgFjnc",
            body: `
                Michael was an exceptional employee during his time at Grain Discovery. 
                He performed all tasks effectively and consistently went above and beyond 
                in his execution. Michael needed very little management to excel in his 
                position here and I would highly recommend him to anyone looking for a 
                passionate, driven and skilled developer.
            `
        },
        {
            name: "Patrick McCormack",
            title: "Event Producer at FITC",
            photo: "https://media.licdn.com/dms/image/C5603AQHzGbkMZ-b_Zg/profile-displayphoto-shrink_100_100/0?e=1582761600&v=beta&t=-hDlBYZ4F5BTra4XVG3NsHPanvAquy3LtHH-pqPv2zw",
            body: `
                Friendly, professional, and comfortable under pressure - Michael 
                was an exemplary worker in every way. He's welcome to work with 
                me anytime!
            `
        },
    ];

class Testimonials extends Component {
    state = {
        index: 0,
        timer: 0,
    };
    
    componentDidMount() {
        const timer = setInterval(this.togglePosition, 10000);
        this.setState({ timer: timer });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    togglePosition = () => {
        const index = this.state.index < testimonials.length - 1 ? this.state.index + 1: 0;
        console.log(index);
        const element =  document.querySelector('.testimonial');
        console.log(element);
        if (element) {
            element.classList.remove('fadeIn');
            setTimeout(() => {
                this.setState({ index: index });
                element.classList.add('fadeIn');
            }, 100);
        }
    }

    render () {
        const { index } = this.state;
        return (
            <section className="container testimonials">
                <h1 className="title has-text-centered is-3">Testimonials</h1>
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <Testimonial testimonial={testimonials[index]} />
                        </div>
                    </div>
            </section>    
        );
    }
}

export default Testimonials;
