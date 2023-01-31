// This is the HEADING/LANDING SCREEN


import React, { Component } from 'react'

export class LandingScreen extends Component {
    render() {
        return (
            <div>
                <section>
                    <div id="landingScreen">   {/*This is the landing area, the overarching flexbox */}
                        <div id="landingScreen-contentWrapper" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="2000">   {/* This is the content div, which will allow us to move all content within flexbox as one */}
                            <br/>
                            <br/>
                            <h1 id="jcName"> Hi, I'm Jenny.</h1>
                            <p id="jcDescription">a customer-centric builder<br/>
                            and full stack web developer</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default LandingScreen




