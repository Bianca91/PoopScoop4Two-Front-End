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
        {/*<div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email || ""}
            onChange={this.handleChange}
          />
        </div>*/}

        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="email" name="email" id="email" onChange={this.handleChange} />
          <label class="mdl-textfield__label" htmlFor="email">Email..</label>
        </div>

        <br/>

        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="password" name="password" id="password" onChange={this.handleChange} />
          <label class="mdl-textfield__label" htmlFor="password">Password..</label>
        </div>        

        <br/>

        {/*<div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password || ""}
            onChange={this.handleChange}
          />
        </div>*/}

        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">Login</button>
        <br/>
        <br/>
        <Link to={ `/signup` }><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Sign up</button></Link>
      </form>
    );
  }
}

export default LoginForm
