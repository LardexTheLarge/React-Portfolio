import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

<button
  aria-controls="basic-navbar-nav"
  type="button"
  aria-label="Toggle navigation"
  class="navbar-toggler"
>
  <span class="navbar-toggler-icon"></span>
</button>;

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Gabriel Vasquez
        </Link>

        <div className=" navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
