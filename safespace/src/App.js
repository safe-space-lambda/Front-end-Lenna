import React, { Component } from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from './actions'

import Marketing from "./views/Marketing";
import LoginView from "./views/LoginView";
import ProfileView from "./views/ProfileView";
import SignUpView from "./views/SignUpView";
import SettingsView from "./views/SettingsView";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/">Log Out</NavLink>
          </div>
        </nav>
        <Route exact path="/" component={Marketing} />
        <Route path="/signup" component={SignUpView} />
        <Route path="/login" component={LoginView} />
        <Route path="/profile" component={ProfileView} />
        <Route path="/settings" component={SettingsView} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default 
  withRouter(connect(
    mapStateToProps,
    {}
  )(App))
