// This is the contact form

import React, { Component } from 'react'

export class ContactForm extends Component {
    render() {
        return (
            <div>
                <section id="contact-screen">
                    <div className="col-12">
                        <h2 id="sectionTitle"> CONTACT </h2>
                    </div>
                    <div className= "container-fluid" id="contact-section">
                        <div className="row row-content">
                            <div className="col-12">
                                <h2 id="sectionTitle"> Get in touch </h2>
                                <hr />
                            </div>
                            <div className="col-md-10">
                                <form> 
                                    <div className="form-group row">
                                        <label for="firstName" className="col-12 col-form-label"> First name </label> 
                                        <div className="col">
                                            <input type="text" className="form-control input-lg" id="firstName" name="firstName" placeholder="First Name" />
                                        </div>
                                    </div>
                
                                    <div className="form-group row">
                                        <label for="lastName" className="col-12 col-form-label"> Last name </label>
                                        <div className="col"> 
                                            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                                        </div>
                                    </div>
                
                                    <div className="form-group row">
                                        <label for="email" className="col-12 col-form-label"> Email </label>
                                        <div className="col">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                        </div>
                                    </div>
                
                                    <div className="form-group row">
                                        <label for="feedback" className="col-12 col-form-label"> Comments  </label>                        
                                        <div className="col">
                                                <textarea className="form-control" id="feedback" name="feedback" rows="8"> </textarea>
                                        </div>                    
                                    </div>
                                    <div className="form-group row">
                                        <div className="offset-md-10">
                                            <button type="submit" className="btn btn-info"> Submit </button>
                                        </div> 
                                    </div>  
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ContactForm


