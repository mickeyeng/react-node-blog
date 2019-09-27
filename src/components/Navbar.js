import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavbar from '../styles/StyledNavbar';


const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles-list">Articles</Link>
        </li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar;
