import React, { Component } from "react";

class PageModalInput extends Component {
  render() {
    const { type, placeholder, reference, icon, errors } = this.props;

    return (
      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          {icon && (
            <span className="uk-form-icon" data-uk-icon={`icon: ${icon}`} />
          )}
          <input
            className={`uk-input uk-width-1-1 ${
              errors.length > 0 ? "uk-form-danger" : null
            }`}

            data-uk-tooltip={
              errors.length > 0 ? `title: ${errors[0]}; pos: right` : null
            }
            type={type}
            placeholder={placeholder}
            ref={reference}
            list={this.props.datalist ? 'dataset' : null}
          />
          {this.props.datalist && (
            <datalist id="dataset">
              {this.props.datalist.map(el => (
                <option key={el[0]} value={el[0]}>
                  {el[1]}
                </option>
              ))}
            </datalist>
          )}
        </div>
      </div>
    );
  }
}

export default PageModalInput;
