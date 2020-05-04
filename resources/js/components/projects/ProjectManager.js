import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid } from '@material-ui/core';
import Projects from './Projects';
import { addProject, deleteProject } from '../../store/actions/projects';

class ProjectManager extends Component {
  state = {

  };

  render() {
    const { projects } = this.props;
    return (
      <Grid container spacing={4} justify='space-between'>
        <Grid item sm={12} lg={8}>
          <Projects projects={projects} addProject={addProject}/>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = ({ users, projects }) => ({
  personnel: users.data,
  projects: projects.data,
});

const mapActionsToDispatch = {
  addProject,
  deleteProject,
};

export default connect(mapStateToProps, mapActionsToDispatch)(ProjectManager);
