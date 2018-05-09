import React, { Component } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import withContainer from "../../helpers/withContainer";
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
      <ul className="uk-list uk-list-divider">{projectItems}</ul>
    );
  }
}

export default withContainer(ProjectsList);
