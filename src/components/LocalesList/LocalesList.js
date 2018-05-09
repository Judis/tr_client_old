import React, { Component } from "react";
import { withRouter } from "react-router";
import LocaleItem from "../LocaleItem/LocaleItem";
import Connection from "../../lib/connection";
import withContainer from "../../helpers/withContainer";

class LocalesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locales: []
    };
  }

  componentDidMount() {
    Connection.get(`projects/${this.props.match.params.project_id}/locales`)
      .then(json => {
        this.setState({
          locales: json.data
        });
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
      />
    ));
    return (
      <ul className="uk-list uk-list-divider">{localeItems}</ul>
    );
  }
}

export default withRouter(withContainer(LocalesList));
