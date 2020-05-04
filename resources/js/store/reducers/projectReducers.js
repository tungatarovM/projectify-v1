import * as types from '../actions/types';
import { filter } from 'lodash/collection';

const projectState = {
  data: [],
  currentProject: null,
  loading: true,
  error: null,
};

export default (state = projectState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        data: payload.projects,
        loading: false,
      };
    case types.FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: payload.error,
      };
    case types.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        data: [ ...state.data, payload.project ],
      };
    case types.ADD_PROJECT_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case types.DELETE_PROJECT_SUCCESS:
      console.log('payload', payload);
      const { id:deletedProjectId } = payload;
      console.log('deleted project id ', deletedProjectId);
      const filtered = filter(state.data, ({ id }) => id !== deletedProjectId);
      console.log('projects', state.data);
      console.log('filtered', filtered);
      return {
        ...state,
        data: filtered,
      };
    case types.DELETE_PROJECT_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
}
