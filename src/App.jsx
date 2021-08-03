/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./Error";
import Home from "./Home";
import Services from "./Services";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
