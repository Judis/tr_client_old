import React, { Component } from "react";
import { Link } from "react-router-dom";

class LocaleItem extends Component {
  render() {
    return (
      <li>
        <div data-uk-grid>
          <div className="uk-width-1-4">
            <Link to={{ pathname: "/project_id/locales/locale_id" }}>
              ru
            </Link>
          </div>
          <div className="uk-width-expand">
            <progress className="uk-progress" value="18" max="100" />
          </div>
          <div className="uk-width-auto uk-text-right">
            <a className="uk-margin-left uk-link-muted">Download</a>
            <a className="uk-margin-left uk-link-muted">Settings</a>
            <a className="uk-margin-left uk-link-muted">Remove</a>
          </div>
        </div>
      </li>
    );
  }
}

export default LocaleItem;
