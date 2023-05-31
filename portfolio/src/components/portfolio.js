import React from 'react';
import projects from '../data/projects.js';
import '../styles/tailwind.css';

function Portfolio() {
  const portfolioContent = {
    title: "Portfolio",
    subtitle: "Here are some of my projects: ",
  };

  return (
    <div className="portfolio-container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{portfolioContent.title}</h2>
      <h3 className="text-2xl font-bold mb-4">{portfolioContent.subtitle}</h3>
      <div className="flex justify-center">
        <div className="w-1/6"></div> {/* Empty div for left spacing */}
        <hr className="w-3/4 border-t-2 border-gray-300 opacity-50 mt-6 mb-14" />
        <div className="w-1/6"></div> {/* Empty div for right spacing */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.liveSite || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-gray-200 rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} className="mt-4" />
          </a>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="w-1/6"></div> {/* Empty div for left spacing */}
        <hr className="w-3/4 border-t-2 border-gray-300 opacity-50 mt-16 mb-8" />
        <div className="w-1/6"></div> {/* Empty div for right spacing */}
      </div>
    </div>
  );
}

export default Portfolio;
