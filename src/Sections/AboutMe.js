// This is the About Me section

import React, { Component } from 'react'

class AboutMe extends Component {
    render() {
        return (
            <div>
                <section id="about-screen">
                    <div className="container-fluid" id="about-section">
                        <div className="row" >
                            <div className="col-sm-6" id="about-text" >
                                <h2> Hi, I'm Jenny. </h2>
                                <p> notes about me. me me me. notes about me. me me me.notes about me. me me me. notes about me.e me me.notes about me. me me me. notes about me.e me me.notes about me. me me me. notes about me. me me me.  </p>
                            </div> 
                            <div className="col" id="about-image">
                                <img src="img/jmc1.png" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutMe


