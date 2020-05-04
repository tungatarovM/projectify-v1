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


export const addProject = (project) => {
  console.log('add project action');
  return {
    type: types.ADD_PROJECT,
    payload: {
      project,
    },
  };
};

export const addProjectSuccess = (project) => {
  return {
    type: types.ADD_PROJECT_SUCCESS,
    payload: {
      project,
    }
  };
};

export const addProjectFailure = (error) => {
  return {
    type: types.ADD_PROJECT_FAILURE,
    payload: {
      error,
    },
  };
};

export const deleteProject = (project) => {
  console.log('add project action');
  return {
    type: types.DELETE_PROJECT,
    payload: {
      project,
    },
  };
};

export const deleteProjectSuccess = (project) => {
  return {
    type: types.DELETE_PROJECT_SUCCESS,
    payload: {
      project,
    }
  };
};

export const deleteProjectFailure = (error) => {
  return {
    type: types.DELETE_PROJECT_FAILURE,
    payload: {
      error,
    },
  };
};
