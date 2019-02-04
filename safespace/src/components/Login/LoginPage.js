import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    username: '',
    password: ''

  };
  render() {
    return (
      <div className="log-in-container">
        <h1>Log In</h1>
        <form className="log-in-form">

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
          />
          <div className="form-line" />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
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