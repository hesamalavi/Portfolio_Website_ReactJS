import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/hesam.jpg';
import Social from '../components/Social';
import Styles from '../';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>

                <ReactTypingEffect
                    className="typingeffect"
                    text={[
                        'Hello there',
                        'My name is Hesam',
                        'I am a web developer',
                    ]}
                    speed={100}
                    eraseDelay={700}
                />
                <Social />
            </div>
        );
    }
}

export default Home;
