import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="purple darken-2" role="navigation">
      <div className="nav-wrapper container"><Link id="logo-container" to="/" className="brand-logo">Storify</Link>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/Create">Create</Link></li>
          <li><Link to="/About">About</Link></li>


        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Create">Create</Link></li>
        </ul>
        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </nav>
  );
}

export default Navbar;