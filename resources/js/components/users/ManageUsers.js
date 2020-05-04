import React, { Component } from 'react';
import { connect } from 'react-redux';
import Personnel from "./list/Personnel";
import RoleManager from "./role/RoleManager";
import {Grid} from "@material-ui/core";
import { changeRole } from '../../store/actions/users';

class ManageUsers extends Component {
  state = {

  };

  render() {
    const { personnel, projects, changeRole } = this.props;
    return (
      <Grid container spacing={4} justify='space-between'>
        <Grid item sm={12} lg={8}>
          <Personnel personnel={personnel} projects={projects}/>
        </Grid>
        <Grid item sm={12} lg={4}>
          <RoleManager personnel={personnel} changeRole={changeRole}/>
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
  changeRole,
};

export default connect(mapStateToProps, mapActionsToDispatch)(ManageUsers);
