// This is the Contact Section, which holds the social media icons.

import React from 'react'

function Contact() {
    return (
        <div>
            <section id="contact-screen">
                    <div>
                        <h2 id="sectionTitle">CONTACT</h2>
                    </div>
                    <div className="text-center contact-section">
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/jmychou/"> <i className="fab fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-codepen" href="https://codepen.io/codecaviette"> <i className="fab fa-codepen"></i></a>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/codecaviette"> <i className="fab fa-github-square"></i></a>
    
                    </div>
            </section>
        </div>
    )
}

export default Contact;