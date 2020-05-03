import React, { Component } from 'react';
import { connect } from 'react-redux';
import Personnel from "./list/Personnel";
import RoleManager from "./role/RoleManager";
import {Grid} from "@material-ui/core";

class ManageUsers extends Component {
  state = {

  };

  render() {
    const { personnel, projects } = this.props;
    return (
      <Grid container spacing={4} justify='space-between'>
        <Grid item sm={12} lg={6}>
          <Personnel personnel={personnel} projects={projects}/>
        </Grid>
        <Grid item sm={6} lg={6}>
          <RoleManager personnel={personnel} />
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

};

export default connect(mapStateToProps, mapActionsToDispatch)(ManageUsers);
