import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import {UserContext} from '../UserContext';

function Navbar() {
  const {user, setUser} = useContext(UserContext);
  return (
    //<div className="navbar-fixed">
    <nav className="purple darken-2" role="navigation">
      <div className="nav-wrapper container"><Link id="logo-container" to="/" className="brand-logo">rivermouth</Link>
        <ul className="right hide-on-med-and-down">

          <li><Link to="/about">About</Link></li>
          {user.loggedIn &&
            <li><Link to="/">{(user.name).split(' ')[0]}</Link></li>
          }
          {user.loggedIn &&
            <li><Link to="/logout">Logout</Link></li>
          }
        </ul>

        <ul id="nav-mobile" className="sidenav">

          <li><Link to="/about">About</Link></li>
          {user.loggedIn &&
            <li><Link to="/">Your stories</Link></li>
          }
          {user.loggedIn &&
            <li><Link to="/logout">Logout</Link></li>
          }
        </ul>
        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </nav>
    //</div>
  );
}

export default Navbar;
