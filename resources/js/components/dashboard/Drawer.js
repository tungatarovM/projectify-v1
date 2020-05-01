import React from 'react';
import clsx from 'clsx';
import { IconButton, Divider, List, Drawer } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { managerListItems, userListItems, secondaryListItems} from './listItems';

function isManager(user) {
  return user.role === 'manager';
}

export default ({ classes, user, handleDrawerClose, open }) => {

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>{ isManager(user) && managerListItems }</List>
      <List>{ !isManager(user) && userListItems }</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
};
