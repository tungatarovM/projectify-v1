import * as types from '../actions/types';

const projectState = {
  data: [],
  currentProject: null
};

export default (state = projectState, { payload }) => {
  switch (action.type) {
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
    default:
      return state;
  }
}
