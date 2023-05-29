// This will serve as the main component of application.
import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import Project from './components/project';
import Footer from './components/footer';
import Contact from './components/contact';
import About from './components/about';
import Resume from './components/resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="content">
        <About />
        <Project />
        <Contact />
        <Resume />
      </div>
      <Footer />
    </div>
  );
}

export default App;
