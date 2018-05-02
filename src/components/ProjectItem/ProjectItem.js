import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectItem extends Component {
  render() {
    return (
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
    );
  }
}

export default ProjectItem;
