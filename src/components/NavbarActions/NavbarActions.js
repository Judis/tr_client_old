import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import UserMenuItem from "../UserMenuItem/UserMenuItem";

class NavbarActions extends Component {
  render() {
    return (
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <Switch>
            <Route exact path="/">
              <li>
                <a>
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
                <a>
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
