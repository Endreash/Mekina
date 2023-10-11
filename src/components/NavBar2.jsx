import React from "react";
import { Link } from "react-router-dom";


const NavBar2 = () => {
  return ( 
    <nav>
      <div className="nav__container">
        <ul className="nav__links">
        <Link className="nav__list">
        <a href="/"> <span className="btn-logo">Mekina</span></a>
        </Link>
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Explore
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/offers" className="nav__link">
              Offers
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/profile" className="nav__link">
              Profile
            </Link>
          </li>
        </ul>
        <ul className="nav__links">
          <li>
          <Link to="/sign-in" className="nav__link">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar2;
