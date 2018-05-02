import React, { Component } from "react";
import LocaleItem from "../LocaleItem/LocaleItem";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";

class LocalesList extends Component {
  render() {
    const localeItems = [{}, {}].map((locale, index) => (
      <LocaleItem key={`localeItem-${index}`} />
    ));
    return (
      <div>
        <Navbar />
        <Container>
          <ul className="uk-list uk-list-divider">{localeItems}</ul>
        </Container>
      </div>
    );
  }
}

export default LocalesList;
