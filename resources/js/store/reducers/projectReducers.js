import * as types from '../actions/types';

const projectState = {
  projects: ['project1', 'project2', 'project3'],
  currentProject: null
};

export default (state = projectState, action) => {
  switch (action.type) {
    case types.TEST_ACTION_HANDLED:
      console.log('test_action_handled reducer');
      return { ...state, projects: ['newProject1', 'newProject2', 'newProject3'] };
    default:
      return state;
  }
}
