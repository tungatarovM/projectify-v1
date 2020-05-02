import * as types from './types';

export const fetchProjects = () => ({
  type: types.FETCH_PROJECTS,
});

export const fetchProjectsSuccess = projects => ({
  type: types.FETCH_PROJECTS_SUCCESS,
  payload: {
    projects,
  },
});

export const fetchProjectsFailure = error => ({
  type: types.FETCH_PROJECTS_FAILURE,
  payload: {
    error
  }
});
