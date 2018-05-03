import React, { Component } from "react";
import PageModalContainer from "../PageModalContainer/PageModalContainer";

class ResetPassword extends Component {
  render() {
    return (
      <PageModalContainer>
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
      </PageModalContainer>
    );
  }
}

export default ResetPassword;
