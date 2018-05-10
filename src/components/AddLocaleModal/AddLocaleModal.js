import React, { Component } from "react";
import UIkit from "uikit";
import PageModalInput from "../PageModalInput/PageModalInput";
import LocalesAPI from "../../lib/api/locales";
import LOCALES_LIST from "../../constants/locales_list";

const INITIAL_STATE = {
  createLocaleRequestLoading: false,
  validationErrors: {}
};

class AddLocaleModal extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.localeRef = React.createRef();
    this.modalRef = React.createRef();
  }

  addLocaleFailedCallback(errors) {
    this.setState({
      createLocaleRequestLoading: false,
      validationErrors: errors
    });
  }

  addLocaleSuccessCallback() {
    if (this.props.onSuccess && typeof this.props.onSuccess === "function") {
      this.props.onSuccess();
    }
    this.hide();
  }

  addLocale() {
    this.setState({
      createProjectRequestLoading: true
    });

    LocalesAPI.add(
      this.localeRef.current.value,
      this.props.projectId
    )
      .then(this.addLocaleSuccessCallback.bind(this))
      .catch(this.addLocaleFailedCallback.bind(this));
  }

  hide() {
    this.setState(INITIAL_STATE);
    this.localeRef.current.value = "";
    UIkit.modal(this.modalRef.current).hide();
  }

  render() {
    const { createLocaleRequestLoading, validationErrors } = this.state;
    const localeErrors = validationErrors.locale || [];
    const localesList = Object.keys(LOCALES_LIST).map((key) => [key, LOCALES_LIST[key]]);

    return (
      <div id="add-locale-modal" data-uk-modal ref={this.modalRef}>
        <div className="uk-modal-dialog uk-margin-auto-vertical">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Add Locale</h2>
          </div>
          <div className="uk-modal-body">
            <form>
              <fieldset className="uk-fieldset">
                <PageModalInput
                  type="text"
                  placeholder="Locale Name"
                  reference={this.localeRef}
                  errors={localeErrors}
                  datalist={localesList}
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
              onClick={this.addLocale.bind(this)}
            >
              Save
            </button>
          </div>
          {createLocaleRequestLoading && (
            <div className="uk-overlay-default uk-position-cover uk-text-center">
              <span data-uk-spinner="ratio: 2" className="uk-position-center" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AddLocaleModal;
