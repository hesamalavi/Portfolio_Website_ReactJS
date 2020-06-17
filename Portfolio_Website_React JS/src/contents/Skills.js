import React, { Component } from 'react';
import Social from '../components/Social';
import { Icon, InlineIcon } from '@iconify/react';
import gatsbyIcon from '@iconify/icons-logos/gatsby';
import javascriptIcon from '@iconify/icons-logos/javascript';
import graphqlIcon from '@iconify/icons-logos/graphql';

import html5 from '@iconify/icons-logos/html-5';

import css3 from '@iconify/icons-logos/css-3';

import reactIcon from '@iconify/icons-logos/react';

import Styles from './Skills.css';

// class Skills extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             myskills: [
//                 '',
//                 'CSS',
//                 'CSS GRID',
//                 'FLEXBOX',
//                 'JS',
//                 'REACT JS',
//                 'GATSBY',
//                 'GRAPHQL',
//             ],
//         };
//     }

//     render() {
//         return (
//             <div className="condiv skills">
//                 <h1 className="subtopic">
//                     Here is a list of technologies I have worked with
//                 </h1>
//                 <ul>
//                     {this.state.myskills.map((value) => {
//                         return <li>{value}</li>;
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }

class Skills extends Component {
    render() {
        return (
            // <AwesomeSlider cssModule={AwesomeSliderStyles}>
            <div className="condiv home skills-div">
                <h1>List of tech I use</h1>
                <div className="skills">
                    <Icon icon={reactIcon} className="single-skill" />
                    <Icon icon={gatsbyIcon} className="single-skill" />
                    <Icon icon={javascriptIcon} className="single-skill" />
                    <Icon icon={graphqlIcon} className="single-skill" />
                    <Icon icon={html5} className="single-skill" />
                    <Icon icon={css3} className="single-skill" />
                </div>
            </div>
        );
    }
}

export default Skills;
