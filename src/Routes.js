import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";

class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
