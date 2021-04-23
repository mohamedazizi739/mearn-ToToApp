import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "../reducer";

import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  userReducer,

  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
  )
);

export default store;