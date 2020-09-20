import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const prevent = (HocComponent) => {
  class Prevent extends Component {
    render() {
      return this.props.auth.isAuth ? (
        <Redirect to="/dashboard" />
      ) : (
        <HocComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = (state) => ({ auth: state.auth });

  return connect(mapStateToProps)(Prevent);
};

export default prevent;
