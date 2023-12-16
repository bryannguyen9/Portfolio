import React, { useRef, useEffect, useState } from 'react';
import projects from '../data/projects.js';
import Slider from 'react-slick';
import cheerioImage from '../Assets/cheerio.png';
import meloreImage from '../Assets/melore.png';
import passgenImage from '../Assets/passgen.png';
import geekgossipImage from '../Assets/geekgossip.png';
import readmegenImage from '../Assets/readmegen.png';
import gourmetGauntletGif from '../Assets/gourmetgauntlet.gif';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/tailwind.css';
import '../styles/slick-custom.css';

const getImageSource = (imageName) => {
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
};

const ProjectCard = ({ project, currentSlide }) => {
  const isMainProject = currentSlide === project.slideIndex;

  return (
    <div className={`project-card relative overflow-hidden p-4 group transition-transform duration-300 ease-in-out ${isMainProject ? 'main-project' : 'hover:scale-105'}`}>
      <a
        href={project.liveSite || project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
      >
        <div className="image-container" style={{ height: '250px' }}>
          <img
            src={getImageSource(project.image)}
            alt={project.title}
            className="w-auto h-full" // Set only width to maintain aspect ratio
          />
        </div>
        {isMainProject && (
          <div className="absolute bottom-4 left-0 w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="button mr-2"
              >
                Live Site
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </a>
      <div className={`project-info `}>
        <h2 className={`text-4xl ${isMainProject ? 'transition-transform duration-500 transform scale-110' : 'transition-transform duration-500 transform scale-100'}`}>
          {project.title}
        </h2>
        {/* Adjust the class and size as needed */}
        <p>{project.description}</p>
      </div>
    </div>
  );
};

function Portfolio() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <div className="portfolio-container flex items-center justify-center h-screen bg-black text-white">
      <div className="w-full max-w-7xl">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={{ ...project, slideIndex: index }} currentSlide={currentSlide} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Portfolio;
