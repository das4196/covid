import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";

function Header() {
  // Creating array for mapping navigation menu
  const navigation = ["Home", "Covid-19", "Symptoms", "Prevention", "About"];
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            Covid Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarBasic"
            aria-controls="navbarBasic"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarBasic">
            {/* mapping throigh and displaying  items in navigation bar */}

            <ul className="navbar-nav">
              {navigation.map((item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <Link
                      className="btn btn-link"
                      id="navbutton"
                      to={`/${item}`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
