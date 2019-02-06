import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Route, NavLink, withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import Loader from "react-loader-spinner";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    isLoading: false
  };
  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/profile");
    }
  }

  submit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <div className="log-in-container">
        <h1>Log In</h1>
        <form className="log-in-form" onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.submit}
          />
          <div className="form-line" />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.submit}
          />
          <div className="form-line" />

          <Button color="primary">Submit</Button>
          
          {this.props.isLoading && (
            <div className="login-spinner">
            <h3>Loading...</h3>
              <Loader
                className="login-spinner"
                color="#4fa49a"
                type="Hearts"
                height={80}
                width={80}
              />
            </div>
          )}
        </form>
        <div>
          <h3>Don't have an account?</h3>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    isLoading: state.isLoading,
    error: state.error,
    isLoggedIn: state.isLoggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(LoginPage)
);
