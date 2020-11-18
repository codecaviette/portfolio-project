// This is the main component that combines all Components to be displayed

import React from 'react';
import AOS from 'aos';
import './App.css';
import Navbar from './Sections/Navbar';
import LandingScreen from './Sections/LandingScreen';
import AboutMe from './Sections/AboutMe';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';
import ContactForm from './Sections/ContactForm';
import Footer from './Sections/Footer';
import Contact from './Sections/Contact';
import Space from './Sections/Space';
import DownArrow from './Sections/DownArrow';
import { Spring } from 'react-spring/renderprops';

//internal import
import 'aos/dist/aos.css';

//Initialize AOS
AOS.init({
  duration: 1500,
});
class App extends React.Component {

  render(){
    return (
      <React.Fragment>

        <Navbar />
        <LandingScreen />
        <DownArrow />
        <Projects />
        <Skills />
        <Space />
        <AboutMe />
        <Contact />
        <Space />

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
