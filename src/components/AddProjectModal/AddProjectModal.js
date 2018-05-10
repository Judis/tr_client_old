import React, { Component } from "react";
import UIkit from "uikit";
import PageModalInput from "../PageModalInput/PageModalInput";
import ProjectsAPI from "../../lib/api/projects";

const INITIAL_STATE = {
  createProjectRequestLoading: false,
  validationErrors: {}
};

class AddProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.projectNameRef = React.createRef();
    this.defaultLocaleRef = React.createRef();
    this.modalRef = React.createRef();
  }

  addProjectFailedCallback(errors) {
    this.setState({
      createProjectRequestLoading: false,
      validationErrors: errors
    });
  }

  addProjectSuccessCallback() {
    if (this.props.onSuccess && typeof this.props.onSuccess === "function") {
      this.props.onSuccess();
    }
    this.hide();
  }

  addProject() {
    this.setState({
      createProjectRequestLoading: true
    });

    ProjectsAPI.add(
      this.projectNameRef.current.value,
      this.defaultLocaleRef.current.value
    )
      .then(this.addProjectSuccessCallback.bind(this))
      .catch(this.addProjectFailedCallback.bind(this));
  }

  hide() {
    this.setState(INITIAL_STATE);
    this.projectNameRef.current.value = "";
    this.defaultLocaleRef.current.value = "";
    UIkit.modal(this.modalRef.current).hide();
  }

  render() {
    const { createProjectRequestLoading, validationErrors } = this.state;
    const projectNameErrors = validationErrors.name || [];
    const defaultLocaleErrors = validationErrors.default_locale || [];

    return (
      <div id="add-project-modal" data-uk-modal ref={this.modalRef}>
        <div className="uk-modal-dialog uk-margin-auto-vertical">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Add Project</h2>
          </div>
          <div className="uk-modal-body">
            <form>
              <fieldset className="uk-fieldset">
                <PageModalInput
                  type="text"
                  placeholder="Project Name"
                  reference={this.projectNameRef}
                  errors={projectNameErrors}
                />
                <PageModalInput
                  type="text"
                  placeholder="Default Locale"
                  reference={this.defaultLocaleRef}
                  errors={defaultLocaleErrors}
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
              onClick={this.addProject.bind(this)}
            >
              Save
            </button>
          </div>
          {createProjectRequestLoading && (
            <div className="uk-overlay-default uk-position-cover uk-text-center">
              <span data-uk-spinner="ratio: 2" className="uk-position-center" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AddProjectModal;
