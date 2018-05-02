import React, { Component } from "react";
import { Link } from "react-router-dom";

class TranslationsList extends Component {
  render() {
    return (
      <div>
        <nav
          className="uk-light uk-navbar-container uk-navbar-transparent uk-background-primary"
          data-uk-navbar
        >
          <div className="uk-navbar-left">
            <Link className="uk-navbar-item uk-logo" to={{ pathname: "/" }}>
              i18n
            </Link>
            <ul className="uk-breadcrumb">
              <li>
                <Link to={{ pathname: "/" }}>Project Name</Link>
              </li>
              <li>
                <Link to={{ pathname: "/project_id" }}>Locales</Link>
              </li>
              <li>
                <Link to={{ pathname: "/project_id/locales/locale_id" }}>
                  en
                </Link>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <a>
                  <span data-uk-icon="icon: plus" />&nbsp; Add Key
                </a>
              </li>
              <li>
                <a>User Name</a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <a>Log Out</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="uk-section uk-section-small">
          <div className="uk-container">
            <div data-uk-grid>
              <div className="uk-width-1-4">
                <form className="uk-search uk-search-default uk-width">
                  <span data-uk-search-icon />
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder=""
                  />
                  <a
                    data-uk-icon="icon: settings"
                    className="uk-position-right uk-margin-small uk-margin-small-right"
                    data-uk-tooltip="Filter"
                  />
                </form>
                <ul className="uk-list uk-list-divider">
                  <li>
                    navbar.locales<br />
                    <small>Locales</small>
                  </li>
                  <li>
                    navbar.project<br />
                    <small>Projects</small>
                  </li>
                  <li>
                    navbar.username<br />
                    <small>User Name</small>
                  </li>
                  <li>
                    navbar.translations<br />
                    <small>Translations</small>
                  </li>
                  <li>
                    navbar.code<br />
                    <small>Code</small>
                  </li>
                </ul>
              </div>
              <div className="uk-width-3-4">
                <h4 className="uk-heading-divider">
                  navbar.project
                  <a
                    data-uk-icon="icon: copy"
                    data-uk-tooltip="Copy to clipboard"
                  />
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
                            <button className="uk-button uk-button-primary">
                              Save
                            </button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                  <div className="uk-width-1-3">
                    <h5 className="uk-heading-bullet">Description</h5>
                    <p className="uk-margin-small-left">
                      Here is going key description
                    </p>
                    <img
                      src="http://via.placeholder.com/350x150?text=Context+image"
                      alt="Context"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TranslationsList;
