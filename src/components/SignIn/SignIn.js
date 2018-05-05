import React, { Component } from "react";
import { Link } from "react-router-dom";
import UIkit from "uikit";
import AuthenticationAPI from "../../lib/api/authentication";
import PageModalContainer from "../PageModalContainer/PageModalContainer";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { authRequestLoading: false };
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  authenticationFailedCallback() {
    this.setState({
      authRequestLoading: false
    });

    UIkit.notification("Something is going wrong");
  }

  authenticate(event) {
    event.preventDefault();

    this.setState({
      authRequestLoading: true
    });

    AuthenticationAPI.auth(
      this.emailRef.current.value,
      this.passwordRef.current.value
    ).catch(this.authenticationFailedCallback.bind(this));
  }

  render() {
    const authenticate = this.authenticate.bind(this);
    const { authRequestLoading } = this.state;

    return (
      <PageModalContainer>
        <form>
          <fieldset className="uk-fieldset">
            <h1 className="uk-legend">Sign In</h1>
            <div className="uk-margin">
              <div className="uk-inline uk-width-1-1">
                <span className="uk-form-icon" data-uk-icon="icon: user" />
                <input
                  className="uk-input uk-width-1-1"
                  type="email"
                  placeholder="Email"
                  ref={this.emailRef}
                />
              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-inline uk-width-1-1">
                <span className="uk-form-icon" data-uk-icon="icon: lock" />
                <input
                  className="uk-input uk-width-1-1"
                  type="password"
                  placeholder="Password"
                  ref={this.passwordRef}
                />
              </div>
            </div>

            <div className="uk-margin">
              <button
                className="uk-button uk-button-primary uk-width-1-1"
                onClick={authenticate}
              >
                Sign In
              </button>
            </div>
            <div className="uk-margin-top">
              <div
                className="uk-grid-small uk-child-width-expand@s uk-text-center"
                data-uk-grid
              >
                <div className="uk-text-left@s">
                  <Link
                    className="uk-button uk-button-link"
                    to={{ pathname: "/sign_up" }}
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="uk-text-right@s">
                  <Link
                    className="uk-button uk-button-link"
                    to={{ pathname: "/password_recovery" }}
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
        {authRequestLoading && (
          <div className="uk-overlay-default uk-position-cover uk-text-center">
            <span data-uk-spinner="ratio: 2" className="uk-position-center" />
          </div>
        )}
      </PageModalContainer>
    );
  }
}

export default SignIn;
