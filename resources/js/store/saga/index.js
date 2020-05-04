import { takeEvery, takeLatest, put, call, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import {
  fetchCurrentUser, deleteUser,
  fetchAllPersonnel, fetchUsers,
  addUser, fetchProjects,
  changeRole,
} from "../../services/api";
import { stopLoading } from '../actions';
import {
  fetchCurrentUserSuccess, fetchCurrentUserFailure,
  deleteUserSuccess, deleteUserFailure,
  addUserSuccess, addUserFailure,
  fetchUsersSuccess, fetchUsersFailure,
  fetchAllPersonnelSuccess, fetchAllPersonnelFailure,
  changeRoleSuccess, changeRoleFailure
} from '../actions/users';
import {
  fetchProjectsSuccess, fetchProjectsFailure,
} from "../actions/projects";

function* testHandler () {
  console.log('test_action is caught');
  yield put({ type: types.TEST_ACTION_HANDLED, payload: []});
}

function* fetchCurrentUserHandler () {
  try {
    const user = yield call(fetchCurrentUser);
    console.log('fetched user', user);
    yield all([
      put(fetchCurrentUserSuccess(user)),
      put(stopLoading()),
    ]);
  } catch (err) {
    yield all([
      put(fetchCurrentUserFailure(err)),
      put(stopLoading()),
    ]);
    console.log('fetched error', err);
  }
}

function* deleteUserHandler ({ id }) {
  try {
    console.log('delete user id ', id);
    const response = yield(call(deleteUser, id));
    console.log('delete user success', response);
    yield put(deleteUserSuccess(id));
  } catch (err) {
    yield put(deleteUserFailure(err));
  }
}

function* addUserHandler ({ payload }) {
  try {
    const newUser = yield(call(addUser, payload.user));
    yield put(addUserSuccess(newUser));
  } catch (error) {
    yield put(addUserFailure(error));
  }
}

function* fetchAllPersonnelHandler () {
  try {
    const users = yield(call(fetchAllPersonnel));
    yield put(fetchAllPersonnelSuccess(users));
  } catch (error) {
    yield put(fetchAllPersonnelFailure(error));
  }
}

function* fetchUsersHandler () {
  try {
    const users = yield(call(fetchUsers));
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

function* fetchProjectsHandler () {
  try {
    const projects = yield(call(fetchProjects));
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield put(fetchProjectsFailure(error));
  }
}

function* changeUsersRoleHandler ({ payload }) {
  const { personnel, role } = payload;
  try {
    const updatedPersonnel = yield(call(changeRole, personnel, role));
    yield put(changeRoleSuccess(updatedPersonnel));
  } catch (error) {
    yield put(changeRoleFailure(error));
  }
}

export default function* () {
  yield takeEvery(types.DELETE_USER, deleteUserHandler);
  yield takeEvery(types.ADD_USER, addUserHandler);
  yield takeEvery(types.TEST_ACTION, testHandler);
  yield takeEvery(types.CHANGE_ROLE, changeUsersRoleHandler);
  yield takeLatest(types.FETCH_CURRENT_USER, fetchCurrentUserHandler);
  yield takeLatest(types.FETCH_ALL_PERSONNEL, fetchAllPersonnelHandler);
  yield takeLatest(types.FETCH_USERS, fetchUsersHandler);
  yield takeLatest(types.FETCH_PROJECTS, fetchProjectsHandler);
}
