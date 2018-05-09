import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import TranslationKeysBlock from "../TranslationKeysBlock/TranslationKeysBlock";
import TranslationEditor from "../TranslationEditor/TranslationEditor";
import TranslationEditorPlaceholder from "../TranslationEditorPlaceholder/TranslationEditorPlaceholder";

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
      <div>
        <Navbar />
        <Container>
          <div data-uk-grid>
            <TranslationKeysBlock onChooseKey={this.onChooseKey.bind(this)} />
            {editedKey && (
              <TranslationEditor edited_key={this.state.editedKey} />
            )}
            {!editedKey && (
              <TranslationEditorPlaceholder />
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default TranslationsList;
