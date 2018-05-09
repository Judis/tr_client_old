import React, { Component } from "react";
import TranslationKeysBlock from "../TranslationKeysBlock/TranslationKeysBlock";
import TranslationEditor from "../TranslationEditor/TranslationEditor";
import TranslationEditorPlaceholder from "../TranslationEditorPlaceholder/TranslationEditorPlaceholder";
import withContainer from "../../helpers/withContainer";

class TranslationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedKey: null
    };
  }

  onChooseKey(key) {
    this.setState({
      editedKey: key
    });
  }

  render() {
    const editedKey = this.state.editedKey;

    return (
      <div data-uk-grid>
        <TranslationKeysBlock onChooseKey={this.onChooseKey.bind(this)} />
        {editedKey && (
          <TranslationEditor edited_key={this.state.editedKey} />
        )}
        {!editedKey && (
          <TranslationEditorPlaceholder />
        )}
      </div>
    );
  }
}

export default withContainer(TranslationsList);
