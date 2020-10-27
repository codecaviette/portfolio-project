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
                                    <div className="card1-image"></div>
                                    <div className="card-text">
                                        <span className="date"> 4 days ago </span> 
                                        <h2>Login App</h2>
                                        <p>This dynamic React app displays the UI for a login form, using reactstrap and social media logins.  </p>
                                    </div>
                                    <div className="class-stats"></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3" id="project-box">    
                                <div className="card">
                                    <div className="card2-image"></div>
                                    <div className="card-text">
                                        <span className="date"> 4 days ago </span> 
                                        <h2>Nucampsite Project</h2>
                                        <p>Explore Nucamp Bootcamp's campsites, leave a review, and submit feedback! </p>
                                    </div>
                                    <div className="class-stats"></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3" id="project-box">    
                                <div className="card">
                                    <div className="card3-image"></div>
                                    <div className="card-text">
                                        <span className="date"> 4 days ago </span> 
                                        <h2>Grocery List</h2>
                                        <p> Dynamic React app that creates an interactive grocery list </p>
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