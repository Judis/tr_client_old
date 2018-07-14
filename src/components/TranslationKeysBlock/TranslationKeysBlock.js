import React, { Component } from "react";
import { withRouter } from "react-router";
import TranslationKey from "../TranslationKey/TranslationKey";
import TranslationKeyAPI from "../../lib/api/translationKeys";
import AddTranslationKeyModal from "../AddTranslationKeyModal/AddTranslationKeyModal";

class TranslationKeysBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translation_keys: [],
      filter: ""
    };

    this.searchRef = React.createRef();
  }

  onSearchChange() {
    this.setState({
      filter: this.searchRef.current.value.trim()
    });
  }

  componentDidMount() {
    this.loadTranslationKeys();
  }

  loadTranslationKeys() {
    TranslationKeyAPI.loadWithTranslations(
      this.props.match.params.project_id,
      this.props.match.params.locale_id
    ).then(translation_keys => {
      this.setState({
        translation_keys
      });
    });
  }

  renderTranslationKeys() {
    return this.state.translation_keys
      .filter(el => {
        return (
          this.state.filter === "" || el.key.indexOf(this.state.filter) > -1
        );
      })
      .map(el => (
        <TranslationKey
          translation_key={el}
          key={`translationKey-${el.translation_key_id}`}
          onChooseKey={this.props.onChooseKey}
        />
      ));
  }

  render() {
    const translationKeys = this.renderTranslationKeys();

    return (
      <div className="uk-width-1-4">
        <form className="uk-search uk-search-default uk-width">
          <span data-uk-search-icon />
          <input
            className="uk-search-input"
            type="search"
            placeholder=""
            onChange={this.onSearchChange.bind(this)}
            ref={this.searchRef}
          />
          <a
            data-uk-icon="icon: search"
            className="uk-position-left uk-margin-small uk-margin-small-left"
            data-uk-tooltip="Filter"
          />
        </form>
        <ul className="uk-list uk-list-divider">{translationKeys}</ul>
        <AddTranslationKeyModal
          projectId={this.props.match.params.project_id}
          onSuccess={this.loadTranslationKeys.bind(this)}
        />
      </div>
    );
  }
}

export default withRouter(TranslationKeysBlock);
