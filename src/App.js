import React from 'react';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Qualification from './Components/Qualification/Qualification';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'
import Project from './Components/Project/Project';
function App() {
  return (
   
        <>
        <Header />

        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Project />
          <Qualification />
          <Contact />
          <Footer />
        </main>
        </>
        
        
    
  );
}

export default App;
 /*  <Services />*/