import React, { PureComponent } from "react";
import {Link} from 'react-router-dom'

class LoginForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="row">
          <div class="col s4">
          </div>
          <div class="input-field col s4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email || ""}
              onChange={this.handleChange}
            />
          </div>
          <div class="col s4">
          </div>
        </div>
          <div class="row">
          <div class="col s4">
          </div>
          <div class="input-field col s4">
            <label  htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password || ""}
              onChange={this.handleChange}
            />
          </div>
          <div class="col s4">
          </div>
        </div>


        <button class="btn btn-large green darken-4 waves-effect waves-light z-depth-2" type="submit"><
          i class="material-icons left">done<
          /i>Login<
        /button>
        <br/>
        <br/>
        <Link to={ `/signup` }><
          button class="btn orange lighten-2 waves-effect waves-light black-text z-depth-1"><
            i class="material-icons left">edit<
            /i>Sign up<
          /button><
        /Link>
      </form>
    );
  }
}

export default LoginForm
