import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/HeaderComponent.css';

const HeaderComponent = () => {
  const location = useLocation();
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about" state={{ from: location.pathname }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
