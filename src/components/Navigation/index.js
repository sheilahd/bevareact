import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import Nav from "react-bootstrap/Nav";
import logoletters from "../../assets/img/cards/logoletters.png";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <div>
        <Nav.Item
          as="li"
          className="navbar-brand js-scroll-trigger"
          href="#page-top"
        >
          <Link to={ROUTES.HOME}>
            <img className="navbar-brand js-scroll-trigger" src={logoletters} />{" "}
          </Link>
        </Nav.Item>
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
          <Link to={ROUTES.LANDING}>
            <img className="navbar-brand js-scroll-trigger" src={logoletters} />
          </Link>

          <Nav.Item as="li" className="nav-link js-scroll-trigger"></Nav.Item>
        </ul>
      </div>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <Nav.Item
        as="li"
        className="navbar-brand js-scroll-trigger"
        href="#page-top"
      ></Nav.Item>
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
