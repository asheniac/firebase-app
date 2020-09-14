import React, { Component } from "react";

class Login extends Component {
  state = {
    formdata: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
    register: false,
    loading: false,
  };

  handleFormType = () => {
    this.setState((prevState) => ({
      ...prevState,
      register: !prevState.register,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    if (this.state.register) {
      console.log(this.state.formdata, "register");
    } else {
      console.log(this.state.formdata, "login");
    }
  };

  handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => ({
      formdata: {
        ...prevState.formdata,
        [name]: value,
      },
    }));
  };

  render() {
    const { formdata, register, loading } = this.state;
    let formTitle = register ? "Register" : "Sign In";
    return (
      <>
        <div className="container login-wrapper">
          <form className="form-signin " onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">{formTitle}</h1>
            {register ? (
              <>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control mb-3"
                  placeholder="Your name"
                  value={formdata.name}
                  onChange={this.handleInputs}
                />

                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="form-control mb-3"
                  placeholder="Your lastname"
                  value={formdata.lastname}
                  onChange={this.handleInputs}
                />
              </>
            ) : null}

            <input
              type="email"
              id="email"
              className="form-control mb-3"
              placeholder="Email address"
              name="email"
              value={formdata.email}
              onChange={this.handleInputs}
            />

            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formdata.password}
              onChange={this.handleInputs}
            />

            <br />
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              disabled={loading}
            >
              {formTitle}
            </button>

            <div className="mt-3">
              {register ? "Need to sign in" : "Not registered"} click?
              <span
                className="login_type_btn"
                onClick={() => this.handleFormType()}
              >
                {" "}
                here{" "}
              </span>
              to {register ? "Sign In" : "Register"}.
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Login;