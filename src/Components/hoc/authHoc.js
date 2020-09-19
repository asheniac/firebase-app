import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const authHoc = (component, isAdmin) => {
  class AuthHoc extends Component {
    authCheck = (props) => {
      const { auth } = this.props;
      if (auth.isAuth) {
        //Go to Dashboard
        const role = auth.user.role;
        if (role === 1 && isAdmin) {
          return <Redirect to="/dashboard" />;
        }
        return <component {...this.props} />;
      } else {
        //Go to login poage
        return <Redirect to="/login" />;
      }
    };

    render() {
      return this.authCheck();
    }
  }
  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  return connect(mapStateToProps)(AuthHoc);
};

export default authHoc;
