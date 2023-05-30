import React from 'react';
import githubLogo from '../Assets/images/githublogo.png';
import linkedinIcon from '../Assets/images/linkedinicon.png';

function Contact() {
  const links = [
    {
      title: 'Github Profile',
      url: 'https://github.com/bryannguyen9',
      image: githubLogo
    },
    {
      title: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/bryannguyen9/',
      image: linkedinIcon
    },
    {
      title: 'Github.com',
      url: 'https://github.com/',
      image: githubLogo
    }
  ];

  return (
    <section id="links-content">
      <h2>Links</h2>
      <nav>
        <ul>
          {links.map((link, index) => (
            <figure className="links" id="links-card" key={index}>
              <li>
                <a href={link.url}>{link.title}</a>
                <br />
                <a href={link.url}>
                  <img src={link.image} alt={link.title} />
                </a>
              </li>
            </figure>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Contact;
