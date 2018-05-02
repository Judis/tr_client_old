import React, { Component } from "react";

class TranslationEditor extends Component {
  render() {
    return (
      <div className="uk-width-3-4">
        <h4 className="uk-heading-divider">
          navbar.project
          <a data-uk-icon="icon: copy" data-uk-tooltip="Copy to clipboard"></a>
        </h4>
        <div data-uk-grid>
          <div className="uk-width-2-3">
            <div className="uk-margin-bottom">
              Here is going key translation from default locale
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
                      placeholder="Textarea"
                    />
                  </div>
                  <div className="uk-margin uk-text-right">
                    <button className="uk-button uk-button-primary">Save</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="uk-width-1-3">
            <h5 className="uk-heading-bullet">Description</h5>
            <p className="uk-margin-small-left">Here is going key description</p>
            <img
              src="http://via.placeholder.com/350x150?text=Context+image"
              alt="Context"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TranslationEditor;
