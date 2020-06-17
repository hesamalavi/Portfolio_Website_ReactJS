import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Styles from './Workcard.css';
import ReactPlayer from 'react-player';

// import videoOne from '../src/img/VideoOne.mp4';

class Workcard extends Component {
    render() {
        return (
            // <AwesomeSlider cssModule={AwesomeSliderStyles}>
            <div className="workcard">
                <div className="workcard-content">
                    <h1 className="workcard-title">{this.props.title}</h1>
                    <ReactPlayer
                        url={this.props.url}
                        playing={true}
                        controls={true}
                        loop={true}
                        volume={0}
                    />
                    <h3>Project Description</h3>
                    <p>{this.props.description}</p>

                    <ul>
                        {this.props.tags.map((tag) => (
                            <li key={tag}>#{tag}</li>
                        ))}
                    </ul>
                    <a href={this.props.githuburl}>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={this.props.weburl}>
                        <i className="fas fa-link"></i>
                    </a>
                </div>
            </div>
            // </AwesomeSlider>
        );
    }
}

export default Workcard;
