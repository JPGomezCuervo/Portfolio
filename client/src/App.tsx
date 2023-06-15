import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Summary from './components/Summary/Summary';
import WhoIAm from './components/WhoIAm/WhoIAm';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';


function App() {
  return (
    <div className= "App">
      <NavBar/>
      <Summary/>
      <Carousel/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      
    </div>
  );
}

export default App;
