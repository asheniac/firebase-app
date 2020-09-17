import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
//react-toastify
import ToastsComponent from "./utils/toasts";
import { autoSignIn } from "./store/actions";

class Routes extends Component {
  componentDidMount() {
    return this.props.dispatch(autoSignIn());
  }

  app = (auth) => {
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
          <ToastsComponent />
        </BrowserRouter>
      </div>
    );
  };
  render() {
    const { auth } = this.props;
    return <>{auth.checkingAuth ? this.app(auth) : "loading"}</>;
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(Routes);
