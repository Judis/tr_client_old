import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectsList extends Component {
  render() {
    return (
      <div>
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
                <Link to={{ pathname: "/" }}>Projects</Link>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <a>
                  <span data-uk-icon="icon: plus" />&nbsp; Add Project
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

        <div className="uk-section uk-section-small">
          <div className="uk-container">
            <ul className="uk-list uk-list-divider">
              <li>
                <div data-uk-grid>
                  <div className="uk-width-1-3@m">
                    <Link to={{ pathname: "/project_id" }}>Project Name</Link>
                  </div>
                  <div className="uk-width-1-3@m">
                    <progress className="uk-progress" value="30" max="100" />
                  </div>
                  <div className="uk-width-1-3@m uk-text-right">
                    <a className="uk-margin-left uk-link-muted">Settings</a>
                    <a className="uk-margin-left uk-link-muted">Remove</a>
                  </div>
                </div>
              </li>
              <li>
                <div data-uk-grid>
                  <div className="uk-width-1-3@m">
                    <Link to={{ pathname: "/project_id" }}>Project Name</Link>
                  </div>
                  <div className="uk-width-1-3@m">
                    <progress className="uk-progress" value="18" max="100" />
                  </div>
                  <div className="uk-width-1-3@m uk-text-right">
                    <a className="uk-margin-left uk-link-muted">Settings</a>
                    <a className="uk-margin-left uk-link-muted">Remove</a>
                  </div>
                </div>
              </li>
              <li>
                <div data-uk-grid>
                  <div className="uk-width-1-3@m">
                    <Link to={{ pathname: "/project_id" }}>Project Name</Link>
                  </div>
                  <div className="uk-width-1-3@m">
                    <progress className="uk-progress" value="100" max="100" />
                  </div>
                  <div className="uk-width-1-3@m uk-text-right">
                    <a className="uk-margin-left uk-link-muted">Settings</a>
                    <a className="uk-margin-left uk-link-muted">Remove</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsList;
