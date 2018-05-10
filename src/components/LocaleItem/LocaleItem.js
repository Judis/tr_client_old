import React, { Component } from "react";
import { Link } from "react-router-dom";
import UIkit from "uikit";

class LocaleItem extends Component {
  remove() {
    if (this.props.is_default) {
      UIkit.modal.alert('You can\'t remove default locale').then(() => {});
    } else {
      UIkit.modal
        .confirm(`Are you realy like remove ${this.props.locale} locale!`)
        .then(
          () => {
            this.props.removeLocale(this.props.id, this.props.project_id);
          },
          () => {}
        );
    }
  }

  render() {
    return (
      <li>
        <div data-uk-grid>
          <div className="uk-width-1-4">
            <Link
              to={{
                pathname: `/${this.props.project_id}/locales/${this.props.id}`
              }}
            >
              {this.props.locale}
            </Link>
            &nbsp;
            {this.props.is_default && (
              <span
                data-uk-icon="icon: star; ratio: 0.6"
                data-uk-tooltip="Default Locale"
              />
            )}
          </div>
          <div className="uk-width-expand">
            <progress className="uk-progress" value="18" max="100" />
          </div>
          <div className="uk-width-auto uk-text-right">
            <a className="uk-margin-left uk-link-muted">Download</a>
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

export default LocaleItem;
