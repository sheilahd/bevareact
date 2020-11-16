import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { Row, FormGroup, FormControl } from "react-bootstrap";

const SignInPage = () => (
  <div
    style={{
      position: "center",
      width: "50%",
      marginLeft: "20%",
      marginTop: "10%",
    }}
  >
    <h2>SignIn</h2>

    <SignInForm />
    <div
      style={{
        position: "center",
        width: "50%",
        marginLeft: "20%",
        marginTop: "10%",
      }}
    >
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="Signin">
        <Row>
          <form
            onSubmit={this.onSubmit}
            style={{
              position: "center",
              width: "50%",
              marginLeft: "20%",
              marginTop: "10%",
            }}
          >
            <FormGroup controlId="email">
              <FormControl
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
            </FormGroup>
            <FormGroup controlId="email">
              <FormControl
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </FormGroup>
            <button disabled={isInvalid} type="submit">
              Sign In
            </button>

            {error && <p>{error.message}</p>}
          </form>
        </Row>
      </div>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
