import React, { Component } from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <React.Fragment>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Studio!</div>
            <div className="intro-heading text-uppercase">BEVA CODE</div>

            <button
              onClick={() => history.push("/signin")}
              className="btn btn-primary btn-xl text-uppercase"
            >
              {" "}
              Sign In for a full web experience
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
