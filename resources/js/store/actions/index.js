import * as types from './types';

export const testAction = () => ({
  type: types.TEST_ACTION,
});

export const stopLoading = () => ({
  type: types.STOP_LOADING,
});

export const startLoading = () => ({
  type: types.START_LOADING,
});

