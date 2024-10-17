// A basic redux store

import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

//Create saga middleware
const sagaMiddleware = createSagaMiddleware();

//Create store and apply middleware as saga
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
