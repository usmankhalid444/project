/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./components/assets/scss/style.scss";
import "./components/assets/vendor/font-awesome/css/all.min.css";
import "./components/assets/vendor/bootstrap-icons/bootstrap-icons.css";
const root = document.getElementById("root");
// import "./assets/vendor/animate/animate.min.css";
// import "./assets/vendor/tiny-slider/tiny-slider.css";
// import "./assets/vendor/aos/aos.css";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
