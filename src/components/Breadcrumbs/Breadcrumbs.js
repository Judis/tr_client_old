import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Breadcrumbs extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <ul className="uk-breadcrumb">
            <li>
              <Link to={{ pathname: "/" }}>Projects</Link>
            </li>
          </ul>
        </Route>
        <Route
          path="/:project_id/locales/:locale_id">
          <ul className="uk-breadcrumb">
            <li>
              <Link to={{ pathname: "/project_id" }}>Project Name</Link>
            </li>
            <li>
              <Link to={{ pathname: "/project_id" }}>Locales</Link>
            </li>
            <li>
              <Link to={{ pathname: "/project_id/locales/locale_id" }}>en</Link>
            </li>
          </ul>
        </Route>
        <Route path="/:project_id">
          <ul className="uk-breadcrumb">
            <li>
              <Link to={{ pathname: "/project_id" }}>Project Name</Link>
            </li>
            <li>
              <Link to={{ pathname: "/project_id" }}>Locales</Link>
            </li>
          </ul>
        </Route>
      </Switch>
    );
  }
}

export default Breadcrumbs;
