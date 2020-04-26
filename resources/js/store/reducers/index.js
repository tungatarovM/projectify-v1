import { combineReducers } from 'redux';
import userReducers from './userReducers';
import projectReducers from './projectReducers';

export default combineReducers({
  users: userReducers, projects: projectReducers,
});
