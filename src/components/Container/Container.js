import React, { Component } from "react";

class Container extends Component {
  render() {
    return (
      <div className="uk-section uk-section-small">
        <div className="uk-container">{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
