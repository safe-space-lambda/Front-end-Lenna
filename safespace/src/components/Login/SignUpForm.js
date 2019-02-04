import React, { Component } from "react";

export default class SignUpForm extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    username: '',
    password: ''

  };
  render() {
    return (
      <div className="sign-up-container">
        <h1>Sign Up</h1>
        <form className="sign-up-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={this.state.name}
          />
          <div className="form-line" />

          <input
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Phone number"
            value={this.state.phone}
          />
          <div className="form-line" />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
          />
          <div className="form-line" />

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

          <button onClick={handleClick}>Submit</button>
        </form>
        <div>
          <h3>Already have an account? Log In </h3>
        </div>
      </div>
    );
  }
}
