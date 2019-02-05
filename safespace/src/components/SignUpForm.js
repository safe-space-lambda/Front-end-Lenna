import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';

export default class SignUpForm extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    username: '',
    password: ''
  };

  handleChanges= e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  

  render() {
    return (
      <div className="sign-up-container">
        <h1>Sign Up</h1>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <div className="form-line" />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={this.state.phone}
            onChange={this.handleChanges}
          />
          <div className="form-line" />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChanges}
          />
          <div className="form-line" />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChanges}
          />
          <div className="form-line" />

          <button>Submit</button>
        </form>
        <div>
          <h3>Already have an account?</h3>
          <NavLink to='/login'>Log In</NavLink>
        </div>
      </div>
    );
  }
}
