import React from 'react';
import { Route } from 'react-router-dom';
import {Grid, Container, Box, ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import ManageUsers from "../users/ManageUsers";

export default ({ classes }) => {
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Route exact path='/manager' component={ManageUsers} />
        <Route path='/test/router' render={() => <h1>Test Route </h1>} />
      </Grid>
    </Container>
  );
};
