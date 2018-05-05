import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageModalContainer from "../PageModalContainer/PageModalContainer";
import PageModalInput from "../PageModalInput/PageModalInput";
import SignUpAPI from "../../lib/api/signUp";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpRequestLoading: false,
      validationErrors: {}
    };
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.passwordConfirmationRef = React.createRef();
  }

  signUpFailedCallback(errors) {
    this.setState({
      signUpRequestLoading: false,
      validationErrors: errors
    });
  }

  signUp(event) {
    event.preventDefault();

    this.setState({
      signUpRequestLoading: true
    });

    SignUpAPI.do(
      this.emailRef.current.value,
      this.passwordRef.current.value,
      this.passwordConfirmationRef.current.value
    ).catch(this.signUpFailedCallback.bind(this));
  }

  render() {
    const { signUpRequestLoading, validationErrors } = this.state;
    const emailErrors = validationErrors.email || [];
    const passwordErrors = validationErrors.password || [];
    const passwordConfirmationErrors =
      validationErrors.passwordConfirmation || [];
    const signUp = this.signUp.bind(this);

    return (
      <PageModalContainer>
        <form>
          <fieldset className="uk-fieldset">
            <h1 className="uk-legend">Sign Up</h1>
            <PageModalInput
              type="email"
              placeholder="Email"
              icon="user"
              reference={this.emailRef}
              errors={emailErrors}
            />
            <PageModalInput
              type="password"
              placeholder="Password"
              icon="lock"
              reference={this.passwordRef}
              errors={passwordErrors}
            />
            <PageModalInput
              type="password"
              placeholder="Password Confirmation"
              icon="lock"
              reference={this.passwordConfirmationRef}
              errors={passwordConfirmationErrors}
            />

            <div className="uk-margin">
              <button
                className="uk-button uk-button-primary uk-width-1-1"
                onClick={signUp}
              >
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
        {signUpRequestLoading && (
          <div className="uk-overlay-default uk-position-cover uk-text-center">
            <span data-uk-spinner="ratio: 2" className="uk-position-center" />
          </div>
        )}
      </PageModalContainer>
    );
  }
}

export default SignUp;
