import * as types from './types';
import {CHANGE_USERS_ROLE_SUCCESS} from "./types";

export const fetchCurrentUser = () => {
  console.log('action fetch Current user');
  return { type: types.FETCH_CURRENT_USER }
};

export const fetchCurrentUserSuccess = (user) => ({
  type: types.FETCH_CURRENT_USER_SUCCESS,
  payload: {
    user,
  },
});

export const fetchCurrentUserFailure = error => ({
  type: types.FETCH_CURRENT_USER_FAILURE,
  payload: {
    error
  },
});

export const fetchAllPersonnel = () => {
  return {
    type: types.FETCH_ALL_PERSONNEL
  };
};

export const fetchAllPersonnelSuccess = (personnel) => {
  return {
    type: types.FETCH_ALL_PERSONNEL_SUCCESS,
    payload: {
      users: personnel,
    }
  };
};

export const fetchAllPersonnelFailure = (error) => {
  return {
    type: types.FETCH_ALL_PERSONNEL_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchUsers = () => ({ type: types.FETCH_USERS });

export const fetchUsersSuccess = users => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: {
    users,
  },
});
export const fetchUsersFailure = error => ({
  type: types.FETCH_USERS_FAILURE,
  payload: {
    error,
  },
});

export const deleteUser = id => {
  console.log('user delete action', id);
  return {
    type: types.DELETE_USER,
    id,
  };
};

export const deleteUserSuccess = (id) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: {
    id,
  }
});

export const deleteUserFailure = (error) => ({
  type: types.DELETE_USER_FAILURE,
  payload: {
    error,
  }
});

export const addUser = (user) => {
  console.log('add user action');
  return {
    type: types.ADD_USER,
    payload: {
      user,
    },
  };
};

export const addUserSuccess = (user) => {
  return {
    type: types.ADD_USER_SUCCESS,
    payload: {
      user,
    }
  };
};

export const addUserFailure = (error) => {
  return {
    type: types.ADD_USER_FAILURE,
    payload: {
      error,
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

export const changeRoleSuccess = (personnel) => {
  return {
    type: types.CHANGE_ROLE_SUCCESS,
    payload: {
      personnel,
    },
  };
};

export const changeRoleFailure = (error) => {
  return {
    type: types.CHANGE_ROLE_FAILURE,
    payload: {
      error,
    },
  };
};

