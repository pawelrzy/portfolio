import React, { FC } from 'react';
import './Experience.scss';

const Experiences: FC = () => {
    const jobs = [
        {
            company: "MVGD",
            position: "Freelance Graphic Designer",
            date: "December 2015 - September 2018",
            body: `
                I created logos, banners, documents, and websites for 
                various clients, including the University of Toronto 
                Kendo Club, LSPDFR.com, and Rubiar.
            `
        },
        {
            company: "Snyder Construction",
            position: "Assistant Project Manager",
            date: "January 2018 - April 2018",
            body: `
                I was involved in all aspects of Snyder's construction
                projects, from price estimation to closeout. I drew up 
                project schedules, defined scopes and ensured they were 
                adhered to through frequent meetings.
                <br/>
                <br/>
                <b>Taught Me:</b> the importance of getting a job done quickly 
                and effectively, how to drive massive pickup trucks. 🚚
            `
        },
        {
            company: "ENGINEERING.com",
            position: "Software Engineering Intern",
            date: "September 2018 - December 2018",
            body: `
                I was working on ENGINEERING.com's online collaboration platform, ProjectBoard. 
                I designed and developed the new home page for the platform as well as the user 
                profile pages. I also improved the analytics dashboard, incorporating new data 
                visualizations that proved very useful for future business decisions.
                <br/>
                <br/>
                <b>Tech:</b> Vue, Vuex, Sass, Fabric.js, Go, MySQL, TestCafe
            `
        },
        {
            company: "Grain Discovery",
            position: "Software Engineering Intern",
            date: "May 2019 - August 2019",
            body: `
                I worked on Grain Discovery's agricultural trading marketplace. 
                Introducing effective UI/UX was a challenge due to the wide demographics
                of users using the platform, from farmers to business traders. 
                However, introducing simplified user flows, and quick access to important 
                information proved to be effective in user testing. Outside of front end, 
                I also created RESTful endpoints to handle user interaction, as well as 
                incorporated Bash scripts to streamline developer pipelines.
                <br/>
                <br/>
                <b>Tech:</b> React, Redux, Express, DeckGL, Webpack, Babel, 
                Hyperledger Fabric (TypeScript), Bash, Docker, Semantic UI, 
                Lottie, Figma, JEST, Enzyme
            `
        },
        {
            company: "University of Waterloo",
            position: "Machine Learning Researcher",
            date: "September 2019 - December 2019",
            body: `
                Took part in training real-time object detection model of 
                kitchen items to help a robot operate in its surroundings. 
                I can't tell you the specifics as we're still working on it, 
                but trust me, it's really cool.
                <br/>
                <br/>
                <b>Tech:</b> Darknet, YOLO, TensorFlow
            `
        },
    ]
    return (
        <section className="container experience columns">
            <div className="column">
                <h1 className="title is-3">Experience</h1>
            </div>
            <div className="column">
                { jobs.reverse().map((job, index) => (
                    <article key={index} className="message">
                        <div className="message-body">
                            <h1 className="title is-6"><b>{job.company} /</b> {job.position}</h1>
                            <p dangerouslySetInnerHTML={{__html: job.body}}></p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experiences;