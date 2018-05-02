import React, { Component } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";

class ProjectsList extends Component {
  render() {
    const items = [{}, {}, {}];
    const projectItems = items.map((el, index) => (
      <ProjectItem key={`item-${index}`} />
    ));

    return (
      <div>
        <Navbar />
        <Container>
          <ul className="uk-list uk-list-divider">{projectItems}</ul>
        </Container>
      </div>
    );
  }
}

export default ProjectsList;
