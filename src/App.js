// This is the main component that combines all Components to be displayed

import React from 'react';
import './App.css';
import Navbar from './Sections/Navbar';
import LandingScreen from './Sections/LandingScreen';
import AboutMe from './Sections/AboutMe';
import Skills from './Sections/Skills';
import ContactForm from './Sections/ContactForm';
import Footer from './Sections/Footer';
import { Spring } from 'react-spring/renderprops';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>

        {/*Spring gives animation to React. Can have multiple Spring wrappers */}
        <Spring
          from={{ opacity: 0, marginLeft: 560}}
          to={{ opacity: 1, marginLeft: 0}}
          config={{duration: 1500, delay: 200}}  
        > 
        {
          (props) => (
            <div className="App" style={props}>
              <Navbar />
              <LandingScreen />
            </div>
          )
        }
        </Spring>

        <AboutMe />
        <Skills />
        <ContactForm />
        <Footer />

      </React.Fragment>
  );
}}

export default App;




// When trying to commit local repo to remote repo on GitHub, was getting following error message: 
    // error: failed to push some refs to 'https://github.com/codecaviette/personal-portfolio-react.git'
    // hint: Updates were rejected because the remote contains work that you do
    // hint: not have locally. This is usually caused by another repository pushing
    // hint: to the same ref. You may want to first integrate the remote changes
    // hint: (e.g., 'git pull ...') before pushing again.
// Fixed with "git push -f origin master" which combined all updates together, updating both remote and local repos. 
// I got this error message bc I had made changes directly in remote repo AND in local repo, and needed to resolve changes.
