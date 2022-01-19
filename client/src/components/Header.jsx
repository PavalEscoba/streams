import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span className="fs-4">Streamy</span>
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link">
            Features
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link">
            Pricing
          </Link>
        </li>
        <li className="nav-item">
          <Link to="create" className="nav-link">
            FAQs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="create" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
         <GoogleAuth />
        </li>
      </ul>
    </header>
  );
};

export default Header;
