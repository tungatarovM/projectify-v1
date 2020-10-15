import * as types from './types';

export const fetchProjects = () => ({
  type: types.FETCH_PROJECTS,
});

export const addProject = (entity) => {
  console.log('add project action call');
  return {
    type: types.ADD_PROJECT,
    payload: {
      entity,
    },
  };
};

export const deleteProject = (id) => {
  console.log('add project action');
  return {
    type: types.DELETE_PROJECT,
    payload: {
      id,
    },
  };
};
