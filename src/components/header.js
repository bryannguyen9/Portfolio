import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import myIcon from '../Assets/myicon.png';
import '../styles/tailwind.css';

function Header() {
  const navigationItems = [
    { title: 'About Me', link: '/about' },
    { title: 'Portfolio', link: '/portfolio' },
    { title: 'Contact', link: '/contact' },
    { title: 'Resume', link: '/resume' }
  ];

  const location = useLocation();

  return (
    <header className="flex items-center justify-center px-4 py-2 bg-gray-600 h-16">
      <div className="flex items-center">
        <img src={myIcon} alt="Company Icon" className="my-icon w-20 h-18" />
      </div>
      <nav>
        <ul className="nav-bar flex ">
          {navigationItems.map((item, index) => (
            <li key={index} className={location.pathname === item.link ? 'active' : ''}>
              <Link
                to={item.link}
                className="mx-3 text-white font-semibold py-5">
                <div className="px-5 hover:bg-gray-200 py-4 hover:opacity-75 hover:text-black rounded transition duration-200 transform hover:scale-110">
                {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
