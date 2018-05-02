import React, { Component } from "react";

class ResetPassword extends Component {
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
                <h1 className="uk-legend">Reset Password</h1>
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
                    Reset Password
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
