import React, { Component } from 'react';
import Social from '../components/Social';
import Skills from './Skills';

class About extends Component {
    render() {
        return (
            <div className="condiv home about">
                <div>
                    <h1>I'm Hesam Alavi</h1>
                    <h3>
                        A passionate <u>Web Developer</u>
                    </h3>
                    <br></br>
                    <p>
                        I am fascinated by computer science and programming.
                        Can’t get enough of it. I’m an aspiring frontend
                        developer. Would love to work with a team of
                        tech-passionate people whom I could learn from. Can’t
                        wait for that day to come. Currently I am
                        enthusiastically learning programming and web
                        development (Javascript, React, HTML, CSS, CSS Grid,
                        SASS) so I could get into programming full-time.
                        Computer science fundamentals excite me to the point
                        that I find it hard to fall sleep if I am learning
                        concepts close to bed time <span role="img">😁</span>. I
                        work 3 days a week and learn the rest of the time. I
                        love programming as you get to build things and of
                        course break them :). I find programming like meditating
                        with the eyes open as I go in a zone and feel present
                        while doing so. I am learning how to take breaks in
                        between, otherwise I find myself staring at the screen
                        for more than 8 hours straight. Coming from neuroscience
                        background with a focus on learning, I am aware that
                        learning happens when we rest well ;) I am a
                        results-driven professional with over 7 years of
                        experience as a business development and sales manager
                        in B2B, B2C and retail. Hands-on experience working in
                        fast-paced environments with changing priorities, and
                        designing and implementing data-driven sales strategies.
                        Consistently delivered profitable solutions to drive
                        sales, attract and retain customers and build a solid
                        relationship with stakeholders. Experience in training
                        and managing staff. Stellar organisational and planning
                        skills as demonstrated in successfully launching two
                        startups. I love connecting with people from all walks
                        of life, and I see all as my teacher as we all have a
                        unique point of view. I have lived and studied in 5
                        different countries and am very fund of different
                        cultures. I love the outdoors and getting reconnecting
                        with nature. I also like learning new things and believe
                        that life without growth comes to an end too.
                    </p>
                </div>
                <Skills />
            </div>
        );
    }
}

export default About;
