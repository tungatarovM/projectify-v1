import * as types from '../actions/types';

const userState = {
  data: [
    { id: 1, firstname: 'Meirambek', lastname: 'Tungatarov', role: 'manager' },
    { id: 7, firstname: 'Saginbek', lastname: 'Tungatarov', role: 'developer' },
    { id:11, firstname: 'Gulzhanar', lastname: 'Tungatarova', role: 'submitter' },
    { id: 12, firstname: 'Alesh', lastname: 'Koishibaev', role: 'developer' },
  ],
  currentUser: null,
  loading: true,
  error: null,
};

export default (state = userState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CURRENT_USER_SUCCESS:
      console.log('fetch current user success', payload.user);
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
      console.log('all personnel success', payload);
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
      console.log('payload from delete user success', payload);
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
