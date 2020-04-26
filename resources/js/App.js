import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { testAction } from './store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const App = (props) =>  {
  const classes = useStyles();
  console.log('App coment');
  console.log(props);

  const handleClick = () => {
    console.log('click');
    props.testAction();
  }

  return (
    <div>
      {props.projects.map(project => (<li>{project}</li>))}
      <div className={classes.root}>
        <Button onClick={() => handleClick()}variant="contained">Default</Button>
        <Button onClick={() => handleClick()} variant="contained" color="primary">
          Primary
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>  ({
  projects: state.projects.projects,
});

const mapDispatchToProps = {
  testAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
