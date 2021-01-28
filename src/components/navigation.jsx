import React from "react";

function Navigation() {
  return (
    <React.Fragment>
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">
              Home 
            </a>
            <a className="nav-item nav-link" href="#">
             Calculator
            </a>
            <a className="nav-item nav-link" href="#">
              Quotes
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navigation;
