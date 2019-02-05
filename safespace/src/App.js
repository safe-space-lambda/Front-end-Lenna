import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Marketing from './views/Marketing'
import LoginView from './views/LoginView'
import ProfileView from './views/ProfileView'
import SignUpView from './views/SignUpView'
import SettingsView from './views/SettingsView'


class App extends Component {
  
  componentWillReceiveProps = newProps => {
      if(newProps.isLoggedIn !== this.props.isLoggedIn){
        this.props.history.push('/profile');
      }
  }
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">
             Home
            </NavLink>
            <NavLink to="/login">
              Log In
            </NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </nav>
        <Route exact path='/' component={Marketing} />
        <Route path='/signup' component={SignUpView} />
        <Route path='/login' component={LoginView} />
        <Route path='/profile' component={ProfileView} />
        <Route path='/settings' component={SettingsView} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})


export default withRouter(connect(mapStateToProps, {})(App));
