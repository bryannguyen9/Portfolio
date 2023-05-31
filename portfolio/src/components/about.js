import React from 'react';
import profilePic from '../Assets/image0.jpg';
import '../styles/about.css';
import '../styles/tailwind.css';

function About() {
  const aboutContent = {
    title: 'About Me',
    subtitle: "I'm a Full-Stack Developer from Pasadena, California.",
    description:
      'I enjoy the challenges brought to me and enjoy the complexities of the cyber world! ' +
      'I love logic, problem solving, and coding within a cooperative team-oriented environment that allows me to grow. ' +
      'I am well-versed in Javascript, HTML, CSS, C++, Java, NodeJS, React, and other Full Stack web development technologies.',
    hobbies: [
      'When I am not staring at lines of code and pixels, you\'ll find me snowboarding, in the gym, or taking excessive naps.'
    ]
  };
  
  return (
    <section className="about-section">
  <h2 className="font-bold text-3xl mt-10">{aboutContent.title}</h2>
  <div className="flex justify-center">
    <div className="w-1/6"></div> {/* Empty div for left spacing */}
    <hr className="w-3/4 border-t-2 border-gray-300 opacity-50 mt-10 mb-10" />
    <div className="w-1/6"></div> {/* Empty div for right spacing */}
  </div>
  <div className="grid grid-cols-2 gap-8 mt-6">
    <figure className="flex justify-center">
      <img src={profilePic} alt="This is me!" className="w-96 h-auto rounded-lg" />
    </figure>
    <div className="col-span-1 flex flex-col justify-center mr-20 ml-20 px-10">
      <h3 className="text-xl">{aboutContent.subtitle}</h3>
      <p className="mt-4">{aboutContent.description}</p>
      <ul className="mt-4 space-y-2">
        {aboutContent.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  </div>
  <div className="flex justify-center">
    <div className="w-1/6"></div> {/* Empty div for left spacing */}
    <hr className="w-3/4 border-t-2 border-gray-300 opacity-50 mt-20 mb-14" />
    <div className="w-1/6"></div> {/* Empty div for right spacing */}
  </div>
</section>




  );
}

export default About;
