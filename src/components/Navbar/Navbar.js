import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectItem extends Component {
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
          <ul className="uk-breadcrumb">
            <li>
              <Link to={{ pathname: "/project_id" }}>Project Name</Link>
            </li>
            <li>
              <Link to={{ pathname: "/project_id" }}>Locales</Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <a>
                <span data-uk-icon="icon: plus" />&nbsp; Add Locale
              </a>
            </li>
            <li>
              <a>User Name</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a>Log Out</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default ProjectItem;
