import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Summary from "./components/Summary/Summary";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import { useState, useEffect, useRef } from "react";

function App() {

  const [ projectsClick, setProjectsClick ] = useState(false);
  const [ whoIAmClick, setWhoIAmClick ] = useState(false);
  const [ contactMeClick, setContactMeClick ] = useState(false);

  const projectsRef = useRef<HTMLDivElement>(null);
  const whoIAmRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = () => {
    setProjectsClick(true);
  }

  const handleWhoIAmClick = () => {
    setWhoIAmClick(true);
  }

  const handleContactMeClick = () => {
    setContactMeClick(true);
  }  
  
  useEffect(() => {
    if (projectsClick && projectsRef.current) {
      const elementRect = projectsRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offset = 85;
  
      window.scroll({
        top: absoluteElementTop - offset,
        behavior: "smooth"
      });
      setProjectsClick(false);
    }
  }, [projectsClick, projectsRef]);

  useEffect(() => {
    if (contactMeClick && contactMeRef.current) {
      const elementRect = contactMeRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offset = 85;
  
      window.scroll({
        top: absoluteElementTop - offset,
        behavior: "smooth"
      });
      setContactMeClick(false);
    }
  }, [contactMeClick, contactMeRef]);

  useEffect(() => {
    if (whoIAmClick && projectsRef.current) {
      const elementRect = projectsRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offset = 610;
  
      window.scroll({
        top: absoluteElementTop - offset,
        behavior: "smooth"
      });
      setWhoIAmClick(false);
    }
  }, [whoIAmClick, whoIAmRef]);
  
  
  

  return (
    <div className= "App">
      <NavBar handleProjectClick={handleProjectClick} handleContactMeClick={handleContactMeClick} handleWhoIAmClick={handleWhoIAmClick}/>
      <section>
        <Summary/>
      </section>

      <section ref={whoIAmRef}>
        <Carousel/>
      </section>

      <section ref={projectsRef}>
        <Projects/>
      </section>

      <section ref={contactMeRef}>
        <ContactMe/>
      </section>

      <Footer/>
      
    </div>
  );
}

export default App;
