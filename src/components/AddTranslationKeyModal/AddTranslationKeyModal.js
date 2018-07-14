import React, { Component } from "react";
import UIkit from "uikit";
import PageModalInput from "../PageModalInput/PageModalInput";
import TranslationKeyAPI from "../../lib/api/translationKeys";

const INITIAL_STATE = {
  createTranslationKeyRequestLoading: false,
  validationErrors: {}
};

class AddTranslationKeyModal extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.keyRef = React.createRef();
    this.defaultValueRef = React.createRef();
    this.contextRef = React.createRef();
    this.modalRef = React.createRef();
  }

  addTranslationKeyFailedCallback(errors) {
    this.setState({
      createTranslationKeyRequestLoading: false,
      validationErrors: errors
    });
  }

  addTranslationKeySuccessCallback() {
    if (this.props.onSuccess && typeof this.props.onSuccess === "function") {
      this.props.onSuccess();
    }
    this.hide();
  }

  addTranslationKey() {
    this.setState({
      createTranslationKeyRequestLoading: true
    });

    TranslationKeyAPI.add(
      this.keyRef.current.value,
      this.defaultValueRef.current.value,
      this.contextRef.current.value,
      this.props.projectId
    )
      .then(this.addTranslationKeySuccessCallback.bind(this))
      .catch(this.addTranslationKeyFailedCallback.bind(this));
  }

  hide() {
    this.setState(INITIAL_STATE);
    this.keyRef.current.value = "";
    this.defaultValueRef.current.value = "";
    this.contextRef.current.value = "";
    UIkit.modal(this.modalRef.current).hide();
  }

  render() {
    const { createTranslationKeyRequestLoading, validationErrors } = this.state;
    const keyErrors = validationErrors.key || [];

    return (
      <div id="add-translation-key-modal" data-uk-modal ref={this.modalRef}>
        <div className="uk-modal-dialog uk-margin-auto-vertical">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Add Translation Key</h2>
          </div>
          <div className="uk-modal-body">
            <form>
              <fieldset className="uk-fieldset">
                <PageModalInput
                  type="text"
                  placeholder="Translation Key"
                  reference={this.keyRef}
                  errors={keyErrors}
                />
                <PageModalInput
                  type="text"
                  placeholder="Default Value"
                  reference={this.defaultValueRef}
                />
                <PageModalInput
                  type="text"
                  placeholder="Context"
                  reference={this.contextRef}
                />
              </fieldset>
            </form>
          </div>
          <div className="uk-modal-footer uk-text-right">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button"
              onClick={this.hide.bind(this)}
            >
              Cancel
            </button>
            &nbsp;
            <button
              className="uk-button uk-button-primary"
              type="button"
              onClick={this.addTranslationKey.bind(this)}
            >
              Save
            </button>
          </div>
          {createTranslationKeyRequestLoading && (
            <div className="uk-overlay-default uk-position-cover uk-text-center">
              <span data-uk-spinner="ratio: 2" className="uk-position-center" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AddTranslationKeyModal;
