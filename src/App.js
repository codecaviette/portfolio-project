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
