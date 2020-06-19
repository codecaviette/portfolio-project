// This is the HEADING/LANDING SCREEN


import React, { Component } from 'react'

export class LandingScreen extends Component {
    render() {
        return (
            <div>
                <section>
                    <div id="landingScreen" className="container-fluid">   {/*This is the landing area, the overarching flexbox */}
                        <div id="landingScreen-contentWrapper">   {/* This is the content div, which will allow us to move all content within flexbox as one */}
                            <h1 id="jcName"> JENNY CHOU</h1>
                            <p id="jcDescription"> web developer <br/>
                                with the <br/>
                                customer in mind 
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default LandingScreen




