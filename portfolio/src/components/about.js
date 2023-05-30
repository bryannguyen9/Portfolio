import React from 'react';
import profilePic from '../Assets/profilepic.jpg';

function About() {
  const aboutContent = {
    title: 'About Me',
    subtitle: "I'm a Full-Stack Developer from Pasadena, California.",
    description:
      'I enjoy the challenges brought to me and enjoy the complexities of the cyber world! ' +
      'I love logic, problem solving, and coding within a cooperative team-oriented environment that allows me to grow. ' +
      'I am well-versed in Javascript, HTML, CSS, C++, Java, NodeJS, React, and other Full Stack developer technologies.',
    hobbies: [
      'When I am not staring at lines of code and pixels, you\'ll find me snowboarding, in the gym, or taking excessive naps.'
    ]
  };
  
  return (
    <section id="about-me-content">
      <h2>{aboutContent.title}</h2>
      <h3>{aboutContent.subtitle}</h3>
      <p>{aboutContent.description}</p>
      <figure>
        <img src={profilePic} alt="This is me!" />
      </figure>
      <ul>
        {aboutContent.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
