// This is the Down Arrow component that scrolls from Landing page to next section

import React, { Component } from 'react'

class DownArrow extends Component {
    render() {
        return (
            <div className="arrow-section">
                <a className="btn btn-outline-info" href="#projects-screen" role="button">
                    <i class="fas fa-chevron-down"></i>
                </a>
            </div>
        )
    }
}

export default DownArrow