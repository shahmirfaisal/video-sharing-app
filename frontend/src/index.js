import React from "react";
import {
  render
} from "react-dom";
import App from "./App/App";
import './index.css';
import {
  BrowserRouter
} from 'react-router-dom';
import "video-react/dist/video-react.css";



render( <
  React.StrictMode >
  <
  BrowserRouter >
  <
  App / >
  <
  /BrowserRouter> < /
  React.StrictMode > ,
  document.getElementById("root")
);