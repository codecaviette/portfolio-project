// This is the Navbar

import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
                <div className="container-fluid">    
                    <a className="navbar-brand" href="#" id="contactTitle">JC</a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item "><a className="nav-link" href="#projects-screen"> projects <span className="sr-only">(current)</span></a></li>
                            <li className="nav-item "><a className="nav-link" href="#skills-screen"> skills </a></li>
                            <li className="nav-item "><a className="nav-link" href="#about-screen"> about </a></li>
                            <li className="nav-item "><a className="nav-link" href="#contact-screen"> contact </a></li>
                        </ul>
                    </div>
                </div>
                </nav>     
            </div>
        )
    }
}

export default Navbar



 
