import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
                <section id="projectsPage-screen">      {/* This id allows for quick navigation to this section from Navbar */}
                    <div className="container-fluid" id="projects-section">       {/* id's (like this one) or class's can be used to define design specs in CSS file, and "call" it in JS files  */}
                        <div className="row">
                            <div className="col-md-6 col-lg-3" id="project-box">
                                <div className="card">
                                    <div className="card-image"></div>
                                    <div className="card-text">
                                        <span className="date"> 4 days ago </span> 
                                        <h2>Project One</h2>
                                        <p>Lorem epsum... </p>
                                    </div>
                                    <div className="class-stats"></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3" id="project-box">    
                                <div className="card">
                                    <div className="card-image"></div>
                                    <div className="card-text">
                                        <span className="date"> 4 days ago </span> 
                                        <h2>Project One</h2>
                                        <p>Lorem epsum... </p>
                                    </div>
                                    <div className="class-stats"></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3" id="project-box">    
                                <div className="card">
                                    <div className="card-image"></div>
                                    <div className="card-text">
                                        <span className="date"> 4 days ago </span> 
                                        <h2>Project One</h2>
                                        <p>Lorem epsum... </p>
                                    </div>
                                    <div className="class-stats"></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>    
                </div>
        )
    }
}

export default Projects;