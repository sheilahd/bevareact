import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Nav from "react-bootstrap/Nav";
import logo1 from "../../assets/img/cards/logo1.png";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a>
              <img
                className="navbar-brand js-scroll-trigger"
                href="#header"
                src={logo1}
              />
            </a>
          </li>
        </ul>
      </div>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#addinsCards">
              Add-ins
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
