import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Summary from './components/Summary/Summary';
import WhoIAm from './components/WhoIAm/WhoIAm';
import ContactMe from './components/ContactMe/ContactMe';


function App() {
  return (
    <div className= "App">
      <NavBar/>
      <Summary/>
      <WhoIAm/>
      <ContactMe/>
      
    </div>
  );
}

export default App;
