import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import postsReducer, {
  containerId as postsId,
} from "./shared/components/Posts/reducer";
import postsSagas from "./shared/components/Posts/sagas";

const rootReducer = combineReducers({
  [postsId]: postsReducer,
});

const sagas = [postsSagas];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
