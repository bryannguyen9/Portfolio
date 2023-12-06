import React, { useRef, useEffect } from 'react';
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

const ProjectCard = ({ project }) => (
  <div className="project-card relative overflow-hidden p-4">
    <a
      href={project.liveSite || project.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="image-container" >
        <img
          src={getImageSource(project.image)}
          alt={project.title}
          className="w-full h-full"
        />
      </div>
    </a>
    <div className="project-info">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="links">
        {project.liveSite && (
          <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);



function Portfolio() {
  const sliderRef = useRef(null);

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
  };

  return (
    <div className="portfolio-container flex items-center justify-center h-screen bg-black text-white">
      <div className="w-full max-w-7xl">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Portfolio;