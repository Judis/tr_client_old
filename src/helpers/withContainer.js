import React, { Component } from "react";
import Container from "../components/Container/Container";

export default function withContainer(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Container>
          <WrappedComponent {...this.props} />
        </Container>
      );
    }
  };
}
