import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import Social from '../components/Social';

class Education extends Component {
    render() {
        return (
            <div className="condiv education home">
                <Widecard
                    title="Master of Neuroscience "
                    where="The University of Queensland"
                    from="2013"
                    to="2015"
                />
                <Widecard
                    title="Bachelor with Honours in Sports Science"
                    where="University of Otago"
                    from="2009"
                    to="2012"
                />
            </div>
        );
    }
}

export default Education;
