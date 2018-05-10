import React, { Component } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import withContainer from "../../helpers/withContainer";
import ProjectsAPI from "../../lib/api/projects";
import AddProjectModal from "../AddProjectModal/AddProjectModal";

class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects() {
    ProjectsAPI.load().then(projects => {
      this.setState({ projects });
    });
  }

  removeProject(projectId) {
    ProjectsAPI.remove(projectId).then(() => {
      this.loadProjects();
    });
  }

  render() {
    const projectItems = this.state.projects.map(el => (
      <ProjectItem
        name={el.name}
        id={el.id}
        key={`item-${el.id}`}
        removeProject={this.removeProject.bind(this)}
      />
    ));

    return (
      <div>
        <ul className="uk-list uk-list-divider">{projectItems}</ul>
        <AddProjectModal onSuccess={this.loadProjects.bind(this)} />
      </div>
    );
  }
}

export default withContainer(ProjectsList);
