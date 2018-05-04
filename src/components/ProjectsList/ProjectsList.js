import React, { Component } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import Connection from "../../lib/connection";

class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    Connection.get("projects")
      .then(response => response.json())
      .then(json => {
        this.setState({
          projects: json.data
        });
      });
  }

  render() {
    const projectItems = this.state.projects.map(el => (
      <ProjectItem name={el.name} id={el.id} key={`item-${el.id}`} />
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
