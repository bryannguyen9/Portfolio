// This will serve as the main component of application.
import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import Project from './components/project';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Project />
      {/* Add the sections and their content here */}
      <Footer />
    </div>
  );
}

export default App;
