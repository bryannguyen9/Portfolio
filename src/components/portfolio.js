import React from 'react';
import projects from '../data/projects.js';
import cheerioImage from '../Assets/cheerio.png';
import meloreImage from '../Assets/melore.png';
import passgenImage from '../Assets/passgen.png';
import geekgossipImage from '../Assets/geekgossip.png';
import readmegenImage from '../Assets/readmegen.png';
import gourmetGauntletGif from '../Assets/gourmetgauntlet.gif';
import '../styles/tailwind.css';

function Portfolio() {
  const portfolioContent = {
    title: "Portfolio",
    subtitle: "Here are some of my projects: ",
  };

  return (
    <div className="portfolio-container mx-auto px-4 py-8">
      {/* Rest of the code */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.liveSite || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-gray-200 rounded-lg shadow-md p-4 relative overflow-hidden"
          >
            {/* Rest of the code */}
            <div className="image-container">
              <img
                src={getImageSource(project.image)}
                alt={project.title}
              />
            </div>
          </a>
        ))}
      </div>
      {/* Rest of the code */}
    </div>
  );
}

function getImageSource(imageName) {
  switch (imageName) {
    case 'cheerio.png':
      return cheerioImage;
    case 'melore.png':
      return meloreImage;
    case 'passgen.png':
      return passgenImage;
    case 'geekgossip.png':
      return geekgossipImage;
    case 'readmegen.png':
      return readmegenImage;
    case 'gourmetgauntlet.gif':
      return gourmetGauntletGif;
    default:
      return '';
  }
}

export default Portfolio;
