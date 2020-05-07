import * as types from './types';

export const fetchCurrentUser = () => {
  console.log('action fetch Current user');
  return { type: types.FETCH_CURRENT_USER }
};

export const fetchAllPersonnel = () => {
  return {
    type: types.FETCH_ALL_PERSONNEL
  };
};


export const fetchUsers = () => ({ type: types.FETCH_USERS });


export const deleteUser = id => {
  console.log('user delete action', id);
  return {
    type: types.DELETE_USER,
    payload: { id },
  };
};

export const addUser = (entity) => {
  console.log('add user action');
  return {
    type: types.ADD_USER,
    payload: {
      entity,
    },
  };
};


export const changeRole = (personnel, role) => {
  return {
    type: types.CHANGE_ROLE,
    payload: {
      personnel,
      role,
    },
  };
};
