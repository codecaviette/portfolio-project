// This is the Navbar

import React, { Component } from 'react'
import image from '../jc-logo-lightpink.png'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
                <div className="container-fluid">    
                    <a className="navbar-brand" href="#landingScreen" id="contactTitle" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000"><img src={image} alt="" /></a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" 
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item "><a className="nav-link" href="#projects-screen"> PROJECTS <span className="sr-only">(current)</span></a></li>
                            <li className="nav-item "><a className="nav-link" href="#skills-screen"> SKILLS </a></li>
                            <li className="nav-item "><a className="nav-link" href="#about-screen"> ABOUT </a></li>
                            <li className="nav-item "><a className="nav-link" href="#contact-screen"> CONTACT </a></li>
                        </ul>
                    </div>
                </div>
                </nav>     
            </div>
        )
    }
}

export default Navbar



 
