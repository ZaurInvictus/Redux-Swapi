import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import reducers from "./reducers";
import rootReducer from './reducers';
// rootReducer from ./reducers

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
