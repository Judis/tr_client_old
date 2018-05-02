import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div className="uk-height-viewport uk-background-muted">
        <div className="uk-card uk-card-default uk-width-large@s uk-width-5-6 uk-position-center">
          <div className="uk-card-media-top uk-padding-small uk-text-center uk-background-primary">
            <h1 className="uk-margin-remove-bottom uk-light">i18n</h1>
          </div>
          <div className="uk-card-body">
            <form>
              <fieldset className="uk-fieldset">
                <h1 className="uk-legend">Sign Up</h1>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon" data-uk-icon="icon: user" />
                    <input
                      className="uk-input uk-width-1-1"
                      type="email"
                      placeholder="Email"
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
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon" data-uk-icon="icon: lock" />
                    <input
                      className="uk-input uk-width-1-1"
                      type="password"
                      placeholder="Password Confirmation"
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <button className="uk-button uk-button-primary uk-width-1-1">
                    Sign Up
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
                        to={{ pathname: "/sign_in" }}
                      >
                        I Have Account
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
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
