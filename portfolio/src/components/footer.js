import React from 'react';
import { FaGithub, FaLinkedin, FaSteam } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/bryannguyen9" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/bryannguyen9" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://steamcommunity.com/id/fatherpaco/" target="_blank" rel="noopener noreferrer">
          <FaSteam />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
