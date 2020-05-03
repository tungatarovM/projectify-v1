import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isNull } from 'lodash/lang';
import { fetchCurrentUser } from './store/actions/users';
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {

  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    const { user, isLoading } = this.props;
    return (
      <React.Fragment>
        { isLoading && <h1>Loading...</h1>}
        { !isLoading && <Dashboard user={user} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ users }) => {
  console.log('users state', users);
  return {
    user: users.currentUser,
    isLoading: users.loading && isNull(users.currentUser),
    error: users.error,
  };
};

const mapDispatchToProps = {
  fetchCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
