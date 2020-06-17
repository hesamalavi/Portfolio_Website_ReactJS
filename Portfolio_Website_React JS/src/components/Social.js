import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div className="social">
                <a
                    className="social-single"
                    href="https://www.linkedin.com/in/hesam-alavi-59b61987/"
                    target="_blank"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                    className="social-single"
                    href="https://github.com/hesamalavi"
                    target="_blank"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    className="social-single"
                    href="https://stackoverflow.com/users/12542350/hesam-alavi"
                    target="_blank"
                >
                    <i className="fab fa-stack-overflow"></i>
                </a>
            </div>
        );
    }
}

export default Social;
