import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge, } from "@material-ui/core";
import { Menu, Notifications, Person } from '@material-ui/icons';
import clsx from "clsx";

export default ({ classes, open, handleDrawerOpen }) => {
  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <Menu />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Bug Tracker
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Person />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
