import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Summary from './components/Summary/Summary';
import WhoIAm from './components/WhoIAm/WhoIAm';


function App() {
  return (
    <div className= "App">
      <NavBar/>
      <Summary/>
      <WhoIAm/>
      
    </div>
  );
}

export default App;
