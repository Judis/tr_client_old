import React, { Component } from "react";

class TranslationKey extends Component {
  render() {
    const translation_key = this.props.translation_key;
    return (
      <li>
        {translation_key.key}<br />
        {translation_key.current_value && (
          <small>{translation_key.current_value.value}</small>
        )}
        {translation_key.default_value && !translation_key.current_value && (
          <small>{translation_key.default_value.value}</small>
        )}
        {!translation_key.default_value && !translation_key.current_value && (
          <small>N/A</small>
        )}
      </li>
    );
  }
}

export default TranslationKey;
