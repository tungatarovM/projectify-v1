import React from 'react';
import { Route } from 'react-router-dom';
import {Grid, Container, Box, ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import ManageUsers from "../users/ManageUsers";
import ProjectManager from "../projects/ProjectManager";
import ProjectDetail from "../projects/ProjectDetail";

export default ({ classes }) => {
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Route exact path='/manager'>
          <ManageUsers />
        </Route>
        <Route exact path='/manager/projects'>
          <ProjectManager />
        </Route>
        <Route path='/manager/projects/:id'>
          <ProjectDetail />
        </Route>
      </Grid>
    </Container>
  );
};
