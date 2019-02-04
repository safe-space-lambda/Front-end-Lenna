import React, { Component } from 'react';
import './App.css';
import SignUpForm from './components/Login/SignUpForm'
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    }
  }
  render() {
    return (
      <div className="App">
        <SignUpForm />
        
      </div>
    );
  }
}

export default App;
