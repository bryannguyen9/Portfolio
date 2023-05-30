import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const navigationItems = [
    { title: 'About Me', link: '/about' },
    { title: 'Portfolio', link: '/portfolio' },
    { title: 'Contact', link: '/contact' },
    { title: 'Resume', link: '/resume' }
  ];

  const location = useLocation();

  return (
    <header>
      <img src="./Assets/images/myicon.png" alt="Company Icon" />
      <h1>Bryan Nguyen Portfolio Site</h1>
      <nav>
        <ul className="asideMain">
          {navigationItems.map((item, index) => (
            <li key={index} className={location.pathname === item.link ? 'active' : ''}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <aside>
          <ul className="asideSmall">
            {navigationItems.map((item, index) => (
              <li key={index} className={location.pathname === item.link ? 'active' : ''}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </nav>
    </header>
  );
}

export default Header;
