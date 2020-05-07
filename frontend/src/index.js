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
  BrowserRouter >
  <
  App / >
  <
  /BrowserRouter> ,
  document.getElementById("root")
);