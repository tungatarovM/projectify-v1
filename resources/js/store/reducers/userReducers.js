import { filter, map } from 'lodash/collection';
import * as types from '../actions/types';

const userState = {
  data: [],
  currentUser: null,
  loading: true,
  error: null,
};

export default (state = userState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: payload.data,
      };
    case types.FETCH_CURRENT_USER_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case types.FETCH_ALL_PERSONNEL_SUCCESS:
      return {
        ...state,
        data: payload.data,
      };
    case types.FETCH_ALL_PERSONNEL_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: payload.data,
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        data: state.data.filter((user) => user.id !== payload.id),
      };
    case types.DELETE_USER_FAILURE:
      return {
        ...state,
        error: payload.error
      };
    case types.ADD_USER_SUCCESS:
      console.log('payload from add user success', payload);
      return {
        ...state,
        data: state.data.concat(payload.entity),
      };
    case types.ADD_USER_FAILURE:
      return {
        ...state,
        error: payload.error
      };
    case types.CHANGE_ROLE_SUCCESS:
      const updatedUsersId = map(payload.data, ({ id }) => id);
      const filtered = filter(state.data, user => !updatedUsersId.includes(user.id));
      return {
        ...state,
        data: [ ...payload.data, ...filtered ],
      };
    case types.CHANGE_ROLE_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case types.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case types.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
