import React from "react";
import { useHistory } from "react-router-dom";

import * as ROLES from "../../constants/roles";
import AuthUserContext from "../Session/context";

function HeaderHome() {
  const history = useHistory();
  return (
    <React.Fragment>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome Back!</div>
            <div className="intro-heading text-uppercase">
              {/* {AuthUserContext.email} */}
            </div>
            <button
              onClick={() => history.push("/addinsdashboard")}
              className="btn btn-primary btn-xl text-uppercase"
            >
              {" "}
              Add a new Add-in Request
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default HeaderHome;
