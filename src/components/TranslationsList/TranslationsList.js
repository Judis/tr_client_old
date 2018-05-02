import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import TranslationKeysBlock from "../TranslationKeysBlock/TranslationKeysBlock";
import TranslationEditor from "../TranslationEditor/TranslationEditor";

class TranslationsList extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <div data-uk-grid>
            <TranslationKeysBlock />
            <TranslationEditor />
          </div>
        </Container>
      </div>
    );
  }
}

export default TranslationsList;
