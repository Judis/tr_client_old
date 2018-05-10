import React, { Component } from "react";
import { Link } from "react-router-dom";
import UIkit from "uikit";

class ProjectItem extends Component {
  remove() {
    UIkit.modal.confirm(`Are you realy like remove ${this.props.name} project!`).then(
      () => {
        this.props.removeProject(this.props.id);
      },
      () => {}
    );
  }

  render() {
    return (
      <li>
        <div data-uk-grid>
          <div className="uk-width-1-3@m">
            <Link to={{ pathname: `/${this.props.id}` }}>
              {this.props.name}
            </Link>
          </div>
          <div className="uk-width-1-3@m">
            <progress className="uk-progress" value="30" max="100" />
          </div>
          <div className="uk-width-1-3@m uk-text-right">
            <a className="uk-margin-left uk-link-muted">Settings</a>
            <a
              className="uk-margin-left uk-link-muted"
              onClick={this.remove.bind(this)}
            >
              Remove
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default ProjectItem;
