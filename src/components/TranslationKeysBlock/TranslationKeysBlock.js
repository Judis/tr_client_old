import React, { Component } from "react";
import TranslationKey from "../TranslationKey/TranslationKey";

class TranslationKeysBlock extends Component {
  render() {
    const translationKeys = [0, 0, 0, 0, 0].map((el, index) => (
      <TranslationKey key={`translationKey-${index}`} />
    ));
    return (
      <div className="uk-width-1-4">
        <form className="uk-search uk-search-default uk-width">
          <span data-uk-search-icon />
          <input className="uk-search-input" type="search" placeholder="" />
          <a
            data-uk-icon="icon: settings"
            className="uk-position-right uk-margin-small uk-margin-small-right"
            data-uk-tooltip="Filter"
          />
        </form>
        <ul className="uk-list uk-list-divider">{translationKeys}</ul>
      </div>
    );
  }
}

export default TranslationKeysBlock;
