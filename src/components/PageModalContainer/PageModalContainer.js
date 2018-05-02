import React, { Component } from "react";

class PageModalContainer extends Component {
  render() {
    return (
      <div className="uk-height-viewport uk-background-muted">
        <div className="uk-card uk-card-default uk-width-large@s uk-width-5-6 uk-position-center">
          <div className="uk-card-media-top uk-padding-small uk-text-center uk-background-primary">
            <h1 className="uk-margin-remove-bottom uk-light">i18n</h1>
          </div>
          <div className="uk-card-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default PageModalContainer;
