import React, { Component, Fragment } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

class Slider extends Component {
    render() {
        return (
            <AwesomeSlider animation="foldOutAnimation">
                <div data-src="../img/hesam.jpg" />
                <div data-src="../img/hesam.jpg" />
                <div data-src="../img/hesam.jpg" />
            </AwesomeSlider>
        );
    }
}

export default Slider;
