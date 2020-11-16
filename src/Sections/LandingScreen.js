// This is the HEADING/LANDING SCREEN


import React, { Component } from 'react'

export class LandingScreen extends Component {
    render() {
        return (
            <div>
                <section>
                    <div id="landingScreen">   {/*This is the landing area, the overarching flexbox */}
                        <div id="landingScreen-contentWrapper" data-aos="fade-down">   {/* This is the content div, which will allow us to move all content within flexbox as one */}
                            <br/>
                            <br/>
                            <p id="jcDescription"> customer-centric <br/>
                            web developer</p>
                            <h1 id="jcName"> JENNY CHOU</h1>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default LandingScreen




