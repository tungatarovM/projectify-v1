import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Grid, Container, Box, ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import Personnel from '../users/Personnel';
import Colleagues from '../users/Colleagues';
import Copyright from "./Copyright";
import {People} from "@material-ui/icons";

export default ({ classes }) => {
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Route exact path='/manager' component={Personnel} />
        <Route path='/test/router' render={() => <h1>Test Route </h1>} />
      </Grid>
    </Container>
  );
};
