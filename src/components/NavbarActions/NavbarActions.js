import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import UIkit from "uikit";
import UserMenuItem from "../UserMenuItem/UserMenuItem";

class NavbarActions extends Component {
  openModal(modalId) {
    UIkit.modal(document.getElementById(modalId)).show();
  }

  render() {
    return (
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <Switch>
            <Route exact path="/">
              <li>
                <a onClick={this.openModal.bind(this, 'add-project-modal')}>
                  <span data-uk-icon="icon: plus" />&nbsp; Add Project
                </a>
              </li>
            </Route>
            <Route
              path="/:project_id/locales/:locale_id">
              <li>
                <a>
                  <span data-uk-icon="icon: plus" />&nbsp; Add Key
                </a>
              </li>
            </Route>
            <Route path="/:project_id">
              <li>
                <a onClick={this.openModal.bind(this, 'add-locale-modal')}>
                  <span data-uk-icon="icon: plus" />&nbsp; Add Locale
                </a>
              </li>
            </Route>
          </Switch>
          <UserMenuItem />
        </ul>
      </div>
    );
  }
}

export default NavbarActions;
