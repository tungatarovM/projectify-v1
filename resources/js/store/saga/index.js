import { takeEvery, takeLatest, put, call, all } from 'redux-saga/effects';
import * as api from '../../services/api';
import * as types from '../actions/types';
import { stopLoading } from '../actions';

function* fetchHandler (...args) {
  const [callback, action] = args;
  const { type } = action;
  console.log('callback', callback);
  console.log('action', action);
  try {
    const data = yield call(callback);
    yield put({ type: type + '_SUCCESS', payload: { data } });
  } catch (error) {
    yield put({ type: type + '_FAILURE', payload: { error } });
  }
}

function* addHandler (...args) {
  const [callback, action] = args;
  const { type, payload: { entity } } = action;
  console.log('action', action);
  try {
    const newEntity = yield call(callback, entity);
    yield put({ type: type + '_SUCCESS', payload: { entity: newEntity }});
  } catch (error) {
    yield put({ type: type + '_ERROR', payload: { error } });
  }
}

function* deleteHandler (...args) {
  const [callback, action] = args;
  const { type, payload } = action;
  const { id } = payload;
  console.log('action', action);
  try {
    const response = yield call(callback, id);
    yield put({ type: type + '_SUCCESS', payload: { id }});
  } catch (error) {
    yield put({ type: type + '_FAILURE', payload: { error }});
  }
}

const fetchCurrentUserHandler = fetchHandler.bind(null, api.fetchCurrentUser);
const fetchPersonnelHandler = fetchHandler.bind(null, api.fetchAllPersonnel);
const fetchUsersHandler = fetchHandler.bind(null, api.fetchUsers);
const fetchProjectsHandler = fetchHandler.bind(null, api.fetchProjects);

const addUserHandler = addHandler.bind(null, api.addUser);
const addProjectHandler = addHandler.bind(null, api.addProject);

const deleteProjectHandler = deleteHandler.bind(null, api.deleteProject);
const deleteUserHandler = deleteHandler.bind(null, api.deleteUser);


function* changeUsersRoleHandler ({ type, payload }) {
  const { personnel, role } = payload;
  try {
    const data = yield(call(api.changeRole, personnel, role));
    yield put({ type: type + '_SUCCESS', payload: { data }});
  } catch (error) {
    yield put({ type: type + '_FAILURE', payload: { error }});
  }
}


export default function* () {
  yield takeEvery(types.DELETE_USER, deleteUserHandler);
  yield takeEvery(types.ADD_USER, addUserHandler);
  yield takeEvery(types.ADD_PROJECT, addProjectHandler);
  yield takeEvery(types.DELETE_PROJECT, deleteProjectHandler);
  yield takeEvery(types.CHANGE_ROLE, changeUsersRoleHandler);
  yield takeLatest(types.FETCH_CURRENT_USER, fetchCurrentUserHandler);
  yield takeLatest(types.FETCH_ALL_PERSONNEL, fetchPersonnelHandler);
  yield takeLatest(types.FETCH_USERS, fetchUsersHandler);
  yield takeLatest(types.FETCH_PROJECTS, fetchProjectsHandler);
}
