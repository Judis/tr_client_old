import React, { Component } from "react";
import { withRouter } from "react-router";
import TranslationsAPI from "../../lib/api/translations";

class TranslationEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      translation: props.edited_key.current_value
        ? props.edited_key.current_value.value
        : ""
    };

    this.translationRef = React.createRef();
  }

  componentWillReceiveProps(props) {
    this.setState({
      translation: props.edited_key.current_value
        ? props.edited_key.current_value.value
        : ""
    });
  }

  onTranslationChange() {
    this.setState({
      translation: this.translationRef.current.value
    });
  }

  saveCallback(answer) {
    if (this.props.edited_key.current_value) {
      this.props.edited_key.current_value.value = answer.data.value;
    } else {
      this.props.edited_key.current_value = {
        value: answer.data.value,
        id: answer.data.id
      }
    }
  }

  saveTranslation(event) {
    event.preventDefault();
    TranslationsAPI.save(
      this.props.edited_key.current_value ? this.props.edited_key.current_value.id : null,
      this.props.edited_key.translation_key_id,
      this.state.translation,
      this.props.match.params.project_id,
      this.props.match.params.locale_id
    ).then(this.saveCallback.bind(this));
  }

  render() {
    const edited_key = this.props.edited_key;

    return (
      <div className="uk-width-3-4">
        <h4 className="uk-heading-divider">
          {edited_key.key}
          <a data-uk-icon="icon: copy" data-uk-tooltip="Copy to clipboard" />
        </h4>
        <div data-uk-grid>
          <div className="uk-width-2-3">
            <div className="uk-margin-bottom">
              {edited_key.default_value
                ? edited_key.default_value.value
                : "N/A"}
            </div>
            <hr className="uk-divider-icon" />
            <div>
              <form>
                <fieldset className="uk-fieldset">
                  <legend className="uk-legend">Translation</legend>
                  <div className="uk-margin">
                    <textarea
                      className="uk-textarea"
                      rows="5"
                      placeholder="Enter translation here"
                      onChange={this.onTranslationChange.bind(this)}
                      ref={this.translationRef}
                      value={this.state.translation}
                    />
                  </div>
                  <div className="uk-margin uk-text-right">
                    <button className="uk-button uk-button-primary"
                    onClick={this.saveTranslation.bind(this)}>
                      Save
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="uk-width-1-3">
            <h5 className="uk-heading-bullet">Description</h5>
            <p className="uk-margin-small-left">{edited_key.context}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TranslationEditor);
