import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Account from './Account';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="data:image/png;base64,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" alt="Logo" />
      </div>

      <ul className="navbar-nav">
      <Link to="/home" element={Home}>
        <li className="nav-item">
          Home
        </li>
        </Link>
        <Link to="/about" element={About}>
        <li className="nav-item">
          About
        </li>
        </Link>
        <Link to="/services" element={Services}>       
        <li className="nav-item">
          Services
        </li>
        </Link>
        <Link to="/contact" element={Contact}>
        <li className="nav-item">
          Contact
        </li>
        </Link>
      </ul>      
      <div className="navbar-search">
        <input type="text" placeholder="Search"/>
      </div>
      <div className="navbar-user">
        <Link to="/account" element={Account}>
        <img src="https://img.icons8.com/?size=256&id=ckaioC1qqwCu&format=png" alt="User" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;