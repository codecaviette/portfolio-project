// This is the Skills section - can add state and map through 


import React, { Component } from 'react'

export class Skills extends Component {
    render() {
        return (
            <div>
                <section id="skills-screen">      {/* This id allows for quick navigation to this section from Navbar */}
                    <div className="container-fluid" id="skills-section">       {/* id's (like this one) or class's can be used to define design specs in CSS file, and "call" it in JS files  */}
                        <div className="row">
                            <div className="col-md-6 col-lg-3" id="skill-box">
                                <i className="fab fa-css3-alt project-icon"></i>
                                <h3> CSS </h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sunt ratione, itaque ea quia provident! Quia commodi ducimus quas saepe voluptatum cum, non facere est.</p>
                            </div>
                            <div className="col-md-6 col-lg-3" id="skill-box">
                                <i className="fab fa-html5 project-icon"></i>
                                <h3> HTML </h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sunt ratione, itaque ea quia provident! Quia commodi ducimus quas saepe voluptatum cum, non facere est.</p>
                            </div>
                            <div className="col-md-6 col-lg-3" id="skill-box">
                                <i className="fab fa-js-square project-icon"></i>
                                <h3> JavaScript </h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sunt ratione, itaque ea quia provident! Quia commodi ducimus quas saepe voluptatum cum, non facere est.</p>
                            </div>
                            <div className="col-md-6 col-lg-3" id="skill-box">
                                <i className="fab fa-bootstrap project-icon"></i>
                                <h3> Bootstrap </h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sunt ratione, itaque ea quia provident! Quia commodi ducimus quas saepe voluptatum cum, non facere est.</p>
                            </div>
                            <div className="col-md-6 col-lg-3" id="skill-box">
                                <i className="fab fa-react project-icon"></i>
                                <h3> React </h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sunt ratione, itaque ea quia provident! Quia commodi ducimus quas saepe voluptatum cum, non facere est.</p>
                            </div>
                            <div className="col-md-6 col-lg-3" id="skill-box">
                                <i className="fab fa-node-js project-icon"></i>
                                <h3> NodeJS </h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sunt ratione, itaque ea quia provident! Quia commodi ducimus quas saepe voluptatum cum, non facere est.</p>
                            </div>  
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Skills
