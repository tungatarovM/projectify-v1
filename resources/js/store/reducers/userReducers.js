import { filter, reduce } from 'lodash/collection';
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
        currentUser: payload.user,
      };
    case types.FETCH_CURRENT_USER_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case types.FETCH_ALL_PERSONNEL_SUCCESS:
      return {
        ...state,
        data: payload.users,
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
        data: state.data.concat(payload.user),
      };
    case types.ADD_USER_FAILURE:
      return {
        ...state,
        error: payload.error
      };
    case types.CHANGE_ROLE_SUCCESS:
      const ids = reduce(payload.personnel, (acc, user) => [ ...acc, user.id ], []);
      console.log('ids', ids);
      const filtered = filter(state.data, user => !ids.includes(user.id));
      console.log('filtered', filtered);
      return {
        ...state,
        data: [ ...filtered, ...payload.personnel ],
      };
    case types.CHANGE_ROLE_FAILURE:
      console.log('change role failure reducer', payload.error);
      return state;
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
