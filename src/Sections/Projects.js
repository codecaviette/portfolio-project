import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div>
        <section id='projects-screen'>
          {' '}
          {/* This id allows for quick navigation to this section from Navbar */}
          <div id='projectAnchor'></div>{' '}
          {/* Use to anchor AOS animations below */}
          <div>
            <h2 id='sectionTitle'> PROJECTS </h2>
          </div>
          <div id='projects-section'>
            {' '}
            {/* id's (like this one) or class's can be used to define design specs in CSS file, and "call" it in JS files  */}
            <div
              className='project-box'
              data-aos='fade-right'
              data-aos-anchor='#projectAnchor'
              data-aos-anchor-placement='bottom-center'
            >
              <div className='banner-img1'></div>
              <h1 className='project-name'>Data Consulting Group Website
</h1>
              <p className='project-description'>
              Redesigned and rebuilt company website, while maintaining SEO and reducing company costs. Used JavaScript, React, React Router, CSS, Bootstrap, and HTML.
              </p>
              <a
                className='btn btn-info proj-btn'
                href='https://github.com/codecaviette/login-app'
                role='button'
              >
                <i className='fab fa-github'></i> View on GitHub
              </a>
            </div>
            <div
              className='project-box'
              data-aos='fade-down'
              data-aos-anchor='#projectAnchor'
              data-aos-anchor-placement='bottom-center'
            >
              <div className='banner-img4'></div>
              <h1 className='project-name'>Motivational Quotes</h1>
              <p className='project-description'>
                {' '}
                This dynamic JavaScript app is a Google Chrome extension that
                displays a new motivational quote every time you open a new
                browser tab.
              </p>
              <a
                className='btn btn-info proj-btn'
                href='https://github.com/codecaviette/motivational-quote-generator.git'
                role='button'
              >
                <i className='fab fa-github'></i> View on GitHub
              </a>
            </div>
            <div
              className='project-box'
              data-aos='fade-left'
              data-aos-anchor='#projectAnchor'
              data-aos-anchor-placement='bottom-center'
            >
              <div className='banner-img-jiaozigroup'></div>
              <h1 className='project-name'>Venture Capital Fund Website</h1>
              <p className='project-description'>
                {' '}
                Responsive full-stack application with animations and form submission capabilities. Built with React, Javascript, NodeJS, MongDB Atlas.
              </p>
              <a
                className='btn btn-info proj-btn'
                href='https://github.com/codecaviette/grocery-list'
                role='button'
              >
                <i className='fab fa-github'></i> View on GitHub
              </a>
            </div>
            <div
              className='project-box'
              data-aos='fade-up'
              data-aos-anchor='#projectAnchor'
              data-aos-anchor-placement='bottom-center'
            >
              <div className='banner-img2'></div>
              <h1 className='project-name'>Nucampsite Project</h1>
              <p className='project-description'>
                Explore Nucamp Bootcamp's campsites, leave a rating, and submit
                your contact info!
              </p>
              <a
                className='btn btn-info proj-btn'
                href='https://github.com/codecaviette/nucampsite'
                role='button'
              >
                <i className='fab fa-github'></i> View on GitHub
              </a>
            </div>
            <div
              className='project-box'
              data-aos='fade-left'
              data-aos-anchor='#projectAnchor'
              data-aos-anchor-placement='bottom-center'
            >
              <div className='banner-img3'></div>
              <h1 className='project-name'>Grocery List</h1>
              <p className='project-description'>
                {' '}
                Responsive React app that creates an interactive grocery list.
                Add, remove and cross out items!
              </p>
              <a
                className='btn btn-info proj-btn'
                href='https://github.com/codecaviette/grocery-list'
                role='button'
              >
                <i className='fab fa-github'></i> View on GitHub
              </a>
            </div>
 
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
