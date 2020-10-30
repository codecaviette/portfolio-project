// This is the Skills section - can add state and map through 


import React, { Component } from 'react'

export class Skills extends Component {
    render() {
        return (
            <div>
                <section id="skills-screen">      {/* This id allows for quick navigation to this section from Navbar */}
                    <div className="col-12">
                        <h2 id="sectionTitle"> SKILLS </h2>
                    </div>
                    <div className="container-fluid" >       {/* id's (like this one) or class's can be used to define design specs in CSS file, and "call" it in JS files  */}
                        <div className="row" id="skills-section">
                            <div className="col" id="skill-box">
                                <i className="fab fa-css3-alt skill-icon"></i>
                                <h3> CSS </h3>
                            </div>
                            <div className="col" id="skill-box">
                                <i className="fab fa-html5 skill-icon"></i>
                                <h3> HTML </h3>
                            </div>
                            <div className="col" id="skill-box">
                                <i className="fab fa-js-square skill-icon"></i>
                                <h3> JavaScript </h3>
                            </div>
                            <div className="col" id="skill-box">
                                <i className="fab fa-bootstrap skill-icon"></i>
                                <h3> Bootstrap </h3>
                            </div>
                            <div className="col" id="skill-box">
                                <i className="fab fa-react skill-icon"></i>
                                <h3> React </h3>
                            </div>
                            <div className="col" id="skill-box">
                                <i className="fab fa-node-js skill-icon"></i>
                                <h3> NodeJS </h3>
                            </div>  
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Skills
