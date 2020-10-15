import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './AppBar';
import Drawer from './Drawer';
import Content from './Content';
import useStyles from './styles';
import { fetchAllPersonnel, fetchUsers } from "../../store/actions/users";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { fetchProjects } from '../../store/actions/projects';

function Dashboard ({ user, fetchAllPersonnel, fetchUsers, fetchProjects }) {
  console.log('dashboard render');
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [forceUpdateState, updateState] = React.useState(false);

  const forceUpdate = () => {
    updateState(prevState => ({
      ...prevState, [forceUpdateState]: !prevState.forceUpdateState })
    );
  };

  useEffect(() => {
    console.log('useEffect DashBoard');
    if (user.role === 'manager') {
      fetchAllPersonnel();
    } else {
      fetchUsers();
    }
    fetchProjects();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Router>
      <Switch>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            classes={classes}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
          />
          <Drawer
            forceUpdate={forceUpdate}
            classes={classes}
            user={user}
            open={open}
            handleDrawerClose={handleDrawerClose}
          />
          <main className={classes.content}>
            <Content classes={classes} />
          </main>
        </div>
      </Switch>
    </Router>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToActions = {
  fetchAllPersonnel,
  fetchUsers,
  fetchProjects,
};

export default connect(mapStateToProps, mapDispatchToActions)(Dashboard);
