import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavItemActive: '',
        };
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document
                .getElementById(this.state.NavItemActive)
                .classList.remove('active');
        }
        this.setState({ NavItemActive: x }, () => {
            document
                .getElementById(this.state.NavItemActive)
                .classList.add('active');
        });
    };
    render() {
        return (
            <div className="navbar">
                <nav>
                    <ul>
                        <Navitem
                            item="Home"
                            tolink="/"
                            activec={this.activeitem}
                        ></Navitem>
                        <Navitem
                            item="Me"
                            tolink="/about"
                            activec={this.activeitem}
                        ></Navitem>
                        <Navitem
                            item="Work"
                            tolink="/work"
                            activec={this.activeitem}
                        ></Navitem>
                        <Navitem
                            item="Education"
                            tolink="/education"
                            activec={this.activeitem}
                        ></Navitem>

                        <Navitem
                            item="Contact"
                            tolink="/contact"
                            activec={this.activeitem}
                        ></Navitem>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
