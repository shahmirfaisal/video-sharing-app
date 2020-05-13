import React from "react";
import {
  render
} from "react-dom";
import App from "./App/App";
import "./index.css";
import {
  BrowserRouter
} from "react-router-dom";
import "video-react/dist/video-react.css";
import {
  createStore,
  applyMiddleware
} from "redux";
import {
  reducer
} from "./store/reducers/reducer";
import {
  Provider
} from "react-redux";
import thunk from "redux-thunk";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";

const store = createStore(reducer, applyMiddleware(thunk));

render( <
  Provider store = {
    store
  } >
  <
  BrowserRouter >
  <
  App / >
  <
  /BrowserRouter> < /
  Provider > ,
  document.getElementById("root")
);