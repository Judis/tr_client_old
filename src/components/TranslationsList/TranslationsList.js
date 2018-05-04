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
      edited_key: null
    };
  }

  onChooseKey(key) {
    this.setState({
      edited_key: key
    });
  }

  render() {
    const editedKey = this.state.edited_key;

    return (
      <div>
        <Navbar />
        <Container>
          <div data-uk-grid>
            <TranslationKeysBlock onChooseKey={this.onChooseKey.bind(this)} />
            {editedKey && (
              <TranslationEditor edited_key={this.state.edited_key} />
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
