import React from 'react';
import { FaGithub, FaLinkedin, FaSteam } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="bg-gray-200 mt-auto py-10">
      <div className="flex justify-center mb-10 mt-5 space-x-8">
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://steamcommunity.com/id/fatherpaco/" target="_blank" rel="noopener noreferrer">
          <FaSteam className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
