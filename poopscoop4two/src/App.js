import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import LoginPage from "./containers/LoginPage";
import MainPage from './containers/MainPage'
import Profile from './containers/Profile'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/user/:id" component={Profile} />
        </Router>
      </div>
    );
  }
}

export default App;
