/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./components/assets/scss/style.scss";
import "./components/assets/vendor/font-awesome/css/all.min.css";
import "./components/assets/vendor/bootstrap-icons/bootstrap-icons.css";
const root = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
