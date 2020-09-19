import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import Reviews from "./Components/Reviews";
//react-toastify
import ToastsComponent from "./utils/toasts";
import { autoSignIn, logoutUser } from "./store/actions";

//router guard
import authHoc from "./Components/hoc/authHoc";

class Routes extends Component {
  componentDidMount() {
    this.props.dispatch(autoSignIn());
  }
  handleLogout = () => {
    return this.props.dispatch(logoutUser());
  };
  app = (auth) => {
    return (
      <div>
        <BrowserRouter>
          <Header auth={auth} Logout={this.handleLogout} />
          <Switch>
            <Route
              exact
              path="/dashboard/profile"
              component={authHoc(Profile)}
            />
            <Route
              exact
              path="/dashboard/reviews"
              component={authHoc(Reviews, true)}
            />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={authHoc(Dashboard)} />
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
