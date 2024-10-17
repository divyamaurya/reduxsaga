// src/redux/sagas/index.js
import { all } from "redux-saga/effects";
import watchFetchUsers from "./userSaga";

// Root saga
export default function* rootSaga() {
  yield all([
    watchFetchUsers(), // Add other watchers here
  ]);
}
