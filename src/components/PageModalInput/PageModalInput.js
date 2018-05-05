import React, { Component } from "react";

class PageModalInput extends Component {
  render() {
    const {
      type,
      placeholder,
      reference,
      icon,
      errors
    } = this.props;

    return (
      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          <span className="uk-form-icon" data-uk-icon={`icon: ${icon}`} />
          <input
            className={`uk-input uk-width-1-1 ${
              errors.length > 0 ? "uk-form-danger" : null
            }`}
            data-uk-tooltip={
              errors.length > 0
                ? `title: ${errors[0]}; pos: right`
                : null
            }
            type={type}
            placeholder={placeholder}
            ref={reference}
          />
        </div>
      </div>
    );
  }
}

export default PageModalInput;
