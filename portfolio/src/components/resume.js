import React from 'react';

function Resume() {
  return (
    <resume>
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href="/Assets/resume.pdf" download>
        Download PDF
      </a>
      <h3>My Developer Proficiencies and Skills</h3>
      <h4>Front End:</h4>
        <ul>
          <li>Javascript</li>
          <li>HTML/CSS/CSS Frameworks (i.e. Bootstrap, Cirrus, Tailwind)</li>
          <li>Progressive Web Applications (i.e. React)</li>
        </ul>
      <h4>Back End:</h4>
        <ul>
          <li>Server-side Languages (i.e. C++, Java, Node.js)</li>
          <li>Web Frameworks (i.e. Express.JS)</li>
          <li>Databases (i.e. MySQL, NoSQL, MongoDB)</li>
          <li>API Development and Management (i.e. RESTful APIs)</li>
          <li>Authentication (i.e. OAuth)</li>
        </ul>
      <h4>Other:</h4>
        <ul>
          <li>Version Control (i.e. Git, GitHub)</li>
          <li>Deployment (i.e. Heroku, GitHub Pages)</li>
          <li>Computer Science Fundamentals (i.e. Algorithms, Data Structures)</li>
        </ul>
    </resume>
  );
}

export default Resume;
