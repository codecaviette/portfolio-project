// This is the Down Arrow component that scrolls from Landing page to next section

import React, { Component } from 'react'

class DownArrow extends Component {
    render() {
        return (
            <div className="arrow-section" >
                <a className="arrow-button bounce" href="#projects-screen" data-aos="fade-up" data-aos-delay="2000" data-aos-duration="2000" >
                    <i class="fas fa-chevron-down"></i>
                </a>
            </div>
        )
    }
}

export default DownArrow