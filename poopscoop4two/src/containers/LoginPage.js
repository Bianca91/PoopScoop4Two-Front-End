import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { login  } from "../actions/users";
import  LoginForm from "../components/LoginForm";
import { Redirect } from "react-router-dom";

class LoginPage extends PureComponent {
  handleSubmit = data => {
    this.props.login(data.email, data.password);
  };

  render() {
    if (this.props.currentUser) return <Redirect to="/" />;

    return (
      <div>
        <h2 class="black-text">Login</h2>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    login: state.login
  };
};

export default connect(mapStateToProps, { login })(LoginPage);
