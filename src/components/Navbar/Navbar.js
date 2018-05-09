import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import NavbarActions from "../NavbarActions/NavbarActions";

class Navbar extends Component {
  render() {
    return (
      <Switch>
        <Route path="/(sign_in|sign_up|password_recovery|reset_password)">
        </Route>
        <Route path="/*">
          <nav
            className="uk-light uk-navbar-container uk-navbar-transparent uk-background-primary"
            data-uk-navbar
          >
            <div className="uk-navbar-left">
              <Link className="uk-navbar-item uk-logo" to={{ pathname: "/" }}>
                i18n
              </Link>
              <Breadcrumbs />
            </div>
            <NavbarActions />
          </nav>
        </Route>
      </Switch>
    );
  }
}

export default Navbar;
