import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light topstyle">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/calculator">
              calculator
            </Link>
            <Link className="nav-item nav-link" to="/quotes">
              quotes
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
