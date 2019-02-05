import React, { Component } from "react";
import { connect } from 'react-redux';
import {login} from '../actions'

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };
  submit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = () => {
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

          <button>Submit</button>
        </form>
        <div>
          <h3>Don't have an account? Sign In </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { login })(LoginPage);
