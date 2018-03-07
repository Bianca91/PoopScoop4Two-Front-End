import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import MainPage from './containers/MainPage'
import Profile from './containers/Profile'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'




class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/users/:id" component={Profile} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
