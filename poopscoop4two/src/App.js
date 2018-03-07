import React, { Component } from "react";
import "./App.css";
import MainPage from "./containers/MainPage";
import LoginPage from "./containers/LoginPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/login" component={LoginPage} />
        </Router>
      </div>
    );
  }
}

export default App;
