// This is the Skills section - can add state and map through 


import React, { Component } from 'react'

export class Skills extends Component {
    render() {
        return (
            <div>
                <section id="skills-screen">      {/* This id allows for quick navigation to this section from Navbar */}
                    <div>
                        <h2 id="sectionTitle"> SKILLS </h2>
                    </div>
                    <div>       {/* id's (like this one) or class's can be used to define design specs in CSS file, and "call" it in JS files  */}
                        <div id="skills-section">
                            <div id="skill-box">
                                <i className="fab fa-js-square skill-icon"></i>
                                <h4> JavaScript </h4>
                            </div>
                            <div id="skill-box">
                                <i className="fab fa-css3-alt skill-icon"></i>
                                <h4> CSS </h4>
                            </div>
                            <div id="skill-box">
                                <i className="fab fa-html5 skill-icon"></i>
                                <h4> HTML </h4>
                            </div>
                            <div  id="skill-box">
                                <i className="fab fa-bootstrap skill-icon"></i>
                                <h4> Bootstrap </h4>
                            </div>
                            <div id="skill-box">
                                <i className="fab fa-react skill-icon"></i>
                                <h4> React </h4>
                            </div>
                            <div  id="skill-box">
                                <i className="fab fa-node-js skill-icon"></i>
                                <h4> NodeJS </h4>
                            </div>  
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Skills
