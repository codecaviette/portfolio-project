import React from 'react';
import './App.css';
import Navbar from './Sections/Navbar';
import LandingScreen from './Sections/LandingScreen';
import AboutMe from './Sections/AboutMe';
import Skills from './Sections/Skills';
import ContactForm from './Sections/ContactForm';
import Footer from './Sections/Footer';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <LandingScreen />
        <AboutMe />
        <Skills />
        <ContactForm />
        <Footer />
      </div>
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
