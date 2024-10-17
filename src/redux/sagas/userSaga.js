// src/redux/sagas/userSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { fetchUsersSuccess, fetchUsersFailure } from "../actions/userActions";

// Worker Saga: Will be fired on 'FETCH_USERS_REQUEST' actions
function* fetchUsers() {
  try {
    // Call the API (using 'call' effect to block until resolved)
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );

    // Dispatch the success action
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    // Dispatch the failure action
    yield put(fetchUsersFailure(error.message));
  }
}

// Watcher Saga: Spawns a new fetchUsers saga on each 'FETCH_USERS_REQUEST' action
function* watchFetchUsers() {
  yield takeEvery("FETCH_USERS_REQUEST", fetchUsers);
}

export default watchFetchUsers;
