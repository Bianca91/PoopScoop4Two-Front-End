import React, { Component } from 'react';
import './App.css';
import LoginPage from "./containers/LoginPage";
import SignUpPage from "./containers/SignUpPage";
import MainPage from './containers/MainPage'
import Profile from './containers/Profile'
import Matches from './containers/Matches'
import EditProfile from './containers/EditProfile'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/users/:id" component={Profile} />
            <Route exact path="/matches" component={Matches} />
            <Route exact path="/edit" component={EditProfile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
