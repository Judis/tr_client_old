import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import NavbarActions from "../NavbarActions/NavbarActions";

class Navbar extends Component {
  render() {
    return (
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
    );
  }
}

export default Navbar;
