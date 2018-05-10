import React, { Component } from "react";
import { withRouter } from "react-router";
import LocaleItem from "../LocaleItem/LocaleItem";
import AddLocaleModal from "../AddLocaleModal/AddLocaleModal";
import withContainer from "../../helpers/withContainer";
import LocalesAPI from "../../lib/api/locales";

class LocalesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locales: []
    };
  }

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    LocalesAPI.load(this.props.match.params.project_id).then(locales => {
      this.setState({
        locales
      });
    });
  }

  removeLocale(localeId, projectId) {
    LocalesAPI.remove(localeId, projectId).then(() => {
      this.loadLocales();
    });
  }

  render() {
    const localeItems = this.state.locales.map(locale => (
      <LocaleItem
        locale={locale.locale}
        id={locale.id}
        project_id={locale.project_id}
        is_default={locale.is_default}
        key={`localeItem-${locale.id}`}
        removeLocale={this.removeLocale.bind(this)}
      />
    ));
    return (
      <div>
        <ul className="uk-list uk-list-divider">{localeItems}</ul>
        <AddLocaleModal onSuccess={this.loadLocales.bind(this)} projectId={this.props.match.params.project_id} />
      </div>
    );
  }
}

export default withRouter(withContainer(LocalesList));
