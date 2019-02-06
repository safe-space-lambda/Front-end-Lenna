import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';
import { signup } from '../actions';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class SignUpForm extends Component {
  state = {
    name: "",
    phoneNumber: "",
    username: '',
    password: ''
  };

  handleChanges= e => {
    this.setState({ [e.target.name]: e.target.value });
  };

 signup = e => {
   e.preventDefault();
   this.props.signup(this.state);
 }
  

  render() {
    return (
      <div className="sign-up-container">
        <h1>Sign Up</h1>
        <form className="sign-up-form" onSubmit={this.signup}>
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
            name="phoneNumber"
            placeholder="Phone number ex. 18002345678"
            value={this.state.phoneNumber}
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

          <Button color="primary">Submit</Button>
        </form>
        <div>
          <h3>Already have an account?</h3>
          <NavLink to='/login'>Log In</NavLink>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        name: state.name,
        users: state.users,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { signup })(SignUpForm);
