import React, { Component } from 'react';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import Workcard from '../components/Workcard';
import Social from '../components/Social';
import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import profilepic from '../img/taskapp.png';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Icon, InlineIcon } from '@iconify/react';
import gatsbyIcon from '@iconify/icons-logos/gatsby';
import javascriptIcon from '@iconify/icons-logos/javascript';
import graphqlIcon from '@iconify/icons-logos/graphql';

import html5 from '@iconify/icons-logos/html-5';

import css3 from '@iconify/icons-logos/css-3';

import reactIcon from '@iconify/icons-logos/react';

import ScrollArrow from '../components/ScrollArrow';

import ReactPlayer from 'react-player';

import ProjectOne from './Videos/ProjectOne.mp4';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

export default class Work extends Component {
    render() {
        return (
            <div className="condiv workcard home">
                <ScrollArrow />
                <div>
                    <Workcard
                        title="Day Scheduler"
                        // src={profilepic}
                        alt="First Project"
                        description="This app allows you to create tasks based on hours. For example you may want to start working on a project at 8:00am"
                        githuburl="https://github.com/hesamalavi/TaskApp"
                        weburl="https://hesamalavi.github.io/TaskApp/"
                        tags={['Javascript', 'HTML', 'CSS']}
                        url={ProjectOne}
                    />
                </div>
                <div>
                    <Workcard
                        title="Project2"
                        // src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                        description="This app allows you to create tasks based on hours. For example you may want to start working on a project at 8:00am"
                        githuburl="https://github.com/"
                        weburl="https://github.com/"
                        tags={['s', 'd']}
                    />
                </div>
                <div>
                    <Workcard
                        title="Project3"
                        // src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                        description="This app allows you to create tasks based on hours. For example you may want to start working on a project at 8:00am"
                        githuburl="https://github.com/"
                        weburl="https://github.com/"
                        tags={['s', 'd']}
                    />
                </div>
                <div>
                    <Workcard
                        title="Project4"
                        // src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                        description="This app allows you to create tasks based on hours. For example you may want to start working on a project at 8:00am"
                        githuburl="https://github.com/"
                        weburl="https://github.com/"
                        tags={['s', 'd']}
                    />
                </div>
                <div>
                    <Workcard
                        title="Project5"
                        // src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                        description="This app allows you to create tasks based on hours. For example you may want to start working on a project at 8:00am"
                        githuburl="https://github.com/"
                        weburl="https://github.com/"
                        tags={['s', 'd']}
                    />
                </div>
            </div>
        );
    }
}
