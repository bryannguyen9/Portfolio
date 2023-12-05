import React from 'react';
import '../styles/tailwind.css';
import resumePDF from '../Assets/resume.pdf'

function Resume() {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-black text-white">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <hr className="w-3/4 border-t-2 border-gray-300 opacity-50 my-10" />
      <p className='text-xl font-semibold'>Download my resume:</p>
      <a href={resumePDF} download className="text-xl text-blue-500 font-bold">
        Download PDF
      </a>
      <h2 className="text-3xl font-bold mb-4 mt-10">My Developer Proficiencies and Skills:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <div className="zoom-card bg-gray-200 rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-bold mb-2">Front End</h3>
          <ul>
            <li>Javascript</li>
            <li>HTML/CSS/CSS Frameworks (i.e. Bootstrap, Cirrus, Tailwind)</li>
            <li>Progressive Web Applications (i.e. React)</li>
          </ul>
        </div>
        <div className="zoom-card bg-gray-200 rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-bold mb-2">Back End</h3>
          <ul>
            <li>Server-side Languages (i.e. C++, Java, Node.js)</li>
            <li>Web Frameworks (i.e. Express.JS)</li>
            <li>Databases (i.e. MySQL, NoSQL, MongoDB)</li>
            <li>API Development and Management (i.e. RESTful APIs)</li>
            <li>Authentication (i.e. OAuth)</li>
          </ul>
        </div>
        <div className="zoom-card bg-gray-200 rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-bold mb-2">Other</h3>
          <ul>
            <li>Version Control (i.e. Git, GitHub)</li>
            <li>Deployment (i.e. Heroku, GitHub Pages)</li>
            <li>Computer Science Fundamentals (i.e. Algorithms, Data Structures)</li>
          </ul>
        </div>
      </div>
      <hr className="w-3/4 border-t-2 border-gray-300 opacity-100 my-12 mt-20" />
    </div>
  );
}

export default Resume;
