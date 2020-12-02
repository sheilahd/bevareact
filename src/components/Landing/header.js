import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <React.Fragment>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Studio!</div>

            <h4 className="section-subheading intro-lead-in">
              Revit(BIM) Development Services
            </h4>

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
