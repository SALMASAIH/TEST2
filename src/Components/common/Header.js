import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Assets/css/main.css';
import '../Assets/js/main.js';
import { NavLink } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="app-header">
      <a className="app-header__logo" href="index.html">Gestion d'E.T</a>
      <a className="bi bi-list app-sidebar__toggle" data-bs-toggle="sidebar" aria-label="Hide Sidebar" onClick={toggleSidebar}></a>

      <ul className="app-nav">
        <li className="app-search">
          <input className="app-search__input" type="search" placeholder="Chercher"/>
        </li>
        <li className="dropdown">
          <a className="app-nav__item" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="bi bi-person fs-4"></i>
          </a>
          <ul className="dropdown-menu settings-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
            <li><NavLink className="dropdown-item" to="/profile"><i className="bi bi-person me-2 fs-5"></i> Profile</NavLink></li>
            <li><NavLink className="dropdown-item" to="/"><i className="bi bi-box-arrow-right me-2 fs-5"></i> Logout</NavLink></li>
          </ul>
        </li>
      </ul>
    </header>
  );
}

export default Header;
